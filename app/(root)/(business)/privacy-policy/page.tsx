import { Container } from "@/components/container";
import { PrivacyPolicyHeroWidget } from "@/components/index";

const PrivacyPolicyPage = () => {
	return (
		<div className="mt-24">
			<Container>
				<section className="py-5">
					<PrivacyPolicyHeroWidget />
				</section>
			</Container>
		</div>
	);
};

export default PrivacyPolicyPage;
