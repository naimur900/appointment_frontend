import React from 'react'
import Image from 'next/image'; // Import Image component
import { Typewriter } from 'react-simple-typewriter';

export default function Appointment() {
    const handleType = (count) => {
        // Access word count number
        // console.log(count);
    };

    const handleDone = () => {
        console.log('Done after 5 loops!');
    };

    return (
        <div className="mt-10 z-0 w-full bg-appointment-bg bg-no-repeat bg-cover bg-center py-20 lg:py-100 relative :absolute after:w-full after:h-full after:bg-black after:bg-opacity-50 after:top-0 after:left-0 bg-fixed transition-backgorund ease-in-out delay-200">
            <div className="lg:max-w-6xl lg:m-auto w-full relative z-10">
                <div className="lg:flex lg:justify-between">
                    <div className="w-full lg:w-2/5">
                        <div className="working-hours flex flex-col justify-center items-center bg-blue-600 w-full h-full text-center p-10 space-y-10">
                            {/* Use Image component for better optimization in Next.js */}
                            <Image
                                src="/appointment.png" // Adjust the image path accordingly in public folder
                                alt="appointment"
                                width={500} // Set appropriate width
                                height={500} // Set appropriate height
                            />

                            <h2 className="font-header-font text-xl md:text-3xl w-full h-20 pt-5 font-semibold capitalize text-white">
                                <Typewriter
                                    words={['Make Appointment', 'Take Care Of Your Healthy Life']}
                                    loop={0}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    onLoopDone={handleDone}
                                    onType={handleType}
                                />
                            </h2>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/5">
                        <div className="appoinment-form bg-white bg-opacity-90 p-10">
                            <form action="#" method="post">
                                <div className="mb-5">
                                    <label htmlFor="name" className="mb-3 block text-base font-medium">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-blue-600 focus:shadow-md transition-all ease-in-out delay-300"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="phone" className="mb-3 block text-base font-medium">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-blue-600 focus:shadow-md transition-all ease-in-out delay-300"
                                    />
                                </div>

                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label htmlFor="department" className="mb-3 block text-base font-medium">
                                                Department
                                            </label>
                                            <select
                                                name="department"
                                                id="department"
                                                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-blue-600 focus:shadow-md transition-all ease-in-out delay-300"
                                            >
                                                <option defaultValue="0">Select One</option>
                                                <option value="1">Medicine</option>
                                                <option value="2">Orthopedics</option>
                                                <option value="3">Cardiology</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label htmlFor="services" className="mb-3 block text-base font-medium">
                                                Services
                                            </label>
                                            <select
                                                name="services"
                                                id="services"
                                                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-blue-600 focus:shadow-md transition-all ease-in-out delay-300"
                                            >
                                                <option defaultValue="0">Select One</option>
                                                <option value="1">Consultation</option>
                                                <option value="2">Diagnosis</option>
                                                <option value="3">Emergency</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label htmlFor="date" className="mb-3 block text-base font-medium">
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                name="date"
                                                id="date"
                                                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-blue-600 focus:shadow-md transition-all ease-in-out delay-300"
                                                defaultValue="2024-07-17"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label htmlFor="time" className="mb-3 block text-base font-medium">
                                                Time
                                            </label>
                                            <input
                                                type="time"
                                                name="time"
                                                id="time"
                                                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium outline-none focus:border-blue-600 focus:shadow-md transition-all ease-in-out delay-300"
                                                defaultValue="19:00"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button className="rounded-full z-[1] overflow-hidden border border-blue-600 text-blue-600 p-3 md:py-3 md:pl-8 md:pr-4 font-semibold transition-all ease delay-75 inline-block relative before:bg-blue-600 before:absolute before:top-1/2 before:left-0 before:-z-[1] before:opacity-0 before:w-0 before:h-full before:transform before:translate-x-0 before:-translate-y-1/2 before:transition-all before:ease-out before:delay-300 hover:before:w-full hover:before:opacity-100 hover:text-white w-full">
                                        Book Appointment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
