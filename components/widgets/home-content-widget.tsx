import { Container } from "@/components/container";
import {
	ContentDisplayBlock,
	HeaderDisplayBlock,
	HomePASWidget,
	ImageDisplayBlock,
	Separator,
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
};

export const HomeContentWidget = ({
	pasHeaderContentImageListBlock,
}: HomeContentWidgetProps) => {
	return (
		<Container>
			<div className="pb-8 pt-5">
				<div className="space-y-8">
					<div className="w-full rounded-lg border bg-secondary p-5 dark:bg-transparent">
						<HeaderDisplayBlock
							title={pasHeaderContentImageListBlock.header.content.header.title}
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
	);
};
