import { Button } from "@/components/ui/button";
import WordPullUp from "@/components/ui/word-pull-up";
import type { Route } from "next";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-20">
      <div className="container px-6 max-w-5xl mx-auto text-center">
        <WordPullUp
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-balance"
          words="Welcome to ClapMoney!"
        />
        <p className="mb-10 text-base md:text-lg lg:text-xl text-primary/60 max-w-2xl mx-auto text-balance">
          Your one-stop solution for managing your finances effortlessly.
        </p>
        <div className="flex gap-2 max-sm:flex-col justify-center">
          <Button
            asChild
            size="lg"
            className="text-lg max-sm:w-full transition-all hover:scale-[1.02]"
          >
            <Link href={"/sign-in" as Route}>Get Started</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant={"secondary"}
            className="text-lg max-sm:w-full transition-all hover:scale-[1.02]"
          >
            <Link href={"/dashboard" as Route}>Open Dashboard</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
