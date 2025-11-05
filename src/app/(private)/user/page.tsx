"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  
} from "@/components/ui/card";
import { ButtonBack } from "@/shared/components/public/buttonBack";
import { useRouter } from "next/navigation";

const UserConfig: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <section className="mt-40">
      <div className="relative container px-6 max-w-5xl mx-auto space-y-4">
        <ButtonBack
          variant={"ghost"}
          size={"lg"}
          className="absolute left-4 -top-16"
          onClick={handleBack}
        />
        <h1 className="text-2xl font-bold">User Profile</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <div className="bg-primary/20 h-px w-full my-3"></div>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <div></div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UserConfig;
