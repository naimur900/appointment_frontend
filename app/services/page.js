import BreadCrumb from '../../components/BreadCrumb'
import ServicesContent from '../../components/ServicesContent'
import React from 'react'

export default function Services() {
    return (
        <>
            <BreadCrumb routeName="Services"></BreadCrumb>
            <section className='mb-20'>
                <ServicesContent></ServicesContent>
            </section>
        </>
    )
}
