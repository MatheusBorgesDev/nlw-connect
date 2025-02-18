import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";
import type { ElementType } from "react";

type StatsCardProps = {
	amountStats: string;
	description: string;
	icon: ElementType;
};

function StatsCard({ amountStats, description, icon: Icon }: StatsCardProps) {
	return (
		<div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
			<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
				{amountStats}
			</span>
			<span className="text-sm text-gray-300 leading-none text-center">
				{description}
			</span>

			<Icon className="size-5 text-purple absolute top-3 left-3" />
		</div>
	);
}

export function Stats() {
	return (
		<div className="grid gap-3 md:grid-cols-3">
			<StatsCard
				amountStats="1042"
				description="Acessos ao link"
				icon={MousePointerClick}
			/>

			<StatsCard
				amountStats="1042"
				description="Inscrições feitas"
				icon={BadgeCheck}
			/>

			<StatsCard
				amountStats="3º"
				description="Posição no ranking"
				icon={Medal}
			/>
		</div>
	);
}
