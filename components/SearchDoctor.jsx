"use client"
import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { GiMicroscope } from "react-icons/gi";
import { FaHeartPulse } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";
import { FaBrain } from "react-icons/fa6";
import { GiKidneys } from "react-icons/gi";
import { MdBabyChangingStation } from "react-icons/md";
import { GiLeg } from "react-icons/gi";
import { GiMedicines } from "react-icons/gi";
import { FaNutritionix } from "react-icons/fa";
import Modal from './Modal';
import API from '../utilities/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SearchDoctor() {
    const [specialty, setSpecialty] = useState('');
    const [specialtyData, setSpecialtyData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get(`/user-search?query=${searchQuery}`);
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching search results', error);
            }
        };
        fetchData();
    }, [searchQuery]);

    useEffect(() => {
        const fetchSpecialties = async () => {
            try {
                const res = await API.get("/specialties");
                const data = res.data.data[0].category_items;
                const updatedData = data.map(item => ({
                    ...item,
                    icon: getIconForSpecialty(item.name)
                }));
                setSpecialtyData(updatedData);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchSpecialties();
    }, [])
    const getIconForSpecialty = (name) => {
        const icons = {
            "Internal medicine": <GiMedicines className='mx-auto mb-1 text-2xl' />,
            Pediatrics: <MdBabyChangingStation className='mx-auto mb-1 text-2xl' />,
            "Emergency medicine": <GiMicroscope className='mx-auto mb-1 text-2xl' />,
            Surgery: <MdBloodtype className='mx-auto mb-1 text-2xl' />,
            Psychiatry: <FaBrain className='mx-auto mb-1 text-2xl' />,
            "Anesthesia machines": <GiKidneys className='mx-auto mb-1 text-2xl' />
        };
        return icons[name] || "?";
    }

    const handleSpecialtyChange = (text) => {
        // console.log(e.target.innerText);
        setSpecialty(text);
    };

    const handleSearch = () => {
        // console.log(`Searching for "${searchQuery}" in "${specialty}"`);
    };

    const handleClick = (uuid) => {
        // console.log(uuid);
        router.push(`/profile/${uuid}`);
    }

    // typewritter
    const handleType = (count) => {
        // access word count number
        // console.log(count)
    };
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    };

    return (
        <>
            <div className="hero md:min-h-screen h-[400px] bg-hospital5-bg md:bg-fixed">
                {/* overlay div */}
                <div className="hero-overlay bg-opacity-50"></div>

                {/* content div */}
                <div className='w-full xl:px-72 md:px-12'>
                    {/* text section */}
                    <div className='text-center text-white md:mb-20 mb-7 mt-14'>
                        <h1 className='md:text-7xl text-3xl font-semibold mb-2 md:mb-5'>Search Doctors</h1>
                        <h2 className="font-header-font md:text-3xl w-full font-semibold">
                            <Typewriter
                                words={['Book An Appointment']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </h2>
                    </div>

                    {/* Search Section */}
                    <div className="flex flex-col sm:flex-row gap-2 px-4">
                        {/* specialty input */}
                        <div className="form-control w-full sm:w-[200px]">
                            <input
                                className="input input-bordered"
                                placeholder='Select Specialty'
                                defaultValue={specialty}
                                onChange={(e) => setSpecialty(e.target.value)}
                                onClick={() => document.getElementById('specialty_modal').showModal()}
                            >
                            </input>

                            {/* specialty modal */}
                            <Modal
                                id="specialty_modal"
                                specialties={specialtyData}
                                handleSpecialtyChange={handleSpecialtyChange}
                            ></Modal>
                        </div>

                        {/* Search Input and Button */}
                        <div className="flex-1 flex flex-col md:flex-row gap-2">
                            <input
                                type="text"
                                placeholder="Search doctor by name"
                                className="input input-bordered w-full text-sm md:text-base"
                                defaultValue={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                            <button
                                className="rounded-lg overflow-hidden bg-blue-600 hover:bg-blue-600 text-white hover:text-black px-4 font-semibold flex items-center md:justify-between gap-2 btn border-none"
                                onClick={() => handleSearch(searchQuery)}
                            >
                                <Link href="/find-doctor" className='flex items-center gap-2'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="w-5 h-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <span className="">Search</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* search suggestions div */}
            <div className={`${searchQuery && "absolute z-10 max-h-96 overflow-y-scroll bg-white rounded-md md:w-[805px] w-72 p-1 top-[360px] mx-4 md:mx-0 md:top-[575px] md:left-[510px]"}`}>
                {
                    searchQuery && data.length > 0 ?
                        (data.map(doctor =>
                            <div key={doctor.uuid} onClick={() => handleClick(doctor.uuid)} className='bg-white cursor-pointer hover:bg-slate-100 grid md:grid-cols-4 gap-8 p-5 rounded-lg shadow-lg mb-1'>
                                <div className=''>
                                    {
                                        <img
                                            src={doctor?.portfolio?.profile_image ? doctor?.portfolio?.profile_image : "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="}
                                            className="h-28 w-28 rounded-lg"
                                        />
                                    }
                                </div>

                                <div className=''>
                                    <h2>{doctor.name}</h2>
                                    <h2>{doctor.email}</h2>
                                    <h2>{doctor?.organization?.organization_type?.name}</h2>
                                </div>

                                <div className=''>
                                    <h2>{doctor?.portfolio?.address}</h2>
                                    <h2>{"call"}</h2>
                                    <h2>{"available at"}</h2>
                                </div>

                                <div className='space-y-2'>
                                    <h2>{"pricing"}</h2>
                                    <h2>{"view profile"}</h2>
                                    {/* {<button onClick={() => handleClick(doctor.uuid)} className="btn btn-sm btn-success text-white">
                                    <AiFillThunderbolt />
                                    Instant Consult
                                </button>} */}
                                </div>
                            </div>)
                        ) : <div className={`${searchQuery ? "block" : "hidden"} text-center text-red-500 font-semibold text-sm`}>No doctors found</div>
                }
            </div>
        </>
    )
}
