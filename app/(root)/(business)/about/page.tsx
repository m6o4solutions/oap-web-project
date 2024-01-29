import { Container } from "@/components/container";
import { AboutHeroWidget } from "@/components/index";

const AboutPage = () => {
	return (
		<div className="mt-24">
			<Container>
				<section className="py-5">
					<AboutHeroWidget />
				</section>
			</Container>
		</div>
	);
};

export default AboutPage;
