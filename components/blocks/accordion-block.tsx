import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	ContentDisplayBlock,
} from "@/components/index";

type AccordionBlockProps = {
	content: string;
	title: string;
};

export const AccordionBlock = ({ content, title }: AccordionBlockProps) => {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value={title}>
				<AccordionTrigger className="text-left">{title}</AccordionTrigger>
				<AccordionContent>
					<ContentDisplayBlock content={content} />
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
