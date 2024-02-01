import Link from "next/link";

import { Container } from "@/components/container";
import {
	Button,
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
};

export const PilotsContentWidget = ({
	pasHeaderContentImageListBlock,
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
						{/* contact form start */}
						<div className="lg:w-3/4"></div>
						{/* contact form end */}

						{/* miscellaneous details start */}
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
						{/* miscellaneous details end */}
					</div>
				</div>
			</div>
		</Container>
	);
};
