import { PilotsContentWidget, PilotsHeroWidget } from "@/components/index";

const PilotsPage = () => {
	return (
		<article className="mt-28 space-y-8">
			<section id="hero">
				<PilotsHeroWidget />
			</section>

			<section id="content">
				<PilotsContentWidget />
			</section>
		</article>
	);
};

export default PilotsPage;
