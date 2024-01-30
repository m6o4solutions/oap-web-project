import { Container } from "@/components/container";
import {
	ContactFormBlock,
	ContentDisplayBlock,
	HeaderDisplayBlock,
} from "@/components/index";

type HeaderContentImage = {
	header: {
		content: {
			header: { title: string; subtitle: string };
			content: { html: string };
		};
	};
};

type ContactDetails = {
	list: [
		{
			header: {
				title: string;
			};
			content: {
				html: string;
			};
		},
	];
};

type ContactContentWidgetProps = {
	pasHeaderContentImageListBlock: HeaderContentImage;
	siteContactDetails: ContactDetails;
};

export const ContactContentWidget = ({
	pasHeaderContentImageListBlock,
	siteContactDetails,
}: ContactContentWidgetProps) => {
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
						<div className="lg:w-3/4">
							<div className="max-w-5xl rounded-lg border bg-secondary p-3 dark:bg-transparent">
								<div className="space-y-5">
									<HeaderDisplayBlock
										title="Contact Form"
										subtitle="We are here to help you and we shall get back to you within 6
										hours of the receipt of your request."
									/>

									{/* form start */}
									<ContactFormBlock />
									{/* form end */}
								</div>
							</div>
						</div>
						{/* contact form end */}

						{/* contact details start */}
						<div className="mt-5 space-y-3 lg:mt-0 lg:w-1/4 lg:px-3">
							<div className="mx-auto max-w-full rounded-lg border bg-secondary p-3 dark:bg-transparent">
								<p className="mb-3 text-lg font-semibold tracking-wide">
									Contact Details
								</p>

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
						</div>
						{/* contact details end */}
					</div>
				</div>
			</div>
		</Container>
	);
};
