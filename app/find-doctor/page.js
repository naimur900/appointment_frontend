'use client';
import { useEffect, useRef, useState } from 'react';
import API from '@/utilities/api';
import { useRouter } from 'next/navigation';
import { AiFillThunderbolt } from "react-icons/ai";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Link from 'next/link';
import { FaBrain, FaHeartPulse, FaNutritionix } from 'react-icons/fa6';
import { GiKidneys, GiLeg, GiMedicines, GiMicroscope } from 'react-icons/gi';
import { MdBabyChangingStation, MdBloodtype } from 'react-icons/md';
import Image from 'next/image';

export default function FindDoctor() {
    const [specialty, setSpecialty] = useState('');
    const [specialtyData, setSpecialtyData] = useState([]);
    const [equipmentData, setEquipmentData] = useState([]);
    const [qualificationData, setQualificationData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [data, setData] = useState([]);
    const isFetching = useRef(false);
    const router = useRouter();

    // console.log(specialty);

    const fetchDoctors = async () => {
        if (!hasMore || loading || isFetching.current) return;
        isFetching.current = true;
        setLoading(true);

        try {
            const res = await API.get(`/user?page=${page}`);
            // console.log(res.data.data);
            if (res?.data?.data?.length === 0) {
                setHasMore(false);
            } else {
                setData((prevData) => [...prevData, ...res?.data?.data]);
            }
        } catch (err) {
            console.error('Error fetching doctors:', err);
        } finally {
            setLoading(false);
            isFetching.current = false;
        }
    };
    const fetchSpecialties = async () => {
        try {
            const res = await API.get("/specialties");
            const data = res.data.data[0].category_items;
            // console.log(data);
            const updatedData = data.map(item => ({
                ...item,
                icon: getIconForSpecialty(item.name)
            }));
            console.log(updatedData);
            setSpecialtyData(updatedData);
        } catch (err) {
            console.error('Error fetching doctors:', err);
        }
    };
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
    const fetchEquipments = async () => {
        try {
            const res = await API.get("/equipments");
            // console.log(res.data.data[0].category_items);
            setEquipmentData(res.data.data[0].category_items);
        } catch (err) {
            console.error('Error fetching doctors:', err);
        }
    };
    const fetchQualifications = async () => {
        try {
            const res = await API.get("/qualifications");
            setQualificationData(res.data.data[0].category_items);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchDoctors();
        fetchSpecialties();
        fetchEquipments();
        fetchQualifications();
    }, [page]);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 400 && hasMore && !loading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, hasMore]);

    const handleSpecialtyChange = (text) => {
        setSpecialty(text);
    };

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await API.get(`/user-search?query=${searchQuery}`);
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching search results', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='px-2 relative'>
            {/* search bar */}
            <div className="flex flex-col sm:flex-row gap-2 md:max-w-6xl mx-auto md:pt-40 pt-20">
                <div className="form-control w-full sm:w-[200px]">
                    <input
                        className="input input-bordered"
                        placeholder='Select Specialty'
                        // defaultValue={specialty}
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                        onClick={() => document.getElementById('my_modal_5').showModal()}
                    >
                    </input>

                    {/* modal */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <div className="modal-action justify-center">
                                <form method="dialog">
                                    <div className="form-control w-full mb-8">
                                        <h1 className='text-center mb-10 font-semibold text-2xl'>Select Specialty</h1>
                                        <ul className='grid grid-cols-3 gap-6'>
                                            {
                                                specialtyData.map(each =>
                                                    <button key={each.id} onClick={() => handleSpecialtyChange(each.name)} className='hover:text-blue-600 cursor-pointer w-fit mx-auto rounded-2xl text-center'
                                                    >
                                                        {each.icon} {each.name}
                                                    </button>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    {/* if there is a button in form, it will close the modal */}
                                    {/* <button className="btn">Close</button> */}
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>

                {/* Search Input and Button */}
                <div className="flex-1 flex flex-col md:flex-row gap-2">
                    <input
                        type="text"
                        placeholder="Search doctor by name"
                        className="input input-bordered w-full text-sm md:text-base"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <button
                        className="rounded-lg overflow-hidden bg-blue-600 hover:bg-blue-600 text-white hover:text-black px-4 font-semibold flex items-center md:justify-between gap-2 btn border-none"
                        onClick={handleSearch}
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

            {/* filter & content div */}
            <div className='md:py-20 py-10 md:max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10'>
                <div className='border rounded-xl px-5 mt-12 py-10 md:w-1/4 h-fit space-y-6 md:sticky top-20'>
                    <div>
                        <select defaultValue="Select By Qualification" className="select select-info w-full max-w-xs">
                            <option disabled>Select By Qualification</option>
                            {
                                qualificationData.map(each =>
                                    <option key={each.id}>{each.name}</option>
                                )
                            }
                        </select>
                    </div>

                    {/* <div>
                        <select defaultValue="Select Equipment" className="select select-info w-full max-w-xs">
                            <option disabled>Select Equipment</option>
                            {
                                equipmentData.map(each =>
                                    <option key={each.id}>{each.name}</option>
                                )
                            }
                        </select>
                    </div> */}

                    {/* <div>
                        <select defaultValue="Select Location" className="select select-info w-full max-w-xs">
                            <option disabled>Select Location</option>
                            <option>Dhanmondi</option>
                            <option>Mirpur</option>
                            <option>Uttara</option>
                        </select>
                    </div> */}

                    <div className='space-y-2'>
                        <button className="btn btn-success text-white w-full">Apply Filter</button>
                        <button className="btn btn-warning w-full">Clear Filter</button>
                    </div>
                </div>

                <div className='md:w-3/4'>
                    <h2 className='text-center md:w-1/4 ml-auto text-sm font-semibold py-1 rounded-md bg-gradient-to-tr from-blue-400 to-purple-500 mb-4 text-white sticky top-0'>{data.length} Doctors Found</h2>
                    {
                        data.map(doctor =>
                            <div key={doctor.uuid} className='grid md:grid-cols-4 gap-8 p-5 rounded-lg shadow-lg mb-8'>
                                <div className=''>
                                    {
                                        loading ? <Skeleton count={4} /> : <Image alt='doctor' width={100} height={100} priority
                                            src={doctor?.portfolio?.profile_image ? doctor?.portfolio?.profile_image : "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="}
                                            className="h-28 w-28 rounded-lg" />
                                    }
                                    {/* <h2 className='mt-4'>{loading ? <Skeleton /> : "10+ years experience"}</h2> */}
                                </div>

                                <div className='text-sm space-y-2'>
                                    <h2>{loading ? <Skeleton /> : doctor.name}</h2>
                                    <h2>{loading ? <Skeleton /> : doctor.email}</h2>
                                    <h2>{loading ? <Skeleton /> : doctor?.additional_data[1]?.org_category_item[0]?.name}</h2>
                                    <h2>{loading ? <Skeleton /> : doctor?.organization?.organization_type?.name}</h2>
                                </div>

                                <div className='text-sm space-y-2'>
                                    <h2>{loading ? <Skeleton /> : doctor?.portfolio?.address}</h2>
                                    <h2>{loading ? <Skeleton /> : doctor?.additional_data[0]?.org_category_item[0]?.name}</h2>
                                    <h2>{loading ? <Skeleton /> : doctor?.additional_data[2]?.org_category_item[0]?.name}</h2>
                                    {/* <h2>{loading ? <Skeleton /> : "available at"}</h2> */}
                                </div>

                                <div className='space-y-2'>
                                    {/* <h2>{loading ? <Skeleton /> : "pricing"}</h2> */}
                                    {/* <h2>{loading ? <Skeleton /> : "view profile"}</h2> */}
                                    {loading ? <Skeleton /> : <button onClick={() => router.push(`/profile/${doctor.uuid}`)} className="btn btn-sm btn-success text-white">
                                        <AiFillThunderbolt />
                                        Instant Consult
                                    </button>}
                                </div>
                            </div>
                        )
                    }

                    {loading && <Skeleton count={5} />}
                    {/* {loading && <h1 className='text-center'><span className="loading loading-bars loading-md text-blue-700"></span></h1>} */}
                    {!hasMore && <h1 className='text-center text-orange-500 font-semibold text-sm'>All Doctors Loaded</h1>}
                </div>
            </div>
        </div>
    )
}
