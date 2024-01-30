import { AboutContentWidget, AboutHeroWidget } from "@/components/index";

const AboutPage = async () => {
	return (
		<article className="mt-28 space-y-8">
			<section id="hero">
				<AboutHeroWidget />
			</section>

			<section id="content">
				<AboutContentWidget />
			</section>
		</article>
	);
};

export default AboutPage;
