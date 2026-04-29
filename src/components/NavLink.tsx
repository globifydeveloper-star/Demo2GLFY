"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends Omit<ComponentProps<typeof Link>, "className" | "href"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  to?: string;
  href?: string | object;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName, to, href, ...props }, ref) => {
    const pathname = usePathname();
    const destination = (to || href || "") as string;
    // Check if the current pathname matches the destination exactly, or if it's a sub-route
    const isActive = destination === "/" 
      ? pathname === "/" 
      : pathname === destination || pathname.startsWith(`${destination}/`);

    return (
      <Link
        ref={ref}
        href={destination}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
