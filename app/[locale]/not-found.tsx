import { useTranslations } from "next-intl";

export default function NotFound() {
    const t = useTranslations("default.pages.notFound");
    return (
        <div>
            <h2>{t("title")}</h2>
        </div>
    );
}