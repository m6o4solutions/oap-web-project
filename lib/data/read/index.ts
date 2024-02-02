import {
	qryAboutPage,
	qryAllServices,
	qryContactPage,
	qryGlobal,
	qryHomePage,
	qryNotam,
	qryPilotsPage,
	qryPrivacyPolicyPage,
	qryServicesPage,
} from "@/lib/data/operations/queries";

/* graphql endpoint */
const endpoint = process.env.NEXT_PUBLIC_HIGH_PERFORMANCE_CONTENT_API!;

/* openweather variables */
const key = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY!;
const latitude = process.env.NEXT_PUBLIC_LATITUDE!;
const longitude = process.env.NEXT_PUBLIC_LONGITUDE!;
const language = process.env.NEXT_PUBLIC_LANGUAGE!;
const units = process.env.NEXT_PUBLIC_UNITS!;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=${units}&lang=${language}`;

/* get weather data */
export const getWeather = async () => {
	try {
		const result = await fetch(url, { next: { revalidate: 21600 } });

		const data = await result.json();

		return data;
	} catch (error) {
		console.log("[GET_WEATHER]", error);
	}
};

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

/* get services page data */
export const getServicesPage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryServicesPage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("[GET_SERVICES_PAGE]", error);
	}
};

/* get all services */
export const getAllServices = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryAllServices }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.services;
	} catch (error) {
		console.log("[GET_ALL_SERVICES]", error);
	}
};

/* get pilots page data */
export const getPilotsPage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryPilotsPage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("[GET_PILOTS_PAGE]", error);
	}
};

/* get about page data */
export const getAboutPage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryAboutPage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("[GET_ABOUT_PAGE]", error);
	}
};

/* get home page data */
export const getHomePage = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryHomePage }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.pages[0];
	} catch (error) {
		console.log("[GET_HOME_PAGE]", error);
	}
};

/* get NOTAM data */
export const getNotam = async () => {
	try {
		const result = await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({ query: qryNotam }),
			headers: { "Content-Type": "application/json" },
		});

		const { data } = await result.json();

		return data.notams;
	} catch (error) {
		console.log("[GET_NOTAM]", error);
	}
};
