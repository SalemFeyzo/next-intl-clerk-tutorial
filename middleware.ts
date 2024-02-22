import createMiddleware from "next-intl/middleware";
import {
  locales,
  localePrefix,
  defaultLocale,
  localeDetection,
  pathnames,
} from "@/navigation";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
  localeDetection,
  pathnames,
});

// only applies this middleware to files in the app directory
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
