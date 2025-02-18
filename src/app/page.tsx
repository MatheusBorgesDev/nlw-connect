import { IconButton } from "@/components/icon-button";
import { Button } from "../components/button";
import { ArrowRight, Copy, Mail, SendHorizonalIcon } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "@/components/input";

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
        <InputRoot error>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField />
        </InputRoot>
      </div>
    </main>
  );
}
