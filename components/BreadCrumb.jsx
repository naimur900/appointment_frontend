import React from 'react'

export default function BreadCrumb({ routeName }) {
    return (
        <div className="breadcrumb bg-hospital-bg bg-no-repeat bg-cover bg-fixed w-full bg-blue-50 h-auto py-28 px-11 md:p-28 lg:pt-200 lg:pb-28 z-0 relative after:absolute">
            <div className="lg:max-w-7xl lg:m-auto w-full">
                <h2
                    className="text-3xl text-center font-bold xl:text-6xl lg:text-5xl mb-7 md:font-extrabold text-main-color capitalize md:mb-9 font-header-font">
                    {routeName}
                </h2>

                <nav className="flex justify-center" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <a href="#"
                                className="inline-flex items-center font-body-font text-sm font-medium text-main-color hover:text-accent-color">
                                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </a>
                        </li>

                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-main-color mx-1" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ms-1 text-sm font-medium text-main-color md:ms-2 font-body-font">{routeName}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}
