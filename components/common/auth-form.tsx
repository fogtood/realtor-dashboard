"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

import { authSchema } from "@/lib/schemas/auth-schema";

import CustomInput from "@/components/common/custom-input";
import google from "@/assets/svg/google.svg";

export default function AuthForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof authSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push("/dashboard");
  }

  return (
    <div className="w-full">
      <div className="space-y-2.5 text-center md:text-start">
        <h1 className="text-secondary font-bold text-4xl">Welcome back</h1>
        <p className="text-primary">Welcome back! Please enter your details.</p>
      </div>
      <div className="mt-8.5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-4">
              <CustomInput
                form={form}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />

              <CustomInput
                form={form}
                name="password"
                label="Password"
                placeholder="**********"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1.5 text-[#11142D] dark:text-secondary">
                <Checkbox className="cursor-pointer" />
                <p>Remember for 30 days</p>
              </div>
              <Link href="/forgot-password" className="text-[#475BE8]">
                Forgot Password?
              </Link>
            </div>
            <Button
              type="submit"
              className="!bg-[#475BE8] text-[#FCFCFC] w-full cursor-pointer py-3 h-auto rounded-xl"
            >
              Sign in
            </Button>

            <Button
              type="submit"
              variant="outline"
              className="cursor-pointer w-full text-[#11142D] dark:text-secondary py-3 h-auto rounded-xl"
            >
              <Image src={google} height={24} width={24} alt="Google" />
              Sign in with Google
            </Button>
          </form>
        </Form>
        <p className="text-sm text-center mt-4 text-secondary">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-[#475BE8] ">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
