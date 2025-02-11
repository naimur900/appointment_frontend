"use client"; // Required if you're using App Router (app directory)

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Correct router for Next.js
import API from "../utilities/api"; // Ensure the correct path

export default function Doctors() {
    const [doctorData, setDoctorData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const res = await API.get("/user");
                setDoctorData(res.data.data);
            } catch (err) {
                console.error("Error fetching doctors:", err);
            }
        };

        fetchDoctors();
    }, []);

    const handleClick = (uuid) => {
        router.push(`/profile/${uuid}`);
    };

    return (
        <div className="doctors w-full md:pb-20">
            <div className="lg:max-w-6xl lg:m-auto w-full">
                {/* Section Heading */}
                <div className="depertment-head text-center pt-20 md:pt-0 px-4 mb-5 lg:mb-10">
                    <h3 className="text-blue-600 text-lg font-semibold tracking-wide uppercase mb-3">
                        Our Doctors
                    </h3>
                    <h2 className="font-header-font md:text-3xl w-full font-semibold lg:m-auto">
                        Providing Medical Care For The Sickest In Our Community.
                    </h2>
                </div>

                {/* Doctors List */}
                <div
                    className="lg:flex lg:justify-between lg:items-center lg:gap-8 p-5 lg:p-0 space-y-10 lg:space-y-0"
                    id="showUsers"
                >
                    {doctorData.slice(0, 4).map((each) => (
                        <div
                            key={each.uuid}
                            onClick={() => handleClick(each.uuid)}
                            className="card bg-base-100 hover:bg-base-200 w-full h-96 drop-shadow-xl cursor-pointer"
                        >
                            <figure className="px-6 pt-5">
                                <Image
                                    src={
                                        each?.portfolio?.profile_image ||
                                        "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
                                    }
                                    alt="Doctor"
                                    width={300}
                                    height={300}
                                    className="rounded-xl w-full h-full object-cover"
                                    priority
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{each.name}</h2>
                                <p>Interventional Cardiology</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
