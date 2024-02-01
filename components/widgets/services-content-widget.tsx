import { Container } from "@/components/container";
import {
	ContentDisplayBlock,
	HeaderDisplayBlock,
	ServicesCardWidget,
} from "@/components/index";

type ServicesContentWidgetProps = {
	pasHeaderContentImageListBlock: {
		header: {
			content: {
				header: { title: string; subtitle: string };
				content: { html: string };
			};
		};
	};
	services: {
		businessName: string;
		businessLogo: { public_id: string };
		businessDescription: {
			html: string;
		};
		telephoneNumber: string;
		emailAddress: string;
		website: string;
	}[];
};

export const ServicesContentWidget = ({
	pasHeaderContentImageListBlock,
	services,
}: ServicesContentWidgetProps) => {
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

					<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
						{services.length === 0 ? (
							<p className="text-center leading-loose text-muted-foreground">
								There are no services available...
							</p>
						) : (
							services.map((service, index) => (
								<ServicesCardWidget
									key={index}
									businessName={service.businessName}
									businessLogo={service.businessLogo}
									businessDescription={service.businessDescription}
									telephoneNumber={service.telephoneNumber}
									emailAddress={service.emailAddress}
									website={service.website}
								/>
							))
						)}
					</div>
				</div>
			</div>
		</Container>
	);
};
