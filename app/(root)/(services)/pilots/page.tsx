import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getPilotsPage } from "@/lib/data/read/index";

import { PilotsContentWidget, PilotsHeroWidget } from "@/components/index";

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
	feesHeaderContentBlock: {
		header: {
			title: string;
			subtitle: string;
		};
	};
	fees: {
		title: string;
		structure: {
			list: {
				header: {
					title: string;
					subtitle: string;
				};
			}[];
		};
	}[];
};

export async function generateMetadata(): Promise<Metadata> {
	const { pageTitle, pageMetaDescription, heroActionBlock }: PilotsPageProps =
		await getPilotsPage();

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

const PilotsPage = async () => {
	const {
		heroActionBlock,
		pasHeaderContentImageListBlock,
		galleryHeaderGalleryBlock,
		feesHeaderContentBlock,
		fees,
	}: PilotsPageProps = await getPilotsPage();

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<PilotsHeroWidget heroActionBlock={heroActionBlock} />
			</section>

			<section id="content">
				<PilotsContentWidget
					pasHeaderContentImageListBlock={pasHeaderContentImageListBlock}
					galleryHeaderGalleryBlock={galleryHeaderGalleryBlock}
					feesHeaderContentBlock={feesHeaderContentBlock}
					fees={fees}
				/>
			</section>
		</article>
	);
};

export default PilotsPage;
