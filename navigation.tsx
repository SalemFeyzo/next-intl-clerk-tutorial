import {
    createLocalizedPathnamesNavigation,
    Pathnames,
} from "next-intl/navigation";

export const defaultLocale = "en";

export const localeDetection = true;

export const locales = ["en", "ar", "tr"] as const;

export const localePrefix =
    process.env.NEXT_PUBLIC_LOCALE_PREFIX === "never" ? "never" : "as-needed"; // never, always or as=needed

export const pathnames = {
    "/": "/",
    "/dashboard": "/dashboard",
    "/sign-in": "/sign-in",
    "/sign-up": "/sign-up",
    "/about": {
        en: "/about",
        ar: `/${encodeURIComponent("حول")}`,
        tr: `/${encodeURIComponent("hakkında")}`,
    },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({
        locales,
        localePrefix,
        pathnames,
    });