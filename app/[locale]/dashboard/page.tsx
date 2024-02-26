import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Dashboard({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("default.pages.dashboard");

  return <div>{t("title")}</div>;
}
