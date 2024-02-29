import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getGlobal, getHomePage, getNotam } from "@/lib/data/read/index";

import { HomeContentWidget, HomeHeroWidget } from "@/components/index";

type HomePageProps = {
	pageTitle: string;
	pageMetaDescription: string;
	heroActionBlock: {
		content: {
			content: { header: { title: string; subtitle: string } };
			image: { public_id: string };
		};
	};
	pasHeaderContentImageListBlock: {
		header: {
			content: {
				header: { title: string; subtitle: string };
				content: { html: string };
			};
			image: { public_id: string };
		};
		list: {
			content: {
				header: { title: string };
				content: { html: string };
			};
		}[];
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
	faqs: {
		faqs: {
			list: {
				header: {
					title: string;
				};
				content: {
					html: string;
				};
			}[];
		};
	};
};

type GlobalDataProps = {
	siteContactDetails: {
		list: {
			header: {
				title: string;
			};
			content: {
				html: string;
			};
		}[];
	};
};

export async function generateMetadata(): Promise<Metadata> {
	const { pageTitle, pageMetaDescription, heroActionBlock }: HomePageProps =
		await getHomePage();

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

const HomePage = async () => {
	const {
		heroActionBlock,
		pasHeaderContentImageListBlock,
		benefitsHeaderContentBlock,
		faqs,
	}: HomePageProps = await getHomePage();

	const notam = await getNotam();

	const { siteContactDetails }: GlobalDataProps = await getGlobal();

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<HomeHeroWidget
					heroActionBlock={heroActionBlock}
					notam={notam}
					siteContactDetails={siteContactDetails}
				/>
			</section>

			<section id="content">
				<HomeContentWidget
					pasHeaderContentImageListBlock={pasHeaderContentImageListBlock}
					benefitsHeaderContentBlock={benefitsHeaderContentBlock}
					faqs={faqs}
				/>
			</section>
		</article>
	);
};

export default HomePage;
