"use client";

import { useState, useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/ui/loading";
import { Label } from "@/components/ui/label";

import { data } from "@/app/(root)/_sections/login/data";

interface FormLoginProps {
  handleSubmit: (v: { email: string; password: string }) => void;
  serverError: {
    error: string;
    isShow: boolean;
  };
  isLoading: boolean;
  clearErrorServer: () => void;
}

export const FormLogin = ({
  handleSubmit,
  serverError,
  isLoading,
  clearErrorServer,
}: FormLoginProps) => {
  const defaultValues = {
    email: "",
    password: "",
  };
  const [isErrorCleared, setIsErrorCleared] = useState(false);

  const formSchema = z.object({
    email: z.string().email({ message: "Email is not in correct format!" }),
    password: z.string().min(4, { message: "Minimum password 5 characters!" }),
  });

  const form = useForm({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (value: { email: string; password: string }) => {
    handleSubmit(value);
    setIsErrorCleared(false);
  };

  const email = useWatch({ control: form.control, name: "email" });
  const password = useWatch({ control: form.control, name: "password" });

  useEffect(() => {
    if (serverError.isShow && !isErrorCleared) {
      clearErrorServer();
      setIsErrorCleared(true);
    }
  }, [email, password]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-7">
          <div>
            <div className="space-y-5">
              {data?.map((item, i) => (
                <FormField
                  key={i}
                  control={form.control}
                  name={item.name}
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative h-auto border border-gray-500 py-1.5 rounded-lg">
                        <Label className="cursor-pointer z-10 px-2 bg-background text-xs absolute top-0 -translate-y-1/2 left-3">
                          {item.label}{" "}
                          {item?.require && (
                            <span className="text-[#FF4842]">*</span>
                          )}
                        </Label>
                        <FormControl>
                          <Input
                            {...field}
                            type={item.type}
                            placeholder={item?.placeholder}
                            className="border-0 bg-inherit input-form-create-user h-8 w-full text-slate-500 dark:text-foreground placeholder:text-slate-500 dark:placeholder:text-foreground placeholder:text-sm focus-visible:ring-offset-0 focus-visible:ring-0"
                            value={field.value}
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="text-[#FF4842] text-xs" />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            {serverError.isShow &&
              !form.formState.errors.email &&
              !form.formState.errors.password && (
                <div className="text-[#FF4842] text-xs mt-2">
                  {serverError.error}
                </div>
              )}
          </div>
          <Button
            disabled={isLoading}
            type="submit"
            className="flex items-center justify-center gap-2"
          >
            {isLoading && <Loading />}
            <p>Submit</p>
          </Button>
        </div>
      </form>
    </Form>
  );
};
