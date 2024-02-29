"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/lib/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { slug } = useParams();

  const handleChange = (value: string) => {
    router.push(
      { pathname, params: { slug: slug as string } },
      { locale: value }
    );
  };

  return (
    <Select
      defaultValue={locale}
      onValueChange={handleChange}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ar">العربية</SelectItem>
      </SelectContent>
    </Select>
  );
}
