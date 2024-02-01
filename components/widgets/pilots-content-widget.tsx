import { Container } from "@/components/container";
import {
	CarouselGalleryBlock,
	ContentDisplayBlock,
	HeaderDisplayBlock,
	PilotsDownloadsListWidget,
} from "@/components/index";

type PilotsContentWidgetProps = {
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
};

export const PilotsContentWidget = ({
	pasHeaderContentImageListBlock,
	galleryHeaderGalleryBlock,
}: PilotsContentWidgetProps) => {
	return (
		<Container>
			<div className="pb-8 pt-5">
				<div className="space-y-8">
					<HeaderDisplayBlock
						title={pasHeaderContentImageListBlock.header.content.header.title}
						subtitle={
							pasHeaderContentImageListBlock.header.content.header.subtitle
						}
					/>

					<ContentDisplayBlock
						content={pasHeaderContentImageListBlock.header.content.content.html}
					/>

					<div className="flex flex-col lg:flex-row">
						<div className="lg:w-3/4">
							<div className="space-y-5">
								<HeaderDisplayBlock
									title={galleryHeaderGalleryBlock.header.title}
									subtitle={galleryHeaderGalleryBlock.header.subtitle}
								/>

								<CarouselGalleryBlock
									gallery={galleryHeaderGalleryBlock.gallery}
								/>
							</div>
						</div>

						<div className="mt-5 space-y-3 lg:mt-0 lg:w-1/4 lg:px-3">
							{pasHeaderContentImageListBlock.list.map((item, index) => (
								<PilotsDownloadsListWidget
									key={index}
									title={item.content.header.title}
									subtitle={item.content.header.subtitle}
									content={item.content.content.html}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
