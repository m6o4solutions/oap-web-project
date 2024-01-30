import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getContactPage, getGlobal } from "@/lib/data/read";

type ContactPageProps = {
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

type GlobalDataProps = {
	siteContactDetails: {
		list: [
			{
				header: {
					title: string;
				};
				content: {
					html: string;
				};
			},
		];
	};
};

export async function generateMetadata(): Promise<Metadata> {
	const { pageTitle, pageMetaDescription, heroActionBlock }: ContactPageProps =
		await getContactPage();

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

import { ContactContentWidget, ContactHeroWidget } from "@/components/index";

const ContactPage = async () => {
	const { heroActionBlock, pasHeaderContentImageListBlock }: ContactPageProps =
		await getContactPage();
	const { siteContactDetails }: GlobalDataProps = await getGlobal();

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<ContactHeroWidget heroActionBlock={heroActionBlock} />
			</section>

			<section id="content">
				<ContactContentWidget
					pasHeaderContentImageListBlock={pasHeaderContentImageListBlock}
					siteContactDetails={siteContactDetails}
				/>
			</section>
		</article>
	);
};

export default ContactPage;
