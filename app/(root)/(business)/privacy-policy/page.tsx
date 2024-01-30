import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getPrivacyPolicyPage } from "@/lib/data/read";

import {
	PrivacyPolicyContentWidget,
	PrivacyPolicyHeroWidget,
} from "@/components";

type PrivacyPolicyPageProps = {
	pageTitle: string;
	pageMetaDescription: string;
	heroActionBlock: {
		content: {
			content: { header: { title: string } };
			image: { public_id: string };
		};
	};
	pasHeaderContentImageListBlock: {
		header: {
			content: {
				header: { title: string; subtitle: string };
				content: { html: string };
			};
		};
	};
};

export async function generateMetadata(): Promise<Metadata> {
	const {
		pageTitle,
		pageMetaDescription,
		heroActionBlock,
	}: PrivacyPolicyPageProps = await getPrivacyPolicyPage();

	return {
		title: pageTitle,
		description: pageMetaDescription,
		openGraph: {
			type: "article",
			images: [
				{
					width: 1200,
					height: 630,
					url: getCldOgImageUrl({
						src: heroActionBlock.content.image.public_id,
						format: "jpg",
					}),
				},
			],
		},
	};
}

const PrivacyPolicyPage = async () => {
	const {
		pageTitle,
		pageMetaDescription,
		heroActionBlock,
		pasHeaderContentImageListBlock,
	}: PrivacyPolicyPageProps = await getPrivacyPolicyPage();

	return (
		<article className="mt-24">
			<section id="hero" className="py-5">
				<PrivacyPolicyHeroWidget />
			</section>

			<section id="content" className="py-5">
				<PrivacyPolicyContentWidget />
			</section>
		</article>
	);
};

export default PrivacyPolicyPage;
