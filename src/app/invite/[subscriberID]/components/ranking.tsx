import Image from "next/image";

import { getRanking } from "@/http/api";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import medalCooper from "../../../../assets/medal-cooper.svg";
import medalGold from "../../../../assets/medal-gold.svg";
import medalSilver from "../../../../assets/medal-silver.svg";

type RankingCardProps = {
	rankingPosition: number;
	userName: string;
	rankingAmount: number;
	imgSrc: StaticImport;
};

function RankingCard({
	rankingPosition,
	userName,
	rankingAmount,
	imgSrc,
}: RankingCardProps) {
	return (
		<div className="space-y-4 relative">
			<div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
				<span className="text-sm text-gray-300 leading-none">
					<span className="font-semibold">{rankingPosition}</span> | {userName}
				</span>

				<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
					{rankingAmount}
				</span>

				<Image src={imgSrc} alt="" className="absolute top-0 right-8" />
			</div>
		</div>
	);
}

export async function Ranking() {
	const { ranking } = await getRanking();

	return (
		<div className="w-full max-w-[440px] space-y-5">
			<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
				Ranking de indicações
			</h2>

			{ranking.map((user, index) => {
				const rankingPosition = index + 1;

				return (
					<RankingCard
						key={user.id}
						rankingPosition={rankingPosition}
						userName={user.name}
						rankingAmount={user.score}
						imgSrc={
							index === 0 ? medalGold : index === 1 ? medalSilver : medalCooper
						}
					/>
				);
			})}
		</div>
	);
}
