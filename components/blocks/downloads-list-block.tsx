import Link from "next/link";

import { Button, ContentDisplayBlock, Separator } from "@/components/index";

type DownloadsListBlockProps = {
	title: string;
	subtitle: string;
	content: string;
};

export const DownloadsListBlock = ({
	title,
	subtitle,
	content,
}: DownloadsListBlockProps) => {
	return (
		<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3 dark:bg-transparent">
			<p className="mb-3 font-medium uppercase tracking-wide">{title}</p>

			<Separator className="my-3" />

			<div className="space-y-3">
				<ContentDisplayBlock content={content} />

				<Button asChild className="w-full font-semibold uppercase">
					<Link href={subtitle}>{title}</Link>
				</Button>
			</div>
		</div>
	);
};
