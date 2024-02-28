"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { arSA, enUS } from "@clerk/localizations";
import { useLocale } from "next-intl";

type Props = {
  children: React.ReactNode;
};

export default function MyClerkProvider({ children }: Props) {
  const locale = useLocale();

  return (
    <ClerkProvider
      localization={locale === "ar" ? arSA : enUS}
      appearance={{
        layout: {
          socialButtonsPlacement: "top",
          socialButtonsVariant: "iconButton",
          termsPageUrl: "https://clerk.com/terms",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
