'use client';
import Link from 'next/link'
import React from 'react'
import logotext from '../../../public/logotext.png';
import Image from 'next/image';
import { IoLocation, IoLogoInstagram, IoLogoLinkedin, IoMail } from 'react-icons/io5';
import { IoMdCall } from 'react-icons/io';
import { navbarItems } from '../assets/staticData';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='bg-[#E4C8A3] h-fit w-full py-5 px-5 lg:px-20'>
            <div className='h-fit w-full grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10'>
                <ul className='text-[#6F381E] h-fit w-full flex flex-col justify-center items-center lg:items-start gap-1 col-span-1'>
                    <li>
                        <Image src={logotext} alt='logo' height={500} width={1000} className='h-20 w-20' />
                    </li>
                    <li>
                        <p className='text-center md:text-start text-sm xl:text-base'>
                        Empowering communities by simplifying the process of donating used items like books,staitionery, and more. Join us in making a difference, one donation at a time.
                        </p>
                    </li>
                </ul>
                <div className='col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-10'>
                    <ul className='text-[#6F381E] h-fit w-full md:w-fit lg:w-full flex flex-col justify-center items-center md:items-start gap-1 justify-self-center'>
                        <li>
                            <h3 className='font-semibold text-xl xl:text-2xl capitalize'>quick link</h3>
                        </li>
                        {
                            navbarItems.map((quick) => (
                                <li key={quick.name}>
                                    <Link href={quick.url} className='hover:underline hover:underline-offset-4 text-sm xl:text-base capitalize'>{quick.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className='text-[#6F381E] h-fit w-full md:w-fit lg:w-full flex flex-col justify-center items-center md:items-start gap-1 justify-self-center'>
                        <li>
                            <h3 className='font-semibold text-xl xl:text-2xl capitalize'>contact details</h3>
                        </li>
                        <li>
                            <p className='text-sm xl:text-base  flex items-start gap-1 text-center md:text-start'>
                                <IoLocation className='text-2xl' />
                                Kolkata, India
                            </p>
                        </li>
                        <li>
                            <Link href='tel:+918961498714' className='hover:underline hover:underline-offset-4 text-sm xl:text-base flex items-center gap-1'>
                                <IoMdCall />
                                +91 8961498714
                            </Link>
                        </li>
                        <li>
                            <Link href='mailto:bishalprasad0210@gmail.com' className='hover:underline hover:underline-offset-4 text-sm xl:text-base flex items-center gap-1'>
                                <IoMail />
                                bishalprasad0210@gmail.com
                            </Link>
                        </li>
                    </ul>
                    <ul className='text-[#6F381E] h-fit w-full md:w-fit flex flex-col justify-center items-center md:items-start gap-1 justify-self-center'>
                        <li>
                            <h3 className='font-semibold text-xl xl:text-2xl capitalize'>follow us</h3>
                        </li>
                        <li>
                            <Link href='https://www.instagram.com/thebishalprasad/' target='_blank' className='hover:underline hover:underline-offset-4 text-sm xl:text-base flex items-center gap-2'>
                                <IoLogoInstagram />
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link href='https://www.linkedin.com/in/thebishalprasad' target='_blank' className='hover:underline hover:underline-offset-4 text-sm xl:text-base flex items-center gap-2'>
                                <IoLogoLinkedin />
                                LinkedIn
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='h-fit w-full pt-5'>
                <p className='text-[#6F381E] text-center text-sm font-medium'>Copyright © {currentYear} <span className='font-bold'>Danam Suhk</span> All Rights Reserved | Developed By: <Link href='https://bishalprasad.netlify.app/' className='underline underline-offset-4 font-bold'>Bishal Prasad</Link></p>
            </div>
        </footer>
    )
}

export default Footer