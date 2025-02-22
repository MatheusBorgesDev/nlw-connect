import {
	getSubscriberInviteClicks,
	getSubscriberInviteCount,
	getSubscriberRankingPosition,
} from "@/http/api";
import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";
import type { ElementType } from "react";

type StatsCardProps = {
	amountStats: string | number;
	description: string;
	icon: ElementType;
};

async function StatsCard({
	amountStats,
	description,
	icon: Icon,
}: StatsCardProps) {
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

type StatsProps = {
	subscriberID: string;
};

export async function Stats({ subscriberID }: StatsProps) {
	const { count: accessCount } = await getSubscriberInviteClicks(subscriberID);
	const { count: inviteCount } = await getSubscriberInviteCount(subscriberID);
	const { position: rankingPosition } =
		await getSubscriberRankingPosition(subscriberID);

	const isRanked = rankingPosition ? `${rankingPosition}º` : "-";

	return (
		<div className="grid gap-3 md:grid-cols-3">
			<StatsCard
				amountStats={accessCount}
				description="Cliques no link"
				icon={MousePointerClick}
			/>

			<StatsCard
				amountStats={inviteCount}
				description="Inscrições feitas"
				icon={BadgeCheck}
			/>

			<StatsCard
				amountStats={isRanked}
				description="Posição no ranking"
				icon={Medal}
			/>
		</div>
	);
}
