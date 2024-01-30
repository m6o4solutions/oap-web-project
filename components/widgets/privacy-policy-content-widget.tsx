import { Container } from "@/components/container";
import { ContentDisplayBlock, HeaderDisplayBlock } from "@/components/index";

type PrivacyPolicyContentWidgetProps = {
	pasHeaderContentImageListBlock: {
		header: {
			content: {
				header: { title: string; subtitle: string };
				content: { html: string };
			};
		};
	};
};

export const PrivacyPolicyContentWidget = ({
	pasHeaderContentImageListBlock,
}: PrivacyPolicyContentWidgetProps) => {
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
				</div>
			</div>
		</Container>
	);
};
