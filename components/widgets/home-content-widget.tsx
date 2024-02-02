import { Container } from "@/components/container";
import {
	HeaderDisplayBlock,
	HomePASWidget,
	HomeWebcamWeatherWidget,
} from "@/components/index";

type HomeContentWidgetProps = {
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
};

export const HomeContentWidget = ({
	pasHeaderContentImageListBlock,
	benefitsHeaderContentBlock,
}: HomeContentWidgetProps) => {
	return (
		<>
			<Container>
				<div className="py-8">
					<div className="space-y-8">
						<div className="w-full rounded-lg border bg-secondary p-5 dark:bg-transparent">
							<HeaderDisplayBlock
								title={
									pasHeaderContentImageListBlock.header.content.header.title
								}
								subtitle={
									pasHeaderContentImageListBlock.header.content.header.subtitle
								}
							/>

							<HomePASWidget
								pasHeaderContentImageListBlock={pasHeaderContentImageListBlock}
							/>
						</div>
					</div>
				</div>
			</Container>

			<HomeWebcamWeatherWidget
				benefitsHeaderContentBlock={benefitsHeaderContentBlock}
			/>

			<Container>
				<div className="py-8">
					<div className="space-y-8">Basement Section</div>
				</div>
			</Container>
		</>
	);
};
