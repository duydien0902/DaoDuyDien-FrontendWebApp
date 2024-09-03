import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { InfoUser } from "@/types/user";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loading } from "@/components/ui/loading";

import { data } from "@/app/(root)/_sections/users/_components/form-user/data";

interface FormUserProps {
  isOpen: boolean;
  onOk: (v: any) => void;
  onCancel: () => void;
  title: string;
  isLoading: boolean;
  userUpdate?: InfoUser | null;
}

export const FormUser = ({
  isOpen,
  onOk,
  onCancel,
  title,
  isLoading,
  userUpdate,
}: FormUserProps) => {
  const defaultValues = {
    fullname: userUpdate?.fullname || "",
    phone: userUpdate?.phone || "",
    email: userUpdate?.email || "",
    status: userUpdate?.status ?? true,
    role: userUpdate?.role || "",
  };

  const phoneRegex = new RegExp(/^(0[3|5|7|8|9])+([0-9]{8})$/);

  const formSchema = z.object({
    fullname: z
      .string()
      .min(4, { message: "Full name must be at least 1 character long." })
      .max(50, { message: "Maximum characters exceeded." })
      .trim(),
    phone: z
      .string()
      .regex(phoneRegex, { message: "Phone number is incorrect." }),
    email: z.string().email({ message: "Email is not in correct format!" }),
    status: z.boolean().default(true).optional(),
    role: z.string().min(1, { message: "Please select role" }),
  });

  const form = useForm({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const clearForm = () => {
    form.reset(defaultValues);
  };

  const handleSubmit = async (data: any) => {
    try {
      const result: any = await onOk(data);
      if (!result) return;
      clearForm();
      onCancel();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onCancel}>
      <DialogContent className="sm:max-w-[425px] min-h-[150px] bg-background text-foreground">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <DialogHeader>
              <DialogTitle className="leading-7">{title}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-5 py-4">
              {data?.map((item, i) => (
                <FormField
                  key={i}
                  control={form.control}
                  name={item.name}
                  render={({ field }) => (
                    <FormItem>
                      {item.type === "input" && (
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
                              value={field.value as string}
                              autoComplete="nope"
                            />
                          </FormControl>
                        </div>
                      )}
                      {item.type === "select" && (
                        <div className="relative h-auto border border-gray-500 py-1.5 rounded-lg">
                          <Label className="cursor-pointer z-10 px-2 bg-background text-xs absolute top-0 -translate-y-1/2 left-3">
                            {item.label}{" "}
                            {item?.require && (
                              <span className="text-[#FF4842]">*</span>
                            )}
                          </Label>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value as string}
                          >
                            <FormControl>
                              <SelectTrigger className="border-0 bg-inherit input-form-create-user h-8 w-full text-slate-500 dark:text-foreground placeholder:text-slate-500 dark:placeholder:text-foreground placeholder:text-sm focus-visible:ring-offset-0 focus-visible:ring-0 focus:ring-offset-0 ring-0 focus:ring-0">
                                <SelectValue placeholder={item.placeholder} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {item.data?.map((select, i) => (
                                <SelectItem
                                  key={i}
                                  className="text-xs lowercase"
                                  value={select.value}
                                >
                                  {select.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                      {item.type === "checkbox" && (
                        <div className="flex items-center space-x-2 space-y-0 rounded-md">
                          <FormControl>
                            <Checkbox
                              checked={field.value as boolean}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Active</FormLabel>
                          </div>
                        </div>
                      )}
                      <FormMessage className="text-[#FF4842] text-[0.65rem] p-0 m-0" />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <DialogFooter className="flex-col-reverse sm:flex-row gap-3 sm:gap-0 sm:items-end">
              <Button variant="secondary" type="submit" disabled={isLoading}>
                {isLoading ? <Loading /> : <p>OK</p>}
              </Button>
              <Button
                onClick={() => {
                  clearForm();
                  onCancel();
                }}
                variant="secondary"
                type="submit"
              >
                Cancel
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
