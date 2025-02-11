import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '../public/hero-img-1.jpg';
import img2 from '../public/hero-img-2.jpg';

export default function Hero() {
    return (
        <>
            <div className="md:max-w-7xl lg:m-auto w-full hero h-auto pt-20 px-7 md:p-28 box-border lg:pb-28">
                <div className="flex flex-col lg:flex-row items-center lg:space-y-0 space-y-12">
                    {/* Left Section */}
                    <div className="w-full xl:w-1/2 lg:w-1/3">
                        <h1 className="font-header-font text-2xl xl:text-5xl mb-10 font-bold">
                            The Hospital That <br /> Gives You Quality <br /> Treatment
                        </h1>
                        <p className="font-body-font text-xl mb-6">
                            A hospital is a healthcare institution providing patient treatment with specialized health science and auxiliary healthcare staff and medical equipment.
                        </p>
                        <Link href="/services" title="View Service">
                            <span className="rounded-md min-w-max z-[1] overflow-hidden border border-blue-600 text-blue-600 p-2 md:py-2 md:px-8 font-semibold transition-all ease delay-75 inline-block relative before:bg-blue-600 before:absolute before:top-1/2 before:left-0 before:-z-[1] before:opacity-0 before:w-0 before:h-full before:transform before:translate-x-0 before:-translate-y-1/2 before:transition-all before:ease-out before:delay-300 hover:before:w-full hover:before:opacity-100 hover:text-white">
                                View Service
                            </span>
                        </Link>
                    </div>

                    {/* Right Section (Images) */}
                    <div className="w-full xl:w-1/2 lg:w-2/3">
                        <div className="hero-image lg:ml-20">
                            <div className="md:flex md:justify-around lg:space-y-0 lg:gap-7 space-y-12">
                                <Image
                                    src={img1}
                                    className="w-full md:rounded-full shadow-2xl object-cover hover:scale-95 transition-all duration-500 cursor-pointer"
                                    alt="Hospital Image 1"
                                />
                                <Image
                                    src={img2}
                                    className="relative w-full lg:-top-11 md:rounded-full shadow-2xl object-cover hover:scale-95 transition-all duration-500 cursor-pointer"
                                    alt="Hospital Image 2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
