import SignUpForm from "@/components/public/auth/sign-up/form";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

const SignIn: React.FC = () => {
  return (
    <section className="h-screen -mt-5 md:-mt-16 flex flex-col justify-center items-center">
      <SignUpForm />
    </section>
  );
};

export default SignIn;
