import { useTranslations } from "next-intl"


function SignUp() {
    const t = useTranslations("default.pages.sign-up")
    return (
        <div><h1>{t("title")}</h1></div>
    )
}

export default SignUp