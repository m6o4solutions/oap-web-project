import { Container } from "@/components/container";

type HomeContentWidgetProps = {
	pasHeaderContentImageListBlock: {
		header: {
			content: {
				header: { title: string; subtitle: string };
				content: { html: string };
			};
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
				<div className="pb-8 pt-5">Home Content Widget</div>
			</div>
		</Container>
	);
};
