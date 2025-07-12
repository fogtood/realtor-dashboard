"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

import { authSchema } from "@/lib/schemas/auth-schema";

import CustomInput from "@/components/common/custom-input";
import google from "@/assets/svg/google.svg";
import { signIn, signUp } from "@/lib/actions/user.actions";

export default function AuthForm({ type }: { type: "sign-in" | "sign-up" }) {
  const router = useRouter();
  const formSchema = authSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (type === "sign-in") {
      try {
        const data = await signIn(values);
        console.log("Signed in:", data);
        router.push("/dashboard");
      } catch (error) {
        console.error("Error signing in:", error);
        toast.error((error as Error).message);
      }
    }

    if (type === "sign-up") {
      try {
        const data = await signUp(values);
        console.log("Signed up:", data);
        router.push("/dashboard");
      } catch (error) {
        console.error("Error signing up:", error);
        toast.error((error as Error).message);
      }
    }
  };

  function googleSignIn() {
    window.location.href = "http://localhost:8080/api/v1/auth/google";
  }

  return (
    <div className="w-full">
      <div className="space-y-2.5 text-center md:text-start">
        <h1 className="text-secondary font-bold text-4xl">
          {type === "sign-in" ? "Welcome back" : "Sign up"}
        </h1>
        <p className="text-primary">
          {type === "sign-in"
            ? "Welcome back! Please enter your details."
            : "Create an account! Please enter your details."}
        </p>
      </div>
      <div className="mt-8.5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 mb-5"
          >
            <div className="space-y-4">
              {type === "sign-up" && (
                <CustomInput
                  form={form}
                  name="name"
                  label="Name"
                  type="text"
                  placeholder="Enter your name"
                />
              )}

              <CustomInput
                form={form}
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
              />

              <CustomInput
                form={form}
                name="password"
                label="Password"
                type="password"
                placeholder="••••••"
              />
            </div>

            {type === "sign-in" && (
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5 text-[#11142D] dark:text-secondary">
                  <Checkbox className="cursor-pointer" />
                  <p>Remember for 30 days</p>
                </div>
                <Link href="/forgot-password" className="text-[#475BE8]">
                  Forgot Password?
                </Link>
              </div>
            )}
            <Button
              type="submit"
              className="!bg-[#475BE8] text-[#FCFCFC] w-full cursor-pointer py-3 h-auto rounded-xl"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> Loading...
                </>
              ) : type === "sign-in" ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <Button
            type="submit"
            variant="outline"
            className="cursor-pointer w-full text-[#11142D] dark:text-secondary py-3 h-auto rounded-xl"
            onClick={googleSignIn}
            disabled={isSubmitting}
          >
            <Image src={google} height={24} width={24} alt="Google" />
            Sign {type === "sign-in" ? "in" : "up"} with Google
          </Button>
        </Form>
        <p className="text-sm text-center mt-4 text-secondary">
          {type === "sign-in"
            ? "Don't have an account? "
            : "Already have an account? "}
          <Link
            href={type === "sign-in" ? "/sign-up" : "sign-in"}
            className="text-[#475BE8] "
          >
            {type === "sign-in" ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>
    </div>
  );
}
