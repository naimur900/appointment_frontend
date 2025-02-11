"use client";
import React from 'react'
import { LuMicroscope } from "react-icons/lu";
import { GiMagnifyingGlass } from "react-icons/gi";
import { MdOutlineBloodtype } from "react-icons/md";
import { PiRadioactiveBold } from "react-icons/pi";

const hospitalLabs = [
    {
        icon: <LuMicroscope />,
        labName: "Pathology Lab",
        description: "Performs diagnostic tests on tissue and bodily fluids to identify diseases and monitor treatment progress."
    },
    {
        icon: <GiMagnifyingGlass />,
        labName: "Microbiology Lab",
        description: "Specializes in the study of microorganisms to diagnose infections and determine effective treatments."
    },
    {
        icon: <MdOutlineBloodtype />,
        labName: "Hematology Lab",
        description: "Focuses on the analysis of blood samples to diagnose blood disorders, infections, and overall health."
    },
    {
        icon: <PiRadioactiveBold />,
        labName: "Radiology Lab",
        description: "Provides advanced imaging services, including X-rays, MRIs, and CT scans, to assist in diagnosis and treatment."
    }
];

export default function ServicesContent() {
    return (
        <div className="services md:mt-20 w-full py-20 lg:py-100 p-5 lg:p-0">
            <div className="w-full lg:max-w-6xl lg:m-auto">
                <div className="depertment-head text-center mb-14">
                    <h3 className="text-blue-600 text-lg font-semibold tracking-wide uppercase mb-7">Our Services</h3>
                    <h2 className="font-header-font md:text-3xl w-full font-semibold lg:m-auto">
                        Providing Medical Care For The Sickest In Our Community.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                    {hospitalLabs.map((eachLab, index) => (
                        <div key={index}
                            className="service-item group p-10 md:mb-0 bg-blue-50 relative before:absolute before:right-0 before:bg-black before:w-2 before:h-full before:blur-md before:bg-opacity-15 before:top-0 transition-colors ease delay-300 z-0 after:absolute after:w-0 after:h-full after:top-0 after:left-0 after:opacity-0 after:bg-blue-200 hover:after:w-full hover:after:opacity-100 after:transition-all after:ease-out after:delay-300 after:-z-[1]">
                            <a href="#" title="" className="space-y-7 block">
                                <div className="icon text-4xl">
                                    {eachLab.icon}
                                </div>
                                <h4 className="text-xl font-semibold font-header-font capitalize text-blue-600">{eachLab.labName}</h4>
                                <p className="font-body-font">{eachLab.description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
