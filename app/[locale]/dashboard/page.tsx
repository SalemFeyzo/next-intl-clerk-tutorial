import { useTranslations } from "next-intl"

function Dashboard() {
    const t = useTranslations("default.pages.dashboard")
    return (
        <div>{t("title")}</div>
    )
}

export default Dashboard