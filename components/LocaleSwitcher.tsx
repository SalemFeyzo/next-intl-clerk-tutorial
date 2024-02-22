"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

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
            <option value="tr">Türkçe</option>
        </select>
    );
}