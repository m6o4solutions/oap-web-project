import { Container } from "@/components/container";
import { HomeHeroWidget } from "@/components/index";

const HomePage = async () => {
	return (
		<div className="mt-24">
			<Container>
				<section className="py-5">
					<HomeHeroWidget />
				</section>
			</Container>
		</div>
	);
};

export default HomePage;
