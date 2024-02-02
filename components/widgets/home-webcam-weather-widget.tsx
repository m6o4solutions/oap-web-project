import Image from "next/image";
import Link from "next/link";

import { getWeather } from "@/lib/data/read/index";

import { Container } from "@/components/container";
import {
	ContentDisplayBlock,
	HeaderDisplayBlock,
	ImageDisplayBlock,
} from "@/components/index";

type HomeWebcamWeatherWidgetProps = {
	benefitsHeaderContentBlock: {
		header: {
			title: string;
			subtitle: string;
		};
		content: {
			html: string;
		};
	};
};

export const HomeWebcamWeatherWidget = async ({
	benefitsHeaderContentBlock,
}: HomeWebcamWeatherWidgetProps) => {
	const {
		weather,
		main: { feels_like, temp_min, temp_max, pressure },
		wind: { speed },
	} = await getWeather();

	return (
		<div className="bg-secondary dark:bg-transparent">
			<Container>
				<div className="py-8">
					<div className="space-y-8">
						<HeaderDisplayBlock
							title={benefitsHeaderContentBlock.header.title}
							subtitle={benefitsHeaderContentBlock.header.subtitle}
						/>

						<ContentDisplayBlock
							content={benefitsHeaderContentBlock.content.html}
						/>

						<div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
							<div>
								<div className="relative h-96 w-full rounded-lg">
									<ImageDisplayBlock
										imageSrc={"orly-airpark/mhtx3sbwiuye4gjimpp4"}
										imageAlt={"Webcam"}
									/>
								</div>

								<div className="relative z-20 mx-auto -mt-20 max-w-lg rounded-md bg-white p-6 shadow dark:bg-transparent">
									<p className="w-full text-pretty font-semibold leading-loose">
										Orly Airpark Webcam Live Feed
									</p>

									<p className="my-3 text-sm leading-loose">
										Please note that our webcam feed is hosted on a third-party
										site for your convenience. By clicking the link below, you
										will be redirected to the webcam feed where you can
										experience the excitement of aircraft movements at Orly
										Airpark in real-time. Thank you for understanding and enjoy
										the live views.
									</p>

									<p className="my-3 text-sm text-blue-600 hover:text-blue-500 hover:underline">
										<Link
											href="https://webcams.aeroclubea.com/Nairobi/nbo_OrlyAirparkNW.html"
											target="_blank"
										>
											Orly Airpark webcam live feed
										</Link>
									</p>
								</div>
							</div>

							<div>
								<div className="relative h-96 w-full rounded-lg">
									<ImageDisplayBlock
										imageSrc={"orly-airpark/wx2dwibdyvedxyrpfxo2"}
										imageAlt={"Webcam"}
									/>
								</div>

								<div className="relative z-20 mx-auto -mt-20 max-w-lg rounded-md bg-white p-6 shadow dark:bg-transparent">
									<div className="mb-3 flex items-center justify-between">
										<p className="w-full text-pretty font-semibold leading-loose">
											Orly Airpark Weather
										</p>

										<Image
											src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
											alt={"Current Weather Icon"}
											width={40}
											height={40}
										/>
									</div>

									<div className="space-y-3">
										<div className="flex text-sm">
											<p className="mr-2 font-semibold">Current Condition:</p>
											<p>{weather[0].description}</p>
										</div>

										<div className="flex text-sm">
											<p className="mr-2 font-semibold">Feels Like:</p>
											<p>{feels_like}&deg; C</p>
										</div>

										<div className="flex text-sm">
											<p className="mr-2 font-semibold">High:</p>
											<p>{temp_max}&deg; C</p>
										</div>

										<div className="flex text-sm">
											<p className="mr-2 font-semibold">Low:</p>
											<p>{temp_min}&deg; C</p>
										</div>

										<div className="flex text-sm">
											<p className="mr-2 font-semibold">Wind Speed:</p>
											<p>{speed} m/s</p>
										</div>

										<div className="flex text-sm">
											<p className="mr-2 font-semibold">Pressure:</p>
											<p>{pressure} mb</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
