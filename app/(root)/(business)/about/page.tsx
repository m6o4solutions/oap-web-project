import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getAboutPage } from "@/lib/data/read/index";

import { AboutContentWidget, AboutHeroWidget } from "@/components/index";

type PilotsPageProps = {
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
		list: {
			content: {
				header: { title: string; subtitle: string };
				content: { html: string };
			};
		}[];
	};
	galleryHeaderGalleryBlock: {
		header: {
			title: string;
			subtitle: string;
		};
		gallery: [];
	};
	benefitsHeaderContentBlock: {
		header: {
			title: string;
			subtitle: string;
		};
		content: {
			html: string;
		};
	};
};

export async function generateMetadata(): Promise<Metadata> {
	const { pageTitle, pageMetaDescription, heroActionBlock }: PilotsPageProps =
		await getAboutPage();

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

const AboutPage = async () => {
	const {
		heroActionBlock,
		pasHeaderContentImageListBlock,
		galleryHeaderGalleryBlock,
		benefitsHeaderContentBlock,
	}: PilotsPageProps = await getAboutPage();

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<AboutHeroWidget heroActionBlock={heroActionBlock} />
			</section>

			<section id="content">
				<AboutContentWidget
					pasHeaderContentImageListBlock={pasHeaderContentImageListBlock}
					galleryHeaderGalleryBlock={galleryHeaderGalleryBlock}
					benefitsHeaderContentBlock={benefitsHeaderContentBlock}
				/>
			</section>
		</article>
	);
};

export default AboutPage;
