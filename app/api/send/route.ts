import { NextResponse } from "next/server";
import { Resend } from "resend";

import { ContactFormNotification } from "@/components/index";

const apiKey = process.env.RESEND_API_KEY!;

const resend = new Resend(apiKey);

export async function POST(request: Request) {
	try {
		const body = await request.json();

		const { firstName, lastName, emailAddress, telephoneNumber, messageTitle, messageContent } = body;

		const notification = await resend.emails.send({
			from: "Hello @ Orly Airpark <hello@orly-airpark.com>",
			to: ["hello@orly-airpark.com"],
			cc: ["hello@s3interdev.com"],
			subject: "🛟 New Client Contact Form Message 🛟",
			react: ContactFormNotification({
				firstName: firstName,
				lastName: lastName,
				emailAddress: emailAddress,
				telephoneNumber: telephoneNumber,
				messageTitle: messageTitle,
				messageContent: messageContent,
			}),
		});

		return NextResponse.json(notification);
	} catch (error) {
		console.error("[CONTACT_FORM_SEND]", error);
		return new NextResponse("Internal server error.", { status: 500 });
	}
}
