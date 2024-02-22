import { Link } from "@/navigation";
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