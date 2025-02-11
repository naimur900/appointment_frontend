'use client';
import { TbHeartbeat } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const hospitalDepartments = [
    { departmentName: "Cardiology", description: "Focuses on the diagnosis and treatment of heart and blood vessel disorders, including heart attacks and arrhythmias." },
    { departmentName: "Neurology", description: "Specializes in the treatment of diseases and disorders of the brain, spinal cord, and nervous system." },
    { departmentName: "Pediatrics", description: "Provides medical care for infants, children, and adolescents, addressing both routine and specialized healthcare needs." },
    { departmentName: "Orthopedics", description: "Deals with the prevention, diagnosis, and treatment of musculoskeletal issues, including bones, joints, and muscles." },
    { departmentName: "Oncology", description: "Specializes in the diagnosis and treatment of cancers, providing chemotherapy, radiation therapy, and support care." },
    { departmentName: "Radiology", description: "Uses imaging techniques such as X-rays, MRIs, and CT scans to diagnose and treat medical conditions." },
    { departmentName: "Gynecology", description: "Focuses on the health of the female reproductive system, including pregnancy, childbirth, and hormonal disorders." },
    { departmentName: "Emergency Medicine", description: "Provides urgent and critical care for patients with severe injuries, illnesses, and life-threatening conditions." }
];

export default function Departments() {
    return (
        <div className='md:my-20'>
            <div className="w-full lg:py-100 p-5 lg:p-0">
                <div className="w-full lg:max-w-6xl lg:m-auto">
                    <div className="text-center mb-14">
                        <h3 className="text-blue-600 text-lg font-semibold tracking-wide uppercase mb-7">Our Departments</h3>
                        <h2 className="font-header-font md:text-3xl w-full font-semibold lg:m-auto">
                            Providing Medical Care For The Sickest In Our Community.
                        </h2>
                    </div>

                    {/* Smaller Devices */}
                    <div className="md:hidden block relative">
                        <Swiper slidesPerView={1} spaceBetween={30} autoplay pagination={{ clickable: true }}
                            modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
                            {hospitalDepartments.map(({ departmentName, description }) => (
                                <SwiperSlide key={departmentName}>
                                    <div className="p-10 bg-blue-50 space-y-7 rounded-lg">
                                        <TbHeartbeat className='text-5xl' />
                                        <h4 className="text-3xl font-semibold text-blue-600 capitalize">{departmentName}</h4>
                                        <p className="h-32">{description}</p>
                                        <a href="#"
                                            className="rounded-md z-[1] overflow-hidden border border-blue-600 text-blue-600 p-2 md:py-2 md:pl-6 md:pr-4 transition-all ease delay-75 flex items-center w-36 relative before:bg-blue-600 before:absolute before:top-1/2 before:left-0 before:-z-[1] before:opacity-0 before:w-0 before:h-full before:transform before:translate-x-0 before:-translate-y-1/2 before:transition-all before:ease-out before:delay-300 hover:before:w-full hover:before:opacity-100 hover:text-white text-sm font-semibold">Read
                                            More <FaArrowRightLong className='ml-4' />
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Large Devices */}
                    <div className="hidden md:block relative">
                        <Swiper slidesPerView={2} spaceBetween={30} autoplay pagination={{ clickable: true }}
                            modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
                            {hospitalDepartments.map(({ departmentName, description }) => (
                                <SwiperSlide key={departmentName}>
                                    <div className="p-10 bg-blue-50 space-y-7 rounded-lg">
                                        <TbHeartbeat className='text-5xl' />
                                        <h4 className="text-3xl font-semibold text-blue-600 capitalize">{departmentName}</h4>
                                        <p className="h-20">{description}</p>
                                        <a href="#"
                                            className="rounded-md z-[1] overflow-hidden border border-blue-600 text-blue-600 p-2 md:py-2 md:pl-6 md:pr-4 transition-all ease delay-75 flex items-center w-36 relative before:bg-blue-600 before:absolute before:top-1/2 before:left-0 before:-z-[1] before:opacity-0 before:w-0 before:h-full before:transform before:translate-x-0 before:-translate-y-1/2 before:transition-all before:ease-out before:delay-300 hover:before:w-full hover:before:opacity-100 hover:text-white text-sm font-semibold">Read
                                            More <FaArrowRightLong className='ml-4' />
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
