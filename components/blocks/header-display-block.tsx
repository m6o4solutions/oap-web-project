import { Separator } from "@/components/index";

type HeaderDisplayBlockProps = {
	title?: string;
	subtitle?: string;
};

export const HeaderDisplayBlock = ({
	title,
	subtitle,
}: HeaderDisplayBlockProps) => {
	return (
		<div className="space-y-3 md:text-center">
			<Separator className="my-3" />

			{/* title start */}
			{title && (
				<h1 className="text-2xl font-semibold tracking-wide lg:text-3xl">
					{title}
				</h1>
			)}
			{/* title end */}

			{/* subtitle start */}
			{subtitle && (
				<p className="w-full text-pretty leading-loose text-muted-foreground">
					{subtitle}
				</p>
			)}
			{/* subtitle end */}

			<Separator className="my-3" />
		</div>
	);
};
