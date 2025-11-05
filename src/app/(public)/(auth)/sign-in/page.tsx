import SignInForm from "@/components/public/auth/sign-in/form";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <section className="h-screen -mt-5 md:-mt-16 flex flex-col justify-center items-center">
      <Button
        className="absolute top-5 right-5 rounded-full p-2"
        asChild
        variant={"secondary"}
        size={"icon"}
      >
        <Link href="/" className="absolute top-5 right-5 rounded-full p-2">
          <X className="" />
        </Link>
      </Button>
      <SignInForm />
    </section>
  );
};

export default Page;
