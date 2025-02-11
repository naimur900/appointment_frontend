"use client"; // Necessary for usePathname in Next.js App Router

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
    const pathname = usePathname();

    const getLinkStyle = (path) => ({
        backgroundColor: pathname === path ? "white" : "",
        color: pathname === path ? "blue" : "black",
    });

    return (
        <>
            <li>
                <Link href="/" style={getLinkStyle("/")} className="font-semibold" title="home">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about" style={getLinkStyle("/about")} className="font-semibold" title="about">
                    About
                </Link>
            </li>
            <li>
                <Link href="/services" style={getLinkStyle("/services")} className="font-semibold" title="services">
                    Services
                </Link>
            </li>
            {/* Uncomment these if needed */}
            {/* 
            <li>
                <Link href="/login" style={getLinkStyle("/login")} className="uppercase font-semibold text-base">
                    Login
                </Link>
            </li>
            <li>
                <Link href="/register" style={getLinkStyle("/register")} className="uppercase font-semibold text-base">
                    Register
                </Link>
            </li>
            <li>
                <Link href="/dashboard" style={getLinkStyle("/dashboard")} className="uppercase font-semibold text-base">
                    Dashboard
                </Link>
            </li> 
            */}
        </>
    )
}
