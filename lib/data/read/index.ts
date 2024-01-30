import {
	qryContactPage,
	qryGlobal,
	qryPrivacyPolicyPage,
} from "@/lib/data/operations/queries";

/* graphql endpoint */
const endpoint = process.env.NEXT_PUBLIC_HIGH_PERFORMANCE_CONTENT_API!;

/* get global data */
export const getGlobal = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryGlobal }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.globals[0];
	} catch (error) {
		console.log("[GET_GLOBAL]", error);
	}
};

/* get privacy policy page data */
export const getPrivacyPolicyPage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryPrivacyPolicyPage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("[GET_PRIVACY_POLICY_PAGE]", error);
	}
};

/* get contact page data */
export const getContactPage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryContactPage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("[GET_CONTACT_PAGE]", error);
	}
};
