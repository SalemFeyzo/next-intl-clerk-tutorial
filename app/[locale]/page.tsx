import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("default.pages.home")
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
