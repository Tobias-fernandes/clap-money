import SignUpForm from "@/components/public/auth/sign-up/form";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

const SignIn: React.FC = () => {
  return (
    <section className="h-screen -mt-5 md:-mt-16 flex flex-col justify-center items-center">
      <Button
        className="absolute top-5 right-5 rounded-full p-2"
        asChild
        variant={"secondary"}
        size={"icon"}
      >
        <Link href="/" className="absolute top-5 right-5 rounded-full p-2">
          <X />
        </Link>
      </Button>
      <SignUpForm />
    </section>
  );
};

export default SignIn;
