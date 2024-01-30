import { HeroDisplayBlock } from "@/components";

type PrivacyPolicyHeroWidgetProps = {
	heroActionBlock: {
		content: {
			content: { header: { title: string } };
			image: { public_id: string };
		};
	};
};

export const PrivacyPolicyHeroWidget = ({
	heroActionBlock,
}: PrivacyPolicyHeroWidgetProps) => {
	return (
		<div className="px-2">
			<HeroDisplayBlock
				title={heroActionBlock.content.content.header.title}
				image={heroActionBlock.content.image.public_id}
			/>
		</div>
	);
};
