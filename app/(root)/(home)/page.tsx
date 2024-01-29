import { Container } from "@/components/container";

const HomePage = async () => {
	return (
		<div className="mt-24">
			<Container>
				<section className="py-5">
					<h1 className="text-4xl font-bold tracking-wide text-sky-800">
						Your settings are well configured
					</h1>
					<p className="mt-5">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Repellendus, cum reprehenderit. Doloremque corrupti aliquid nihil
						magnam impedit, quisquam soluta? Expedita et dolorum quo laudantium
						odio esse, distinctio nulla hic ea.
					</p>
				</section>
			</Container>
		</div>
	);
};

export default HomePage;
