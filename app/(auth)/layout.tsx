import Image from "next/image";
import signinBg from "@/assets/images/sign-in.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="md:grid md:grid-cols-2 h-screen">
      <div className="flex items-center justify-center h-full w-full max-w-[362px] mx-auto px-4 md:px-0">
        {children}
      </div>
      <div className="h-screen overflow-hidden hidden md:block">
        <Image src={signinBg} alt="Sign-in" />
      </div>
    </section>
  );
}
