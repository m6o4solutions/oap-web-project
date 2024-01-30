import { ImageDisplayBlock } from "@/components/index";

type HeroDisplayBlockProps = {
	title?: string;
	subtitle?: string;
	image: string;
};

export const HeroDisplayBlock = ({
	title,
	subtitle,
	image,
}: HeroDisplayBlockProps) => {
	return (
		<div className="relative h-96 w-full lg:h-[30rem]">
			{/* image start */}
			<div className="relative h-full w-full rounded-lg border">
				<ImageDisplayBlock imageSrc={image} imageAlt="Hero Image" />
			</div>
			{/* image end */}

			{/* overlay start */}
			<div className="absolute left-0 top-0 h-full w-full rounded-lg bg-black/20"></div>
			{/* overlay end */}

			{/* content start */}
			{title && (
				<div className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-black/70 px-5 py-3 text-center lg:w-auto">
					<div className="text-white">
						{/* title start */}
						<h1 className="mb-3 text-3xl font-semibold tracking-wide lg:text-4xl">
							{title}
						</h1>
						{/* title end */}

						{/* subtitle start */}
						{subtitle && (
							<p className="w-full text-pretty leading-loose">{subtitle}</p>
						)}
						{/* subtitle end */}
					</div>
				</div>
			)}
			{/* content end */}
		</div>
	);
};
