"use client";

import { useEffect, useState } from "react";

import { type CarouselApi } from "@/components/ui/carousel";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	ImageDisplayBlock,
} from "@/components/index";

type CarouselGalleryBlockProps = {
	gallery: {
		public_id: string;
	}[];
};

export const CarouselGalleryBlock = ({
	gallery,
}: CarouselGalleryBlockProps) => {
	const [api, setApi] = useState<CarouselApi>();

	const [current, setCurrent] = useState(0);

	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);

		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<>
			<Carousel setApi={setApi} className="w-full lg:w-[95%]">
				<CarouselContent className="-ml-1">
					{gallery.map((image, index) => (
						<CarouselItem key={index} className="basis-full pl-3">
							<div className="relative h-96 w-full rounded-lg lg:h-[600px]">
								<ImageDisplayBlock
									imageSrc={image.public_id}
									imageAlt="Gallery Image"
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<div className="block py-3 text-center text-sm text-muted-foreground">
				Image {current} of {count}
			</div>
		</>
	);
};
