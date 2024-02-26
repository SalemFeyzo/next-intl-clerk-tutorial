import { SignUp } from "@clerk/nextjs";
import { useTranslations } from "next-intl";
import type { ServerRuntime } from "next";

export const runtime: ServerRuntime = "edge";

export default function MySignUp() {
  const t = useTranslations("default.pages.sign-up");
  return (
    <div>
      <h1>{t("title")}</h1>
      <div className="flex justify-center py-24">
        <SignUp signInUrl="/sign-in" afterSignUpUrl="/dashboard" />
      </div>
    </div>
  );
}
