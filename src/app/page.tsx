import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { ArrowRight, Copy, Mail, SendHorizonalIcon } from "lucide-react";
import { Button } from "../components/button";

export default function Home() {
	return (
		<main>
			<h1 className="text-4xl font-heading">Hello NLW Connect!</h1>
			<Button type="submit">
				Enviar <ArrowRight />{" "}
			</Button>

			<IconButton>
				<Copy />
			</IconButton>

			<div>
				<InputRoot>
					<InputIcon>
						<Mail />
					</InputIcon>
					<InputField />
				</InputRoot>
			</div>
		</main>
	);
}
