import { useTranslations } from "next-intl"


function SignIn() {
    const t = useTranslations("default.pages.sign-in")
    return (
        <div><h1>{t("title")}</h1></div>
    )
}

export default SignIn