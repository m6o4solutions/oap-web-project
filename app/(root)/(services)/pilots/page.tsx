import { Container } from "@/components/container";
import { PilotsHeroWidget } from "@/components/index";

const PilotsPage = () => {
	return (
		<div className="mt-24">
			<Container>
				<section className="py-5">
					<PilotsHeroWidget />
				</section>
			</Container>
		</div>
	);
};

export default PilotsPage;
