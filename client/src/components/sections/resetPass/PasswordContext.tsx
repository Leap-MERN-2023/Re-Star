"use client";

import { ChangeEvent, PropsWithChildren, createContext, useState } from "react";
import myAxios from "@/utils/myAxios";

import React from "react";
import { ToastClassName, toast } from "react-toastify";
import { IForgotPassUser } from "@/interface";
import { useRouter } from "next/navigation";
interface IPassword {
  activeStep: number;
  handleFirstStep: (email: string) => void;
  handleSecondStep: (email: string, otp: string) => void;
  handleThirdStep: ({
    email,
    password,
    rePassword,
  }: {
    email: string;
    password: string;
    rePassword: string;
  }) => void;
}

export const PasswordContext = createContext({} as IPassword);

const PasswordProvider = ({ children }: PropsWithChildren) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const router = useRouter();

  const handleFirstStep = async (email: string) => {
    try {
      const data = await myAxios.post("/api/resetPass/sendEmail", {
        email,
      });

      setActiveStep((prev) => prev + 1);
      toast.success("Амжилттай: имэйл илгээгдсэн");
    } catch (error) {
      toast.error("Алдаа : Имейл бүртгэлгүй");
    }
  };

  const handleSecondStep = async (email: string, otp: string) => {
    try {
      const data = await myAxios.post("/api/resetPass/verify", {
        email: email,
        otp: otp,
      });

      setActiveStep((prev) => prev + 1);
      toast.success("Амжилттай: код зөв бна");
    } catch (error) {
      toast.error("Алдаа : Код буруу");
    }
  };

  const handleThirdStep = async ({
    email,
    password,
    rePassword,
  }: {
    email: string;
    password: string;
    rePassword: string;
  }) => {
    try {
      const data = await myAxios.put("/api/resetPass/reset", {
        email: email,
        password: password,
      });
      if (password != rePassword) {
        toast.error("password must be same");
      }
      toast.success("Амжилттай: Нууц үг шинэчлэгдлээ");
      await router.push("/");
      setActiveStep(1);
    } catch (error) {
      toast.error("Алдаа гарлаа");
    }
  };

  return (
    <PasswordContext.Provider
      value={{
        activeStep,
        handleFirstStep,
        handleSecondStep,
        handleThirdStep,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
