import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

import { getAllServices, getServicesPage } from "@/lib/data/read/index";

import { ServicesContentWidget, ServicesHeroWidget } from "@/components/index";

type ServicesPageProps = {
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
	const { pageTitle, pageMetaDescription, heroActionBlock }: ServicesPageProps =
		await getServicesPage();

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

const ServicesPage = async () => {
	const { heroActionBlock, pasHeaderContentImageListBlock }: ServicesPageProps =
		await getServicesPage();

	const services = await getAllServices();

	return (
		<article className="mt-24 space-y-8">
			<section id="hero">
				<ServicesHeroWidget heroActionBlock={heroActionBlock} />
			</section>

			<section id="content">
				<ServicesContentWidget
					pasHeaderContentImageListBlock={pasHeaderContentImageListBlock}
					services={services}
				/>
			</section>
		</article>
	);
};

export default ServicesPage;
