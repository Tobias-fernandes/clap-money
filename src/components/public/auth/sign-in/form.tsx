"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

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
import { signIn } from "@/server/sign-in/actions";

const formSchema = z.object({
  email: z.email({
    message: "Please, insert a valid email.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long.",
  }),
});

const SignInHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Link href="/" className="flex text-4xl font-extrabold">
        ClapMoney
      </Link>
      <h1 className="text-2xl leading-tight tracking-tight md:text-3xl">
        Access your account
      </h1>
    </div>
  );
};

const SignInFooter: React.FC = () => (
  <p>
    <span>Don&apos;t have an account?</span>
    <Link href="/sign-up" className="ml-2 font-bold">
      Sign up
    </Link>
  </p>
);

const SignInForgot: React.FC = () => (
  <div className="flex items-center justify-end">
    <Link href="/forgot-password" className="text-sm text-primary/50">
      Forgot your password?
    </Link>
  </div>
);

const LoginForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await signIn(values.email, values.password);

      toast.success("Successfully signed in!");
      router.push("/dashboard");
    } catch (error) {
      toast.error(
        (error as Error).message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
            <FormItem className="mt-5">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SignInForgot />

        <Button
          type="submit"
          size={"lg"}
          className="mt-5 w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && (
            <>
              <Loader2Icon className="animate-spin" />
              <span>Entering...</span>
            </>
          )}
          {!form.formState.isSubmitting && <span>Enter</span>}
        </Button>
      </form>
    </Form>
  );
};

const SignInForm: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <SignInHeader />
        <div className="w-full rounded-2xl sm:w-[300px]">
          <LoginForm />
        </div>
        <SignInFooter />
      </div>
    </div>
  );
};

export default SignInForm;
