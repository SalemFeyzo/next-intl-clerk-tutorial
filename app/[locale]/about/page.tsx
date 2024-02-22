import { useTranslations } from "next-intl"

function About() {
    const t = useTranslations("default.pages.about")
    return (
        <div><h1>{t("title")}</h1></div>
    )
}

export default About