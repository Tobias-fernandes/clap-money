"use client";

import { DeleteAccountForm } from "@/components/private/user/deleteAccountForm";
import { EmailForm } from "@/components/private/user/emailForm";
import { NameForm } from "@/components/private/user/nameForm";
import { ProfileForm } from "@/components/private/user/profileForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ButtonBack } from "@/shared/components/public/buttonBack";
import { Line } from "@/shared/components/public/line";
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
            <Line />
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="sm:ml-10 space-y-12 max-w-md">
            {/* TODO: Align the end */}
            <ProfileForm />
            <NameForm />
            <EmailForm />
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <Line />
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="sm:ml-10"></CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-red-500 font-bold">
              DANGER ZONE
            </CardTitle>
            <Line />
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="sm:ml-10">
            <DeleteAccountForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UserConfig;
