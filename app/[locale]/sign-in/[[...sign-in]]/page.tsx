import { SignIn } from "@clerk/nextjs"
import { useTranslations } from "next-intl"


function MySignIn() {
    const t = useTranslations("default.pages.sign-in")
    return (
        <div><h1>{t("title")}</h1>
            <div className="flex justify-center py-24">
                <SignIn signUpUrl="/sign-up" afterSignInUrl="/dashboard" />
            </div>
        </div>
    )
}

export default MySignIn