import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Route } from "next";

const NotFound: React.FC = () => {
  const content = {
    title: "404",
    subtitle: "Some content is missing.",
    description:
      "Sorry, we couldn't find that page. You'll find plenty to explore on the homepage.",
    buttonText: "Go to Homepage",
  };

  return (
    <section className="min-h-[80vh] flex items-center h-screen justify-center">
      <div className="py-8 px-4 mx-auto max-w-7xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="text-clap-green mb-4 text-7xl sm:text-8xl tracking-tight font-extrabold md:text-9xl">
            {content.title}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-primary/90 md:text-4xl">
            {content.subtitle}
          </p>
          <p className="mb-4 text-lg font-light">{content.description}</p>
          <Button asChild size={"lg"} className="text-lg transition-all">
            <Link href={"/" as Route} className="flex items-center group">
              {content.buttonText}{" "}
              <ArrowRight className="ml-2 size-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
