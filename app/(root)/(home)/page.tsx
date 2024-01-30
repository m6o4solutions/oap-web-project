import { HomeContentWidget, HomeHeroWidget } from "@/components/index";

const HomePage = async () => {
	return (
		<article className="mt-28 space-y-8">
			<section id="hero">
				<HomeHeroWidget />
			</section>

			<section id="content">
				<HomeContentWidget />
			</section>
		</article>
	);
};

export default HomePage;
