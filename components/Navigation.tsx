import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";

export default function Navigation() {
    const t = useTranslations("default.navbar.links");

    return (
        <nav style={{ display: "flex", gap: 10 }}>
            <NavigationLink href="/">{t("home")}</NavigationLink>
            <NavigationLink href="/about">{t("about")}</NavigationLink>
            <NavigationLink href="/sign-in">{t("sign-in")}</NavigationLink>
            <NavigationLink href="/dashboard">{t("dashboard")}</NavigationLink>
        </nav>
    );
}