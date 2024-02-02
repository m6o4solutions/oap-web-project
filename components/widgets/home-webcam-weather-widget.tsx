import { Container } from "@/components/container";

type HomeWebcamWeatherWidgetProps = {};

export const HomeWebcamWeatherWidget = ({}: HomeWebcamWeatherWidgetProps) => {
	return (
		<div className="bg-secondary dark:bg-transparent">
			<Container>
				<div className="py-8">
					<div className="space-y-8">Home Webcam Weather Widget</div>
				</div>
			</Container>
		</div>
	);
};
