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
import { useStoreUser } from "@/context/user";
import { setUserName } from "@/server/user/name/update-name/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import z from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }).max(30, {
    message: "Name must be at most 30 characters long.",
  }),
});

const NameForm = () => {
  const {
    state: { name, isLoading: userLoading },
    actions: { fetchUserData },
  } = useStoreUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
    },
  });

  const handleSubmitUserName = async () => {
    // TODO: Implement submit user name logic
    try {
      const newName = form.getValues("name");
      await setUserName({ newName });
      await fetchUserData();
      toast.success("Name updated successfully.");
    } catch (err) {
      toast.error(
        (err as Error)?.message || "Failed to update name. Please try again."
      );
    }
  };

  const updateInputValue = useCallback(() => {
    if (!userLoading && name) {
      form.setValue("name", name);
    }
  }, [userLoading, name, form]);

  useEffect(() => {
    updateInputValue();
  }, [updateInputValue]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitUserName)}
        className="flex gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder={userLoading ? "Loading..." : "Enter your name"}
                  {...field}
                  disabled={userLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          // TODO: Upgrade button positioning
          className="mt-[21px]"
          disabled={form.formState.isSubmitting || !form.formState.isValid}
        >
          {!form.formState.isSubmitting && <span>Save Name</span>}
          {form.formState.isSubmitting && (
            <>
              <Loader2Icon className="animate-spin" />
              <span>Saving Name...</span>
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export { NameForm };
