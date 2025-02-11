import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="flex flex-col lg:flex-row space-y-5 justify-evenly items-center text-center bg-base-200 text-base-content p-10">
                <div className='md:space-y-3'>
                    <h6 className="text-black lg:text-xl font-semibold md:mb-5">Our Location</h6>
                    <p className="text-gray-700">Reine Studio</p>
                    <p className="text-gray-700">Los Angeles, 8721 M</p>
                    <p className="text-gray-700">Central Avenue, CA 90036</p>
                </div>
                <div className='md:space-y-3'>
                    <h6 className="text-black lg:text-xl font-semibold md:mb-5">Get in Touch</h6>
                    <p className="text-gray-700">+12 9 8765 4321</p>
                    <p className="text-gray-700">hello@yourdomain.com</p>
                    <div className='flex items-center justify-center gap-4 mt-4'>
                        <FaFacebook className='cursor-pointer' />
                        <FaInstagram className='cursor-pointer' />
                        <FaTwitter className='cursor-pointer' />
                    </div>
                </div>
                <div className='md:space-y-3'>
                    <h6 className="text-black lg:text-xl font-semibold md:mb-5">Working Hours</h6>
                    <p className="text-gray-700">Mon-Fri: 10:00AM - 9:00PM</p>
                    <p className="text-gray-700">Saturday: 10:00AM - 7:00PM</p>
                    <p className="text-gray-700">Sunday: 10:00PM - 7:00PM</p>
                </div>
            </footer>

            <hr />

            <footer className="footer footer-center bg-base-200 text-base-content p-4">
                <aside>
                    <p className='text-gray-700'>Copyright © {new Date().getFullYear()} - All rights reserved by
                        <span className='font-semibold text-blue-600'>
                            <a href="https://www.eminencesoftware.com" target='_blank'> Eminence Software Limited.</a>
                        </span>
                    </p>
                </aside>
            </footer>
        </>
    )
}
