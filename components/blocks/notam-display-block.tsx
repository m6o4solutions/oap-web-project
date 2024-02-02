type NotamDisplayBlockProps = {
	notice: string;
};

export const NotamDisplayBlock = ({ notice }: NotamDisplayBlockProps) => {
	return (
		<>
			<p className="text-sm font-semibold uppercase text-white">{notice}</p>
		</>
	);
};
