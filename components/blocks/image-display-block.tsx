"use client";

import { CldImage } from "next-cloudinary";

type ImageDisplayBlockProps = {
	imageSrc: string;
	imageAlt: string;
};

export const ImageDisplayBlock = ({
	imageSrc,
	imageAlt,
}: ImageDisplayBlockProps) => {
	return (
		<>
			<CldImage
				src={imageSrc}
				alt={imageAlt}
				fill
				crop="fill"
				gravity="auto"
				sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
				className="absolute h-auto w-full rounded-md object-cover"
			/>
		</>
	);
};
