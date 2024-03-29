import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import {
  getFormatter,
  getNow,
  getTimeZone,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { locales } from "@/lib/navigation";
import Header from "@/components/Header";
import MyClerkProvider from "@/components/MyClerkProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: "default.rootLayoutMetadata",
  });
  const formatter = await getFormatter({ locale });
  const now = await getNow({ locale });
  const timeZone = await getTimeZone({ locale });

  return {
    metadataBase: new URL(
      process.env.SITE_URL ? process.env.SITE_URL : "http://localhost:3000"
    ),
    title: t("title"),
    description: t("description"),
    twitter: {
      card: "summary_large_image",
    },
    other: {
      currentYear: formatter.dateTime(now, { year: "numeric" }),
      timeZone: timeZone || "N/A",
    },
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={locale === "ar" ? cairo.className : inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="next-intl-clerk-theme"
          >
            <MyClerkProvider>
              <Header />
              <main>{children}</main>
            </MyClerkProvider>
          </ThemeProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
