"use client"
import Image from 'next/image'
import React from 'react'
import img2 from '../../public/hero-img-2.jpg';

export default function AboutContent() {
    return (
        <div>
            <div className="about w-full md:py-20 lg:py-100 p-5 lg:p-0">
                <div className="w-full lg:max-w-6xl lg:m-auto pt-14">

                    <div className="lg:flex lg:justify-between lg:items-center lg:gap-5">
                        <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
                            <div className="service-image lg:pr-7">
                                <Image src={img2} className="w-full h-96" alt="image" />
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3">
                            <div className="service-text lg:pl-16 relative lg:before:bg-main-color lg:before:h-[2px] lg:before:absolute lg:before:w-16 lg:before:-left-4 before:top-8">
                                <h4 className="font-header-font text-2xl md:text-4xl font-semibold mb-5">About Hospital</h4>
                                <p className="text-sub-color text-lg">Specialized hospitals include trauma centers, rehabilitation hospitals, children's hospitals, geriatric hospitals, and hospitals for specific medical needs, such as psychiatric hospitals for psychiatric treatment and other disease-specific categories. Specialized hospitals can help reduce health care costs compared to general hospitals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
