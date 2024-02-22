import { SignUp } from "@clerk/nextjs"
import { useTranslations } from "next-intl"


function MySignUp() {
    const t = useTranslations("default.pages.sign-up")
    return (
        <div><h1>{t("title")}</h1>
            <div className="flex justify-center py-24">
                <SignUp
                    signInUrl="/sign-in"
                    afterSignUpUrl="/dashboard"
                />
            </div>
        </div>
    )
}

export default MySignUp