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
      <Label htmlFor="email" className="mb-2">
        Email Address
      </Label>
      <Input
        id="email"
        placeholder="Your Email"
        defaultValue={handleGetUserEmail()}
        disabled
      />
    </>
  );
};

export { EmailForm };
