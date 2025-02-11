import BreadCrumb from '../../components/BreadCrumb'
import React from 'react'
import AboutContent from './AboutContent'
import Departments from '../../components/Departments'

export default function About() {
    return (
        <>
            <BreadCrumb routeName="About"></BreadCrumb>
            <AboutContent></AboutContent>
            <Departments></Departments>
        </>
    )
}
