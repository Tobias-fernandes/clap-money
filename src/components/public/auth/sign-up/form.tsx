"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";

import { useRouter } from "next/navigation";

import { createClient } from "@/database/supabaseClient";

const supabase = createClient();

const signUpWithEmail = async (email: string, password: string) => {
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    throw new Error(error.message);
  }
};

const formSchema = z
  .object({
    email: z.email({
      message: "Please, insert a valid email.",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

const SignUpHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Link href="/" className="flex text-4xl font-extrabold">
        ClapMoney
      </Link>
      <h1 className="text-2xl leading-tight tracking-tight md:text-3xl">
        Create your account
      </h1>
    </div>
  );
};

const SignUpFooter: React.FC = () => (
  <p>
    <span>Already have an account?</span>
    <Link href="/sign-in" className="ml-2 font-bold">
      Sign in here
    </Link>
  </p>
);

const LoginForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await signUpWithEmail(values.email, values.password);
      toast.success("Account created successfully! Please check your email.");
      router.push("/sign-in");
    } catch (err) {
      toast.error(
        (err as Error).message || "Something went wrong. Please try again."
      );
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-5">
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="Enter your password again"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size={"lg"}
          className="mt-5 w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && (
            <>
              <Loader2Icon className="animate-spin" />
              <span>Creating...</span>
            </>
          )}
          {!form.formState.isSubmitting && <span>Create Account</span>}
        </Button>
      </form>
    </Form>
  );
};

const SignUpForm: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <SignUpHeader />
        <div className="w-full rounded-2xl sm:w-[300px]">
          <LoginForm />
        </div>
        <SignUpFooter />
      </div>
    </div>
  );
};

export default SignUpForm;
