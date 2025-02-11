'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import API from '@/utilities/api';
import BreadCrumb from '@/components/BreadCrumb';
import Image from 'next/image';
import { TiTick } from "react-icons/ti";

export default function Profile() {
    const params = useParams();
    const router = useRouter();
    const uuid = params?.uuid;
    const [doctorData, setDoctorData] = useState({});
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        user: uuid,
        appointment_date: "",
        organization: null,
        start_time: "",
        end_time: ""
    });

    const { name, email, additional_data, organization, portfolio } = doctorData;

    useEffect(() => {
        const docApi = async () => {
            try {
                const res = await API.get(`/user/${uuid}`);
                setDoctorData(res.data.data);
                // console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        if (uuid) {
            docApi();
        }
    }, [uuid]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        formData.organization = organization?.id;

        try {
            const res = await API.post("/appointment", formData);
            console.log(res);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <BreadCrumb routeName="Profile"></BreadCrumb>

            <div className="portfolios w-full md:pb-20 md:pt-32 p-5">
                <div className="w-full lg:max-w-6xl lg:m-auto">
                    <div className="lg:flex lg:justify-between lg:gap-7">
                        <div className="w-full lg:w-2/5">
                            <div
                                className="profile-card w-full max-w-sm bg-white border border-gray-200 rounded-lg drop-shadow-sh-sm">
                                <div className="flex flex-col">
                                    <Image className="w-full mb-3 shadow-lg" src={`${portfolio?.profile_image ? `${portfolio?.profile_image}` : "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="}`}
                                        alt="Dr. Rakibul Hasan (Apu)" width={1000} height={1000} priority
                                    />

                                    <div className="p-5">
                                        <h3 className="mb-1 text-2xl font-bold font-header-font text-blue-600">{name}</h3>
                                        <span className="text-sm text-gray-500 font-body-font">{email}</span>
                                        <h4 className="font-header-font text-lg font-semibold text-blue-600 mt-7 mb-3">
                                            Qualifications</h4>
                                        <hr className="border-dashed border-gray-300 mb-3" />
                                        <ul className="list-none space-y-3">
                                            <li>Master of Science</li>
                                            <li>University Limerick</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-4/5">
                            <div className="profile-cont p-4">
                                <div className="pro-about mb-8">
                                    <h1 className="text-xl font-header-font font-semibold text-blue-600 mb-7">About Me</h1>
                                    <p className="font-body-font text-base text-main-color">{portfolio?.bio}</p>
                                </div>

                                {/* <div className="pro-skill mb-8">
                                    <h3 className="font-header-font text-lg font-semibold text-blue-600 my-7">Experience</h3>
                                    <ul className="list-none grid grid-cols-1 md:grid-cols-2">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth="1.5" stroke="currentColor"
                                                className="size-6 inline-flex me-2 strocke-blue-600">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <span>Lorem ipsum dolor sit amet</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth="1.5" stroke="currentColor"
                                                className="size-6 inline-flex me-2 strocke-blue-600">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <span>Lorem ipsum dolor sit amet</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth="1.5" stroke="currentColor"
                                                className="size-6 inline-flex me-2 strocke-blue-600">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <span>Lorem ipsum dolor sit amet</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth="1.5" stroke="currentColor"
                                                className="size-6 inline-flex me-2 strocke-blue-600">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <span>Lorem ipsum dolor sit amet</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth="1.5" stroke="currentColor"
                                                className="size-6 inline-flex me-2 strocke-blue-600">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <span>Lorem ipsum dolor sit amet</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth="1.5" stroke="currentColor"
                                                className="size-6 inline-flex me-2 strocke-blue-600">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <span>Lorem ipsum dolor sit amet</span>
                                        </li>
                                    </ul>
                                </div> */}

                                <div className="appoinment-form">
                                    <h3 className="font-header-font text-lg font-semibold text-blue-600 mb-7">Appointment</h3>
                                    {/* form */}
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="mb-5">
                                            <label htmlFor="name"
                                                className="mb-3 block text-base font-medium text-main-color font-header-font">
                                                Full Name*
                                            </label>
                                            <input type="text" name="name" onChange={handleChange} id="name" placeholder="Full name" required
                                                className="font-body-font w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-main-color outline-none focus:border-blue-600 focus:shadow-md" />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="phone"
                                                className="mb-3 block text-base font-medium text-main-color font-header-font">
                                                Phone Number*
                                            </label>
                                            <input type="text" name="phone" onChange={handleChange} id="phone" placeholder="Enter your phone number"
                                                required className="font-body-font w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-main-color outline-none focus:border-blue-600 focus:shadow-md" />
                                        </div>

                                        <div className="-mx-3 flex flex-wrap">
                                            <div className="w-full px-3 sm:w-1/2">
                                                <div className="mb-5">
                                                    <label htmlFor="date"
                                                        className="mb-3 block text-base font-medium text-main-color font-header-font">
                                                        Date*
                                                    </label>
                                                    <input type="date" name="appointment_date" onChange={handleChange} id="date"
                                                        required className="font-body-font w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-main-color outline-none focus:border-blue-600 focus:shadow-md"
                                                        defaultValue="2024-07-17" />
                                                </div>
                                            </div>
                                            <div className="w-full px-3 sm:w-1/2">
                                                <div className="mb-5">
                                                    <label htmlFor="start-time"
                                                        className="mb-3 block text-base font-medium text-main-color font-header-font">
                                                        Start Time*
                                                    </label>
                                                    <input type="time" name="start_time" id="start-time" onChange={handleChange}
                                                        required className="font-body-font w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-main-color outline-none focus:border-blue-600 focus:shadow-md"
                                                        defaultValue="19:00" />
                                                </div>
                                            </div>
                                            <div className="w-full px-3 sm:w-1/2">
                                                <div className="mb-5">
                                                    <label htmlFor="end-time"
                                                        className="mb-3 block text-base font-medium text-main-color font-header-font">
                                                        End Time*
                                                    </label>
                                                    <input type="time" name="end_time" id="end-time" onChange={handleChange}
                                                        required className="font-body-font w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-main-color outline-none focus:border-blue-600 focus:shadow-md"
                                                        defaultValue="19:00" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-5 pt-3">
                                            <label
                                                className="mb-5 block text-base font-semibold text-main-color sm:text-xl font-header-font">
                                                Address Details
                                            </label>
                                            <div className="-mx-3 flex flex-wrap">
                                                <div className="w-full px-3 sm:w-1/2">
                                                    <div className="mb-5">
                                                        <input type="text" name="area" id="area" placeholder="Enter area"
                                                            className="font-body-font w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-main-color outline-none focus:border-blue-600 focus:shadow-md" />
                                                    </div>
                                                </div>
                                                <div className="w-full px-3 sm:w-1/2">
                                                    <div className="mb-5">
                                                        <input type="text" name="city" id="city" placeholder="Enter city"
                                                            className="font-body-font w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-main-color outline-none focus:border-blue-600 focus:shadow-md" />
                                                    </div>
                                                </div>
                                                <div className="w-full px-3 sm:w-1/2">
                                                    <div className="mb-5">
                                                        <input type="text" name="state" id="state" placeholder="Enter state"
                                                            className="font-body-font w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-main-color outline-none focus:border-blue-600 focus:shadow-md" />
                                                    </div>
                                                </div>
                                                <div className="w-full px-3 sm:w-1/2">
                                                    <div className="mb-5">
                                                        <input type="text" name="post-code" id="post-code"
                                                            placeholder="Post Code"
                                                            className="font-body-font w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-main-color outline-none focus:border-blue-600 focus:shadow-md" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <button type='submit' onClick={() => document.getElementById('my_modal_5').showModal()}
                                                className="rounded-full z-[1] overflow-hidden border border-blue-600 text-blue-600 p-3 md:py-3 md:pl-8 md:pr-4 font-semibold transition-all ease delay-75 inline-block relative before:bg-blue-600 before:absolute before:top-1/2 before:left-0 before:-z-[1] before:opacity-0 before:w-0 before:h-full before:transform before:translate-x-0 before:-translate-y-1/2 before:transition-all before:ease-out before:delay-300 hover:before:w-full hover:before:opacity-100 hover:text-white w-full">
                                                Booking
                                            </button>
                                        </div>
                                    </form>

                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-xl flex items-center justify-center"><TiTick className='text-green-500 text-4xl mb-1' /> Success!</h3>
                                            <p className="py-4 text-center" suppressHydrationWarning>Dear {formData.name}, you have successfully booked your appointment on {formData.appointment_date}.</p>
                                            <div className="modal-action">
                                                {/* <form method="dialog"> */}
                                                {/* if there is a button in form, it will close the modal */}
                                                {/* </form> */}
                                                <button onClick={() => router.push("/")} className="text-center rounded-md overflow-hidden border border-blue-600 text-blue-600 p-2 md:py-2 md:px-8 font-semibold transition-all ease delay-75 inline-block relative before:bg-blue-600 before:absolute before:top-1/2 before:left-0 before:-z-[1] before:opacity-0 before:w-0 before:h-full before:transform before:translate-x-0 before:-translate-y-1/2 before:transition-all before:ease-out before:delay-300 hover:before:w-full hover:before:opacity-100 hover:text-white mx-auto">Go Home</button>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
