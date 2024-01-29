import { Container } from "@/components/container";
import { ContactHeroWidget } from "@/components/index";

const ContactPage = () => {
	return (
		<div className="mt-24">
			<Container>
				<section className="py-5">
					<ContactHeroWidget />
				</section>
			</Container>
		</div>
	);
};

export default ContactPage;
