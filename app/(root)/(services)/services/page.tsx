import { ServicesContentWidget, ServicesHeroWidget } from "@/components/index";

const AirparkServicesPage = () => {
	return (
		<article className="mt-28 space-y-8">
			<section id="hero">
				<ServicesHeroWidget />
			</section>

			<section id="content">
				<ServicesContentWidget />
			</section>
		</article>
	);
};

export default AirparkServicesPage;
