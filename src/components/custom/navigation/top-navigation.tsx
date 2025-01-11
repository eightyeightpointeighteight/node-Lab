import Link from "next/link";

import { Button } from "@/components/ui/button";
import { NavLinkItem, MobileNavbarWrapper } from "@/components/custom/navigation";

const navItems = [
  {
    id: 1,
    href: "/services",
    label: "Services",
    isExternal: false,
  },
  {
    id: 2,
    href: "/work",
    label: "Work",
    isExternal: false,
  },

  {
    id: 3,
    href: "/about",
    label: "About",
    isExternal: false,
  },
];

export function TopNavigation() {
  return (
    <header className="flex items-center justify-between gap-10 py-4 container">
      <Link href="/" className="flex items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#02DBBA" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
</svg>

        <span className="font-heading text-xl font-bold">
          nodeLab
        </span>
      </Link>
      <div className="flex items-center gap-10">
        <nav className="hidden items-center gap-10 md:flex justify-end">
          {navItems.map((navItem) => (
            <NavLinkItem
              href={navItem.href}
              isExternal={navItem.isExternal}
              key={navItem.id}
            >
              {navItem.label}
            </NavLinkItem>
          ))}
        </nav>
      
      </div>
      <MobileNavbarWrapper>
        <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            {navItems.map((navItem) => (
              <NavLinkItem
                href={navItem.href}
                isExternal={navItem.isExternal}
                key={navItem.id}
              >
                {navItem.label}
              </NavLinkItem>
            ))}
           
          </nav>
        </div>
      </MobileNavbarWrapper>
    </header>
  );
}
