"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import { navlinks } from "./NavbarLinks";

const NavbarMobile = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <FaBars size={30} />
            </SheetTrigger>
            <SheetContent>
                <ul className="flex flex-col h-full gap-5 my-auto">
                    {navlinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <Link className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" href={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </SheetContent>
        </Sheet>
    );
};

export default NavbarMobile;
