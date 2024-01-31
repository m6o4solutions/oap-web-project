import { ContentDisplayBlock, ImageDisplayBlock } from "@/components/index";

type ServicesCardWidgetProps = {
	businessName: string;
	businessLogo: { public_id: string };
	businessDescription: {
		html: string;
	};
	telephoneNumber: string;
	emailAddress: string;
	website: string;
};

export const ServicesCardWidget = ({
	businessName,
	businessLogo,
	businessDescription,
	telephoneNumber,
	emailAddress,
	website,
}: ServicesCardWidgetProps) => {
	return (
		<div className="overflow-hidden rounded-lg border-2 bg-secondary dark:bg-transparent">
			{/* business logo/image start */}
			<div className="relative h-64 w-full rounded lg:h-80">
				<ImageDisplayBlock
					imageSrc={businessLogo.public_id}
					imageAlt={businessName}
				/>
			</div>
			{/* business logo/image end */}

			{/* content start */}
			<div className="p-3">
				<p className="my-3 text-balance text-lg font-semibold">
					{businessName}
				</p>

				<ContentDisplayBlock content={businessDescription.html} />

				<div className="my-3 flex flex-row space-x-1 text-sm lg:text-base">
					<p className="font-medium">Telephone Number: </p>
					<p>{telephoneNumber}</p>
				</div>

				<div className="my-3 flex flex-row space-x-1 text-sm lg:text-base">
					<p className="font-medium">Email Address: </p>
					<p>{emailAddress}</p>
				</div>

				<div className="my-3 flex flex-row space-x-1 text-sm lg:text-base">
					<p className="font-medium">Website: </p>
					<p>{website}</p>
				</div>
			</div>
			{/* content start */}
		</div>
	);
};
