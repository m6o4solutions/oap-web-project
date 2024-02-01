import { ContentDisplayBlock, Separator } from "@/components/index";

type ContactDetailsWidgetProps = {
	siteContactDetails: {
		list: {
			header: {
				title: string;
			};
			content: {
				html: string;
			};
		}[];
	};
};

export const ContactDetailsWidget = ({
	siteContactDetails,
}: ContactDetailsWidgetProps) => {
	return (
		<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3 dark:bg-transparent">
			<p className="mb-3 text-lg font-semibold uppercase tracking-wide">
				Contact Details
			</p>

			<Separator className="my-3" />

			{/* details start */}
			{siteContactDetails.list.map((contact, index) => {
				return (
					<div className="mb-2" key={index}>
						<p className="font-semibold">{contact.header.title}</p>

						<ContentDisplayBlock content={contact.content.html} />
					</div>
				);
			})}
			{/* details end */}
		</div>
	);
};
