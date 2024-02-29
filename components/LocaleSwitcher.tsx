"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/lib/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { slug } = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(
      { pathname, params: { slug: slug as string } },
      { locale: e.target.value }
    );
  };

  return (
    <select value={locale} onChange={handleChange}>
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </select>
  );
}
