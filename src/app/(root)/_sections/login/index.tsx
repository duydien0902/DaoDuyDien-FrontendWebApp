"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { signInApi } from "@/actions/fake-call-api";

import { PATH_NAME } from "@/utilities/contans";

import { Title } from "@/components/ui/title";

import { FormLogin } from "@/app/(root)/_sections/login/form-login";

export const LoginSection = () => {
  const [serverError, setServerError] = useState({
    error: "",
    isShow: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (value: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      const result: any = await signInApi(value);
      if (result?.message) router.push(PATH_NAME.DASHBOARD);
    } catch (error: any) {
      setServerError({
        error: error?.error,
        isShow: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearErrorServer = () => {
    setServerError({
      error: "",
      isShow: false,
    });
  };

  return (
    <section className="bg-slate-500 min-h-screen flex items-center justify-center">
      <div className="bg-background py-20 px-10 rounded-lg max-w-80 w-full ">
        <Title className="capitalize">admin portal</Title>
        <FormLogin
          handleSubmit={handleSubmit}
          clearErrorServer={clearErrorServer}
          serverError={serverError}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
};
