import { HomeHeroWidget } from "@/components/index";

const HomePage = async () => {
	return (
		<article className="mt-28 space-y-8">
			<section id="hero">
				<HomeHeroWidget />
			</section>
		</article>
	);
};

export default HomePage;
