"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Micheal Gough",
        description: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
        profession: "CEO at Google"
    },
    {
        id: 2,
        name: "Micheal Gough",
        description: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
        profession: "CEO at Google"
    },
    {
        id: 3,
        name: "Micheal Gough",
        description: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
        profession: "CEO at Google"
    },
    {
        id: 4,
        name: "Micheal Gough",
        description: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
        profession: "CEO at Google"
    }
];

export default function Testimonials() {
    return (
        <div className="testimonial w-full pb-20 lg:py-100">
            <div className="lg:max-w-6xl lg:m-auto w-full">
                <div className="depertment-head text-center mb-7 md:mb-14 md:mt-24">
                    <h3 className="text-blue-600 text-lg font-semibold tracking-wide uppercase mb-3">Testimonials</h3>
                    <h2 className="font-header-font md:text-4xl w-full lg:w-3/4 font-semibold lg:m-auto">Comments & Reviews</h2>
                </div>

                <div className="department-slider relative">
                    <div className="flex justify-between items-center gap-5 overflow-hidden">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="w-full">
                                        <div className="testimonial-item text-center">
                                            <svg className="h-12 mx-auto mb-3 fill-blue-600" viewBox="0 0 24 27" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                                            </svg>
                                            <p className="text-xl font-medium text-main-color">{testimonial.description}</p>
                                            <div className="flex items-center justify-center mt-6 space-x-3">
                                                <Image
                                                    className="w-6 h-6 rounded-full"
                                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                                                    alt="profile picture"
                                                    width={24}
                                                    height={24}
                                                />
                                                <div className="flex items-center divide-x-2 divide-sub-color">
                                                    <div className="pr-3 font-medium text-main-color">{testimonial.name}</div>
                                                    <div className="pl-3 text-sm font-light text-sub-color">{testimonial.profession}</div>
                                                </div>
                                            </div>
                                        </div>
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
