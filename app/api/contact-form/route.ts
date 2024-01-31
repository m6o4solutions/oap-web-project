import { NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request";

import { createMessage } from "@/lib/data/operations/mutations/index";

/* api endpoint */
const endpoint = process.env.NEXT_PUBLIC_CONTENT_API!;

/* auth token */
const authToken = process.env.AUTH_TOKEN!;

/* recaptcha secret key */
const secretKey = process.env.RECAPTCHA_SECRET_KEY!;

export async function POST(request: Request) {
	const client = new GraphQLClient(endpoint, {
		headers: { authorization: `Bearer ${authToken}` },
	});

	try {
		/* authorization request endpoint */
		const authEndpoint = "https://www.google.com/recaptcha/api/siteverify";

		const body = await request.json();

		const {
			firstName,
			lastName,
			emailAddress,
			telephoneNumber,
			messageTitle,
			messageContent,
			gRecaptchaToken,
		} = body;

		/* submit authorization request to Google verification servers */
		const result = await fetch(authEndpoint, {
			method: "POST",
			body: `secret=${secretKey}&response=${gRecaptchaToken}`,
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
		});

		const { success, score } = await result.json();

		console.log(
			"Was the reCAPTCHA token valid?",
			success,
			"What was the reCAPTCHA score?",
			score,
		);

		if (success && score >= 0.5) {
			/* the authorization request was successful save contact message */
			const contactMessage = await client.request(createMessage, {
				firstName: firstName,
				lastName: lastName,
				emailAddress: emailAddress,
				telephoneNumber: telephoneNumber,
				messageTitle: messageTitle,
				messageContent: messageContent,
			});

			return NextResponse.json(contactMessage);
		} else {
			/* the authorization request was unsuccessful */
			return new NextResponse("Unauthorized.", { status: 401 });
		}
	} catch (error) {
		console.error("[CONTACT_FORM_POST]", error);
		return new NextResponse("Internal server error.", { status: 500 });
	}
}
