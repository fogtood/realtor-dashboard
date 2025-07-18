import Image from "next/image";
import signinBg from "@/assets/images/sign-in.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="md:grid md:grid-cols-2 h-screen">
      <div className="h-full overflow-y-auto">
        <div className="flex items-center justify-center min-h-full w-full max-w-[362px] mx-auto px-4 md:px-0 py-12">
          {children}
        </div>
      </div>

      <div className="relative hidden md:block">
        <Image
          src={signinBg}
          alt="Sign-in"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
