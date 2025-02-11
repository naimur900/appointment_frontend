'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
// import API from '../utilities/api';
// import { Bounce, toast } from 'react-toastify';
import NavLinks from './NavLinks';

export default function NavBar() {
    const router = useRouter();

    // const logout = async () => {
    //     try {
    //         await API.post("/logout");
    //         localStorage.removeItem("auth_token");
    //         toast.success('Logged out successfully!', {
    //             position: "top-right",
    //             autoClose: 3000,
    //             hideProgressBar: false,
    //             closeOnClick: false,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //             transition: Bounce,
    //         });
    //         router.push("/login");
    //     } catch (err) {
    //         console.error("Logout failed", err);
    //     }
    // };

    return (
        <div className="navbar md:justify-around justify-between items-center bg-base-100 fixed z-20">
            {/* Start */}
            <div className="navbar-start">
                {/* Mobile Menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLinks />
                        <Link href="/find-doctor" className="text-center rounded-md overflow-hidden border border-blue-600 text-blue-600 p-2 md:py-2 md:px-8 font-semibold transition-all ease delay-75 inline-block relative before:bg-blue-600 before:absolute before:top-1/2 before:left-0 before:-z-[1] before:opacity-0 before:w-0 before:h-full before:transform before:translate-x-0 before:-translate-y-1/2 before:transition-all before:ease-out before:delay-300 hover:before:w-full hover:before:opacity-100 hover:text-white">Find Doctor</Link>
                    </ul>
                </div>
                {/* Logo for larger devices */}
                <div className="mr-4 hidden md:block">
                    <Link href="/">
                        <Image src="/eminence.png" width={100} height={20} priority className="w-40" alt="Eminence Software LTD" />
                    </Link>
                </div>
            </div>

            {/* Logo for mobile devices */}
            <div className="mr-4 md:hidden">
                <Link href="/">
                    <Image src="/eminence.png" width={160} height={20} className="w-24" alt="Eminence Software LTD" />
                </Link>
            </div>

            {/* Center Nav */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLinks />
                </ul>
            </div>

            {/* End Section */}
            <div className="hidden md:block">
                <Link href="/find-doctor" className="rounded-md min-w-max z-[1] overflow-hidden border border-blue-600 text-blue-600 p-2 md:py-2 md:px-8 font-semibold transition-all ease delay-75 inline-block relative before:bg-blue-600 before:absolute before:top-1/2 before:left-0 before:-z-[1] before:opacity-0 before:w-0 before:h-full before:transform before:translate-x-0 before:-translate-y-1/2 before:transition-all before:ease-out before:delay-300 hover:before:w-full hover:before:opacity-100 hover:text-white">Find Doctor</Link>
            </div>
        </div>
    )
}
