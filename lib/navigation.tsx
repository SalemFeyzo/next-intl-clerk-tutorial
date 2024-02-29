import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const defaultLocale = "en";

export const localeDetection = true;

export const locales = ["en", "ar"] as const;

export const localePrefix =
  process.env.NEXT_PUBLIC_LOCALE_PREFIX === "never" ? "never" : "as-needed"; // never, always or as=needed

export const pathnames = {
  "/": "/",
  "/about": {
    en: "/about",
    ar: `/${encodeURIComponent("حول")}`,
  },
  "/blog": "/blog",
  "/blog/[slug]": "/blog/[slug]",
  "/dashboard": "/dashboard",
  "/sign-in": "/sign-in",
  "/sign-up": "/sign-up",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames,
  });
