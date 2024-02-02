import {
	ContentDisplayBlock,
	ImageDisplayBlock,
	Separator,
} from "@/components/index";

type HomePASWidgetProps = {
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

export const HomePASWidget = ({
	pasHeaderContentImageListBlock,
}: HomePASWidgetProps) => {
	return (
		<>
			<div className="flex flex-col lg:flex-row">
				<div className="my-5 lg:mb-0 lg:w-1/2 lg:pr-5">
					<div className="relative h-64 w-full rounded-lg">
						<ImageDisplayBlock
							imageSrc={pasHeaderContentImageListBlock.header.image.public_id}
							imageAlt={
								pasHeaderContentImageListBlock.header.content.header.title
							}
						/>
					</div>
				</div>
				<div className="my-5 lg:w-1/2">
					<ContentDisplayBlock
						content={pasHeaderContentImageListBlock.header.content.content.html}
					/>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-5 pt-8 lg:grid-cols-3">
				{pasHeaderContentImageListBlock.list.map((item, index) => (
					<div
						key={index}
						className="overflow-hidden rounded-lg border-2 bg-secondary dark:bg-transparent"
					>
						<div className="p-5">
							<h3 className="text-lg font-semibold tracking-wide">
								{item.content.header.title}
							</h3>

							<Separator className="my-3" />

							<ContentDisplayBlock content={item.content.content.html} />
						</div>
					</div>
				))}
				<div />
			</div>
		</>
	);
};
