import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";
import { auth } from "@clerk/nextjs";

export default function Navigation() {
    const t = useTranslations("default.navbar.links");
    const { userId } = auth();

    return (
        <nav style={{ display: "flex", gap: 10 }}>
            <NavigationLink href="/">{t("home")}</NavigationLink>
            <NavigationLink href="/about">{t("about")}</NavigationLink>
            {!userId ? (<NavigationLink href="/sign-in">{t("sign-in")}</NavigationLink>)
                : (<NavigationLink href="/dashboard">{t("dashboard")}</NavigationLink>)
            }
        </nav>
    );
}