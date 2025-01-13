'use client'
import React, { useEffect, useState } from 'react'
import { navbarItems } from '../assets/staticData';
import Image from 'next/image'
import Link from 'next/link'
import { IoClose, IoMail, IoMenu } from "react-icons/io5";
import logo from '../../../public/logo.webp'

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav className={`h-16 w-full bg-white transition-all duration-300 flex justify-between items-center px-5 lg:px-20 fixed top-0 z-30`}>
                <Link href="/" className='h-16 w-fit flex justify-center items-center cursor-pointer'>
                    <Image src={logo} height={529} width={1024} alt='logo' className='h-10 w-10 lg:h-20 lg:w-20 ' />
                    <h1 className='text-2xl text-[#6F381E]'>Danam</h1>
                </Link>
                <div className='h-16 w-fit justify-between items-center hidden md:flex gap-5'>
                    <ul className='flex justify-between items-center h-16 capitalize text-sm font-semibold'>
                        {
                            navbarItems.map((item) => (
                                <li key={item.name} className='h-16 px-3 flex justify-center items-center'>
                                    <Link href={item.url} className={`hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-green-500 text-sm lg:text-base text-black`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <a href='mailto:bishalprasad0210@gmail.com' className='hidden h-full w-fit md:flex justify-center items-center'>
                        <p className='bg-[#4E341C] text-white h-10 w-fit px-3 rounded-md flex justify-center items-center gap-2 capitalize text-sm font-semibold'>
                            <IoMail className='text-xl' />
                            mail us
                        </p>
                    </a>
                </div>
                <button className='bg-[#6F381E] block md:hidden rounded-md p-1' onClick={toggleSidebar}>
                    <IoMenu className='h-8 w-8 text-[#F2EAC1]' />
                </button>
            </nav>
            <aside
                className={`fixed top-0 right-0 h-full w-64 bg-[#F2EAC1] shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50 text-white`}
            >
                <div className="flex justify-between items-center h-16 px-5 border-b border-b-[#284e3f]">
                    <h2 className="text-xl font-semibold text-[#6F381E]">Danam</h2>
                    <button onClick={toggleSidebar} className="p-2 text-[#6F381E]">
                        <IoClose className="h-6 w-6" />
                    </button>
                </div>
                <ul className="flex flex-col px-5 mt-5 space-y-4 text-[#6F381E]">
                    {navbarItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.url}
                                className="text-base font-semibold capitalize w-full text-left"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <a
                    href="mailto:bishalprasad0210@gmail.com"
                    className="block mt-5 px-5"
                >
                    <p className="bg-[#4E341C] text-white h-10 w-full rounded-md flex justify-center items-center gap-2 capitalize text-sm font-semibold">
                        <IoMail className="text-xl" />
                        mail us
                    </p>
                </a>
            </aside>


            {isSidebarOpen && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-50 z-40'
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    )
}

export default Navbar
