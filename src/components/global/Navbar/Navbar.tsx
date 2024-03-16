"use client";

import Image from "next/image";
import Link from "next/link";
import { navlinks } from "./NavbarLinks";
import Button from "../Button/Button";
import { FaUser } from "react-icons/fa6";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/assets/img/hilink-logo.svg" height={60} width={80} alt="Logo" />
            </Link>

            <div className="flex gap-12">
                <ul className="hidden h-full gap-12 lg:flex my-auto">
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

                <div className="lg:flexCenter hidden my-auto">
                    <Button
                        type="button"
                        title="Login"
                        variant="btn_dark_green"
                        icon={<FaUser />}
                        iconPosition="left"
                        onClick={() => console.log('Button is clicked')}
                    />
                </div>
            </div>
            <div className="inline-block lg:hidden">
                <NavbarMobile />
            </div>
        </nav>
    );
};

export default Navbar;
