# [Next-intl](https://next-intl-docs.vercel.app/) and [Clerk](https://clerk.com/) with [Next.js 14](https://nextjs.org/) AppRouter

## Video tutorial:

<!--
[![Video tutorial](https://img.youtube.com/vi/Q1GJpcJLXhQ/0.jpg)](https://www.youtube.com/watch?v=Q1GJpcJLXhQ "Video tutorial") -->

In this guide, we'll walk through the process of setting up internationalization (i18n) with authentication in your Next.js application using Next-intl and Clerk, leveraging Next.js 14's AppRouter. We'll cover everything from project setup to integrating Next-intl for i18n support and Clerk for authentication.

## Recourses:

- next-intl docs: https://next-intl-docs.vercel.app/docs/getting-started/app-router
- next-intl official Github example: https://github.com/amannn/next-intl/tree/main/examples/example-app-router-playground
  You can download it by:
  ```bash
  curl https://codeload.github.com/amannn/next-intl/tar.gz/main | tar -xz --strip=2 next-intl-main/examples/example-app-router-playground
  ```
- Clerk Docs: https://clerk.com/docs/quickstarts/nextjs
- Clerk + next-intl middleware Docs: https://clerk.com/docs/references/nextjs/auth-middleware#use-before-auth-to-execute-middleware-before-authentication

## Demo:

Check out the [demo](https://next-intl-clerk-tutorial-iota.vercel.app/) hosted on Vercel to see the implemented features in action.

## Overview:

In this tutorial, you'll learn how to:

1. Set up a Next.js 14 AppRouter project:
   We'll start by creating a new Next.js application with the AppRouter option enabled, TypeScript, ESLint, and Tailwind CSS.

2. Configure Next-intl for i18n support:
   We'll cover the installation of Next-intl, directory setup, message handling, navigation, configuration file setup, and middleware integration for i18n support.

3. Integrate Clerk for authentication:
   You'll learn how to install Clerk, set up environment variables, configure Clerk providers, middleware, and handle protected routes in the navigation component.

4. Additional Configuration:
   We'll cover additional configurations such as setting up dynamic OpenGraph images, customizing the not-found page, adding Google Fonts, and supporting SSG (Static Site Generation).

- **Project Setup**:

We'll start by creating a new Next.js AppRouter project using the provided setup instructions. This includes configuring TypeScript, ESLint, Tailwind CSS, and enabling the AppRouter option.

- **Next-intl Setup**:

We'll guide you through the installation of Next-intl, directory setup, message handling, navigation setup, configuration file setup, middleware integration, and additional components such as custom NavigationLink and Header.

- **Clerk Setup**:

You'll learn how to install Clerk, set up environment variables, configure Clerk providers, middleware, and handle protected routes in the navigation component. We'll also cover the setup of Sign In and Sign Up pages using Clerk's components.

By following this tutorial, you'll have a comprehensive understanding of how to set up internationalization and authentication in your Next.js application using Next-intl and Clerk with the AppRouter. Let's get started!

- [1 Project Setup](#project-setup)
- [2 Next-intl Setup](#next-intl-setup)
  - [2.1 next-intl Installation](#installation)
  - [2.2 next-intl Directories Setup](#directories-setup)
  - [2.3 next-intl Messages](#messages)
  - [2.4 next-intl Navigation](#next-intl-navigation)
  - [2.5 next-intl Config File](#next-intl-config-file)
  - [2.6 next-intl Plugin](#next-intl-plugin)
  - [2.7 next-intl Middleware](#middleware)
  - [2.8 next-intl Messages and Environment Variables Types](#messages-and-environment-variables-types)
    - [2.8.1 Messages Types](#messages-types)
    - [2.8.2 Environment Variables Types](#environment-variables-types)
  - [2.9 next-intl Provider](#next-intl-provider)
  - [2.10 SEO](#seo)
    - [2.10.1 Localized Metadata](#localized-metadata-in-applocalelayouttsx)
    - [2.10.1 next-intl Dynamic OpenGraph Image ](#dynamic-opengraph-image)
    - [2.10.2 Sitemap](#sitemap)
    - [2.11.3 Robots](#robots)
  - [2.11 next-intl Not Found page](#not-found-page-and-other-pages-translations)
  - [2.12 avoid redirecting to the `nextjs` original `not-found` page](#to-avoid-redirecting-to-the-nextjs-original-not-found-page-create-restpagetsx-inside-theapplocale-directory)
  - [2.13 next-intl Custom NavigationLink Component](#custom-navigationlink-component)
  - [2.14 next-intl Navigation Component](#navigation-component)
  - [2.15 next-intl LocaleSwitcher Component](#localeswitcher-component)
  - [2.16 next-intl Header Component](#header-component)
  - [2.17 next-intl Add Header Component to The RootLayout](#add-header-component-to-the-rootlayout-in-applocale-directory)
  - [2.18 Add google fonts](#add-google-fonts-to-applocalelayouttsx)
  - [2.19 Add support for `SSG`](#add-support-for-ssg)
- [3 Clerk Setup](#clerk-setup)
  - [3.1 Clerk Installation](#clerk-installation)
  - [3.2 Clerk Environment Variables](#clerk-environment-variables)
  - [3.3 Clerk Environment Variables Types](#clerk-environment-variables-types)
  - [3.4 Clerk Provider](#clerk-provider)
  - [3.5 Clerk Middleware](#clerk-middleware)
  - [3.6 Header and Navbar Protected Items](#header-and-navbar-protected-items)
  - [3.7 Clerk Sign In and Sign Up Pages](#clerk-sign-in-and-sign-up-pages)

## Project setup:

Created a new Next.js App Router project using:

```bash
npx create-next-app@latest next-intl-clerk
```

Select the options as below:

```bash
✔ Would you like to use TypeScript? Yes
✔ Would you like to use ESLint?  Yes
✔ Would you like to use Tailwind CSS? Yes
✔ Would you like to use `src/` directory? No
✔ Would you like to use App Router? (recommended) Yes
✔ Would you like to customize the default import alias (@/*)? No
```

Go to `next-intl-clerk`:

```bash
cd next-intl-clerk
```

Your project structure must be like below:

```bash
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── next.svg
│   └── vercel.svg
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

Open the current directory with Vscode:

```bash
code .
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Now let's add rules to `.eslintrc.json`:

```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "warn"
  }
}
```

Clean up the `app/page.tsx`:

```tsx
export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}
```

And `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

And let's remove the default styles in `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
/*clean all the rules under these three lines above*/
```

And `tailwind.config.ts`:

```tsx
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [],
};
export default config;
```

Now our project setup has done, let's commit that:

```bash
git commit -m "Project setup"
```

## [Next-intl](https://next-intl-docs.vercel.app/) setup:

### Installation

let’s install next-intl:

```bash
npm install next-intl
```

### Directories setup

`next-intl` integrates with the App Router by using a `[locale]` [dynamic segment](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes) so that we can use this segment to provide content in different languages (e.g. /en, /en/about, etc.).
Now create `[locale]` directory inside the `app` directory and move `layout.tsx` and `page.tsx` to it:

```bash
└── app

    └── [locale]

        ├── layout.tsx

        └── page.tsx
```

Create pages you need inside the `app/[locale]` directory:
In my case I created `app/[locale]/about`, `app/[locale]/dashboard`, `app/[locale]/sign-in`, `app/[locale]/sign-up`:

```bash
.
├── [locale]
│   ├── about
│   │   └── page.tsx
│   ├── dashboard
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sign-in
│   │   └── [[...sign-in]]
│   │       └── page.tsx
│   └── sign-up
│       └── [[...sign-up]]
│           └── page.tsx
```

### Messages:

Now create `messages` directory in the project root directory outside app directory, inside it create `en.json`(for English), `ar.json` (for Arabic) and `tr.json` (for Turkish) files:

```bash
.
├── app
├── .env.local
├── .eslintrc.json
├── .gitignore
├── messages
│   ├── ar.json
│   ├── en.json
│   └── tr.json
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

For example `en.json`:

```json
{
  "default": {
    "pages": {
      "about": { "title": "About Us" },
      "home": { "title": "Home page" },
      "notFound": { "title": "Page not found (404)" },
      "dashboard": { "title": "Dashboard" }
    },
    "navbar": {
      "links": {
        "home": "Home",
        "about": "About",
        "sign-in": "Sign In",
        "dashboard": "Dashboard"
      },
      "actions": {
        "themeSwitcher": {
          "dark": "Dark",
          "light": "Light",
          "system": "System"
        }
      }
    },
    "rootLayoutMetadata": {
      "title": "next-intl & Clerk example",
      "description": "This is an example of using next-intl & Clerk."
    },
    "openGraph": { "title": "next-intl & Clerk example" }
  }
}
```

Then create `i18n.tsx` and `navigation.tsx` outside the `app` directory in the `lib` directory.

### `next-intl` Navigation:

the `navigation.tsx`:
this code sets up configurations for handling internationalized routing in a Next.js application using `next-intl`, including defining supported locales, specifying default locale, and configuring localized route paths. It also provides functions for creating localized navigation links based on these configurations

```tsx
// /lib/navigation.tsx
import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const defaultLocale = "en";

export const localeDetection = true;

export const locales = ["en", "ar"] as const;

export const localePrefix =
  process.env.NEXT_PUBLIC_LOCALE_PREFIX === "never" ? "never" : "as-needed";

export const pathnames = {
  "/": "/",
  "/dashboard": "/dashboard",
  "/sign-in": "/sign-in",
  "/sign-up": "/sign-up",
  "/about": {
    en: "/about",
    ar: `/${encodeURIComponent("حول")}`,
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames,
  });
```

### `next-intl` Config File:

The `i18n.tsx`:
this code sets up the configuration for handling internationalization in a Next.js application, including retrieving locale-specific messages, handling errors, and providing fallback options.

```tsx
//  /lib/i18n.tsx
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./navigation";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const now = headers().get("x-now");
  const timeZone = headers().get("x-time-zone") ?? "Europe/Vienna";
  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    now: now ? new Date(now) : undefined,
    timeZone,
    messages,
    defaultTranslationValues: {
      globalString: "Global string",
      highlight: (chunks) => <strong>{chunks}</strong>,
    },
    formats: {
      dateTime: {
        medium: {
          dateStyle: "medium",
          timeStyle: "short",
          hour12: false,
        },
      },
    },
    onError(error) {
      if (
        error.message ===
        (process.env.NODE_ENV === "production"
          ? "MISSING_MESSAGE"
          : "MISSING_MESSAGE: Could not resolve `missing` in `Index`.")
      ) {
        // Do nothing, this error is triggered on purpose
      } else {
        console.error(JSON.stringify(error.message));
      }
    },
    getMessageFallback({ key, namespace }) {
      return (
        "`getMessageFallback` called for " +
        [namespace, key].filter((part) => part != null).join(".")
      );
    },
  };
});
```

### `next-intl` Plugin:

After that go to `next.config.mjs` in the project root directory and add `next-intl`:

```js
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n.tsx");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
```

### Environment Variables:

Now create `.env.local` file:

```bash
NODE_ENV=development
SITE_URL=http://localhost:3000
NEXT_PUBLIC_LOCALE_PREFIX=as-needed
```

### Middleware:

Now create the `middleware.ts` file in outside the app directory:

```tsx
import createMiddleware from "next-intl/middleware";
import {
  locales,
  localePrefix,
  defaultLocale,
  localeDetection,
  pathnames,
} from "@/lib/navigation";

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
```

### Messages and Environment Variables Types:

#### Messages Types:

Create `global.d.ts` in the root directory:

```ts
// Declaring this interface provides type safety for message keys
type Messages = typeof import("./messages/en.json");
// eslint-disable-next-line
declare interface IntlMessages extends Messages {}
```

#### Environment Variables Types

Create `environment.d.ts` in the root directory:

```ts
//eslint-disable-next-line
declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    SITE_URL: string;
    NEXT_PUBLIC_LOCALE_PREFIX: string;
  }
}
```

### `next-intl` Provider`:

```tsx
// /app/[locale]/layout.tsx
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";

import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>
          <main>{children}</main>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
```

### SEO:

#### Localized metadata in `app/[locale]/layout.tsx:

```tsx
// /app/[locale]/layout.tsx
......
import {
  getFormatter,
  getNow,
  getTimeZone,
  getTranslations,
} from "next-intl/server";
.....
export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: "default.rootLayoutMetadata",
  });
  const formatter = await getFormatter({ locale });
  const now = await getNow({ locale });
  const timeZone = await getTimeZone({ locale });

  return {
    metadataBase: new URL(
      process.env.SITE_URL ? process.env.SITE_URL : "http://localhost:3000"
    ),
    title: t("title"),
    description: t("description"),
    other: {
      currentYear: formatter.dateTime(now, { year: "numeric" }),
      timeZone: timeZone || "N/A",
    },
  };
}
......
```

#### Dynamic OpenGraph Image:

Create a new file called `opengraph-image.tsx` in `app/[locale]/` directory:

```tsx
import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

type Props = {
  params: {
    locale: string;
  };
};

export default async function Image({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "default.openGraph" });
  return new ImageResponse(<div style={{ fontSize: 128 }}>{t("title")}</div>);
}
```

#### Sitemap:

```ts
// /app/sitemap.ts
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.SITE_URL;
  return [
    {
      url: `${siteUrl}/`,
    },
    {
      url: `${siteUrl}/ar`,
    },
    {
      url: `${siteUrl}/about`,
    },
    {
      url: `${siteUrl}/ar/${encodeURIComponent("حول")}`,
    },
  ];
}
```

#### Robots:

```ts
// /app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard"],
      },
    ],
    sitemap: `${process.env.SITE_URL}/sitemap.xml`,
  };
}
```

### Not found page and other pages' translations:

Create a new file called `not-found.tsx` in `app/[locale]/` directory:

```tsx
// /app/[locale]/not-found.tsx
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("default.pages.notFound");
  return (
    <div>
      <h2>{t("title")}</h2>
    </div>
  );
}
```

Then add the corresponding translations to the rest of other pages.

### To avoid redirecting to the `nextjs` original `not-found` page, create `[...rest]/page.tsx` inside the`app/[locale]` directory:

```tsx
// /ap/[locale]/[...rest]/page.tsx
import { notFound } from "next/navigation";

export default function CatchAll() {
  notFound();
}
```

### Custom NavigationLink component:

Now create `components` directory in the root directory, and inside it create `NavigationLink.tsx`:

```tsx
// /components/NavigationLink.tsx
"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import { Link, pathnames } from "@/lib/navigation";

export default function NavigationLink<
  Pathname extends keyof typeof pathnames
>({ href, ...rest }: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      style={{ textDecoration: isActive ? "underline" : "none" }}
      {...rest}
    />
  );
}
```

### Navigation Component:

create `Navigation.tsx` in the `components` directory:

```tsx
// /components/Navigation.tsx
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
```

### LocaleSwitcher Component:

Create `LocaleSwitcher.tsx` in the `components` directory:

```tsx
// components/LocaleSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <select value={locale} onChange={handleChange}>
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </select>
  );
}
```

### Header Component:

Create `Header.tsx` in the `components` directory:

```tsx
// /components/Header.tsx
import { Link } from "@/lib/navigation";
import Navigation from "./Navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Header() {
  return (
    <header className="flex items-center h-20 gap-4 px-4 border-b border-black border-solid sm:px-8 border-opacity-20">
      <Link href="/" className="flex items-center h-20 gap-2 sm:gap-4">
        LOGO
      </Link>
      <Navigation />
      <div className="grow" />
      <LocaleSwitcher />
    </header>
  );
}
```

### Add Header Component to the RootLayout in `app/[locale]/` directory:

```diff
// /app/[locale]/layout.tsx
....
import { NextIntlClientProvider, useMessages } from "next-intl";
+ import Header from "@/components/Header";

....

export default function RootLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>
+         <Header />
          <main>{children}</main>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
```

### Add google fonts to `app/[locale]/layout.tsx`:

```diff
// /app/[locale]/layout.tsx
....
+ import { Inter, Cairo } from "next/font/google";
....
+ const inter = Inter({ subsets: ["latin"] });
+ const cairo = Cairo({ subsets: ["arabic"] });
....
export default function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <NextIntlClientProvider locale={locale} messages={messages}>
-        <body>
+        <body className={locale === "ar" ? cairo.className : inter.className}>
              <Header />
              <main>{children}</main>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}

```

### Add support for `SSG`:

for the `layout.tsx`:

```diff
// /app/[locale]/layout.tsx
....
import {
  getFormatter,
  getNow,
  getTimeZone,
  getTranslations,
+  unstable_setRequestLocale,
} from "next-intl/server";

+ import { locales } from "@/lib/navigation";
....
+ export function generateStaticParams() {
+  return locales.map((locale) => ({ locale }));
+}
....
export default function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();
+  unstable_setRequestLocale(locale);

  return (
    .....
}

```

Then for other pages add:(Do not add it for `[..rest]/page`, `sign-in` and `sign-up` pages)

```ts
unstable_setRequestLocale(locale);
```

## Clerk Setup:

Go ahead to [Clerk website](https://dashboard.clerk.com/) create new project and get the secret and public keys from there.

### Clerk Installation:

```bash
npm i @clerk/nextjs @clerk/localizations
```

### Clerk Environment Variables:

Now after you have got public and secret keys from Clerk dashboard put them in `.env.local` file:

```bash
NODE_ENV=development
SITE_URL=http://localhost:3000
NEXT_PUBLIC_LOCALE_PREFIX=as-needed
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-public-key
CLERK_SECRET_KEY=your-secret-key
```

### Clerk Environment Variables Types:

Then add the types to `environment.d.ts` so we get autocompletion:

```ts
//eslint-disable-next-line
declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    SITE_URL: string;
    NEXT_PUBLIC_LOCALE_PREFIX: string;
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
    CLERK_SECRET_KEY: string;
  }
}
```

### Clerk Provider:

Now let's make `MyClerkProvider.tsx` inside `components` directory:

```tsx
// /components/MyClerkProvider.tsx
"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { arSA, enUS } from "@clerk/localizations";
import { useLocale } from "next-intl";

type Props = {
  children: React.ReactNode;
};

export default function MyClerkProvider({ children }: Props) {
  const locale = useLocale();

  return (
    <ClerkProvider
      localization={locale === "ar" ? arSA : enUS}
      appearance={{
        layout: {
          socialButtonsPlacement: "top",
          socialButtonsVariant: "iconButton",
          termsPageUrl: "https://clerk.com/terms",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
```

Now add the provider to the `layout.tsx` in `app/[locale]/`:

```diff
// /app/[locale]/layout.tsx
.....


+ import MyClerkProvider from "@/components/MyClerkProvider";

.....


export default function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  const messages = useMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>
+            <MyClerkProvider>
              <Header />
              <main>{children}</main>
+            </MyClerkProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
```

### Clerk Middleware:

```ts
import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";
import {
  locales,
  localePrefix,
  defaultLocale,
  localeDetection,
  pathnames,
} from "@/lib/navigation";

const intlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale,
  localeDetection,
  pathnames,
});

export default authMiddleware({
  beforeAuth: (req) => {
    // Execute next-intl middleware before Clerk's auth middleware
    return intlMiddleware(req);
  },
  publicRoutes: (req) => !req.url.includes("/dashboard"),
  // debug: true,
});

// only applies this middleware to files in the app directory
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
```

### Header and Navbar Protected Items:

Edit the `Navigation.tsx` component:

```tsx
// /components/Navigation.tsx
import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Navigation() {
  const t = useTranslations("default.navbar.links");

  return (
    <nav style={{ display: "flex", gap: 10 }}>
      <NavigationLink href="/">{t("home")}</NavigationLink>
      <NavigationLink href="/about">{t("about")}</NavigationLink>
      <SignedOut>
        <NavigationLink href="/sign-in">{t("sign-in")}</NavigationLink>
      </SignedOut>
      <SignedIn>
        <NavigationLink href="/dashboard">{t("dashboard")}</NavigationLink>
      </SignedIn>
    </nav>
  );
}
```

And `Header.tsx`:

```tsx
// /components/Header.tsx
import { Link } from "@/navigation";
import { OrganizationSwitcher, SignedIn, UserButton } from "@clerk/nextjs";
import Navigation from "./Navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Header() {
  return (
    <header className="flex items-center h-20 gap-4 px-4 border-b border-black border-solid sm:px-8 border-opacity-20">
      <Link href="/" className="flex items-center h-20 gap-2 sm:gap-4">
        LOGO
      </Link>
      <Navigation />
      <div className="grow" />
      <LocaleSwitcher />
      <SignedIn>
        <div className="hidden sm:block">
          <OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" />
        </div>
        <div className="block sm:hidden">
          <OrganizationSwitcher
            afterCreateOrganizationUrl="/dashboard"
            appearance={{
              elements: {
                organizationSwitcherTriggerIcon: `hidden`,
                organizationPreviewTextContainer: `hidden`,
                organizationSwitcherTrigger: `pr-0`,
              },
            }}
          />
        </div>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </header>
  );
}
```

### Clerk Sign In and Sign Up Pages:

The `sign-in/[[...sign-in]]/page.tsx`:

```tsx
// /app/[locale]/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from "@clerk/nextjs";
import { useTranslations } from "next-intl";

export default function MySignIn() {
  const t = useTranslations("default.pages.sign-in");
  return (
    <div>
      <h1>{t("title")}</h1>
      <div className="flex justify-center py-24">
        <SignIn signUpUrl="/sign-up" afterSignInUrl="/dashboard" />
      </div>
    </div>
  );
}
```

The `sign-up/[[...sign-up]]/page.tsx`:

```tsx
// /app/[locale]/sign-in/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs";
import { useTranslations } from "next-intl";

export default function MySignUp() {
  const t = useTranslations("default.pages.sign-up");
  return (
    <div>
      <h1>{t("title")}</h1>
      <div className="flex justify-center py-24">
        <SignUp signInUrl="/sign-in" afterSignUpUrl="/dashboard" />
      </div>
    </div>
  );
}
```
