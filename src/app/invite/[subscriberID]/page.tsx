import Image from "next/image";

import logo from "../../../assets/Logo.svg";

import { InviteLinkInput } from "../[subscriberID]/components/invite-link-input";
import { Ranking } from "../[subscriberID]/components/ranking";
import { Stats } from "../[subscriberID]/components/stats";

type InviteProps = {
	params: Promise<{
		subscriberID: string;
	}>;
};

export default async function Invite(props: InviteProps) {
	const { subscriberID } = await props.params;

	const inviteLink = `http://localhost:3333/invites/${subscriberID}`;

	return (
		<div className="min-h-dvh flex items-center flex-col justify-between gap-16 md:flex-row">
			<div className="flex flex-col gap-10 w-full max-w-[550px]">
				<Image src={logo} alt="devstage" width={108.5} height={30} />

				<div className="space-y-2">
					<h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
						Inscrição confirmada
					</h1>

					<p className="text-gray-300">
						Para entrar no evento, acesso o link enviado para seu e-mail.
					</p>
				</div>

				<div className="space-y-6">
					<div className="space-y-3">
						<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
							Indique e ganhe
						</h2>
						<p className="text-gray-300">
							Convide mais pessoas para o evento e concorra a prêmios
							exclusivos! É só compartilhar o link abaixo e acompanhar as
							inscrições:
						</p>
					</div>

					<InviteLinkInput inviteLink={inviteLink} />

					<Stats subscriberID={subscriberID} />
				</div>
			</div>

			<Ranking />
		</div>
	);
}
