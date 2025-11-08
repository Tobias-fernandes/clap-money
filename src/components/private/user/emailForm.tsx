"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const EmailForm = () => {
  const handleGetUserEmail = () => {
    // TODO: Get user email from database
    const userEmail = "johndoe@yahoo.com";
    return userEmail;
  };

  return (
    <>
      <Label htmlFor="email" className="text-sm font-medium">
        Email Address
      </Label>
      <Input
        id="email"
        placeholder="Your Email"
        defaultValue={handleGetUserEmail()}
        className="mt-1"
        disabled
      />
    </>
  );
};

export { EmailForm };
