import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/index";

type PilotsFeesTableWidgetProps = {
	fees: {
		title: string;
		structure: {
			list: {
				header: {
					title: string;
					subtitle: string;
				};
			}[];
		};
	}[];
};

export const PilotsFeesTableWidget = ({ fees }: PilotsFeesTableWidgetProps) => {
	return (
		<div>
			{fees.map((fee, index) => (
				<Table key={index} className="my-3">
					<TableCaption className="font-medium uppercase">
						{fee.title}
					</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[250px] font-medium uppercase">
								Aircraft Weight
							</TableHead>
							<TableHead className="w-[150px] text-right font-medium uppercase">
								Fee
							</TableHead>
						</TableRow>
					</TableHeader>
					{fee.structure.list.map((list, index) => (
						<TableBody key={index}>
							<TableCell>{list.header.title}</TableCell>
							<TableCell className="text-right">
								{list.header.subtitle}
							</TableCell>
						</TableBody>
					))}
				</Table>
			))}
		</div>
	);
};
