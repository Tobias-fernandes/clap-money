"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }).max(30, {
    message: "Name must be at most 30 characters long.",
  }),
});

const NameForm = () => {
  const handleGetUserName = () => {
    // TODO: Get user name from database
    const userName = "John Doe";
    return userName;
  };

  const handleSubmitUserName = () => {
    // TODO: Implement submit user name logic
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: handleGetUserName() as string,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitUserName)}
        className="flex items-center gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mt-5"
          disabled={form.formState.isSubmitting || !form.formState.isValid}
        >
          {form.formState.isSubmitting && (
            <>
              <Loader2Icon className="animate-spin" />
              <span>Saving Name...</span>
            </>
          )}
          {!form.formState.isSubmitting && <span>Save Name</span>}
        </Button>
      </form>
    </Form>
  );
};

export { NameForm };
