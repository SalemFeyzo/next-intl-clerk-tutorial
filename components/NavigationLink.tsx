"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import { Link, pathnames } from "@/lib/navigation";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default function NavigationLink<
  Pathname extends keyof typeof pathnames
>({ href, children, ...rest }: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      {...rest}
      legacyBehavior
      passHref
    >
      <NavigationMenuLink
        active={isActive}
        className={navigationMenuTriggerStyle()}
      >
        {children}
      </NavigationMenuLink>
    </Link>
  );
}
