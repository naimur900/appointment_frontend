"use client"
import Appointment from "../components/Appointment";
import Doctors from "../components/Doctors";
import Hero from "../components/Hero";
import SearchDoctor from "../components/SearchDoctor";
import ServicesContent from "../components/ServicesContent";
import Testimonials from "../components/Testimonials";

export default function Home() {
    return (
        <>
            <SearchDoctor></SearchDoctor>
            <Hero></Hero>
            <Doctors></Doctors>
            <Appointment></Appointment>
            {/* <HomeAbout></HomeAbout> */}
            {/* <Departments></Departments> */}
            {/* <Services></Services> */}
            <ServicesContent></ServicesContent>
            <Testimonials></Testimonials>
        </>
    );
}
