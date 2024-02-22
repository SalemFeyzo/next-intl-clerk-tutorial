import { Link } from "@/navigation";
import Navigation from "./Navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import { OrganizationSwitcher, SignedIn, UserButton } from "@clerk/nextjs";


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
                <UserButton afterSignOutUrl="/sign-in" />
            </SignedIn>
        </header>
    );
}