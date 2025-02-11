import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Appointment theme nextjs",
    description: "Doctor booking application",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <header>
                    <NavBar></NavBar>
                </header>

                <main>
                    {children}
                </main>

                <footer>
                    <Footer></Footer>
                </footer>
            </body>
        </html>
    );
}
