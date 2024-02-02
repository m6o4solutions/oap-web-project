import { ImageDisplayBlock, NotamDisplayBlock } from "@/components/index";

type HomeHeroWidgetProps = {
	heroActionBlock: {
		content: {
			content: { header: { title: string; subtitle: string } };
			image: { public_id: string };
		};
	};
	notam: { notamMessage: string }[];
};

export const HomeHeroWidget = ({
	heroActionBlock,
	notam,
}: HomeHeroWidgetProps) => {
	return (
		<div className="mx-1">
			<div className="relative">
				<div className="relative h-[89vh] w-full">
					<ImageDisplayBlock
						imageSrc={heroActionBlock.content.image.public_id}
						imageAlt={heroActionBlock.content.content.header.title}
					/>

					<div className="absolute left-0 top-0 h-[89vh] w-full rounded-lg bg-black/50"></div>

					<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
						<div className="max-w-6xl md:flex md:gap-8">
							<div className="px-3 md:w-1/2">
								<h1 className="text-3xl font-bold tracking-tight text-white">
									{heroActionBlock.content.content.header.title}
								</h1>

								<p className="mt-6 text-lg leading-loose text-white">
									{heroActionBlock.content.content.header.subtitle}
								</p>
							</div>

							<div className="px-3 md:w-1/2">
								<div className="mx-auto mt-5 max-w-full rounded-lg bg-white/70 p-3 lg:mt-0">
									<h2 className="mb-2 text-lg font-semibold uppercase">
										Aviation Advisory
									</h2>
									<div className="mb-2 rounded-md bg-red-500/50 p-2">
										{notam.length === 0 ? (
											<NotamDisplayBlock notice="No NOTAM on record." />
										) : (
											notam.map((notice, index) => (
												<NotamDisplayBlock
													key={index}
													notice={notice.notamMessage}
												/>
											))
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
