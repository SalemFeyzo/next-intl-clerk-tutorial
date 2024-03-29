"use client";

import { useLocale, useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Navigation() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const locale = useLocale();

  return isDesktop ? (
    <Menu isDesktop={isDesktop} />
  ) : (
    <Drawer direction={locale === "ar" ? "right" : "left"}>
      <DrawerTrigger>
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        <Menu isDesktop={isDesktop} />
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

const Menu = ({ isDesktop }: { isDesktop: boolean }) => {
  const t = useTranslations("default.navbar.links");
  const locale = useLocale();
  return (
    <NavigationMenu isDesktop={isDesktop} dir={locale === "ar" ? "rtl" : "ltr"}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationLink href="/">{t("home")}</NavigationLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationLink href="/about">{t("about")}</NavigationLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationLink href="/blog">{t("blog")}</NavigationLink>
        </NavigationMenuItem>
        <SignedIn>
          <NavigationMenuItem>
            <NavigationLink href="/dashboard">{t("dashboard")}</NavigationLink>
          </NavigationMenuItem>
        </SignedIn>
        <SignedOut>
          <NavigationMenuItem>
            <NavigationLink href="/sign-in">{t("sign-in")}</NavigationLink>
          </NavigationMenuItem>
        </SignedOut>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
