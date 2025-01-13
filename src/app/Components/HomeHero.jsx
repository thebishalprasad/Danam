'use client';
import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";

import Link from 'next/link';

const HomeHero = () => {

    return (
        <div className="h-auto w-full bg-[url('/herobg.png')] lg:bg-cover bg-center py-10 flex flex-col items-center justify-center lg:justify-center gap-5 lg:gap-7 px-5 lg:px-0  backdrop-brightness-75">
            <div className="flex flex-col w-full lg:w-[50vw]">
                <h1 className="w-full text-3xl lg:text-4xl xl:text-5xl font-bold capitalize text-[#4E341C] hero_h1 text-center">DonateEase </h1>
                <span className="w-full text-2xl lg:text-3xl xl:text-4xl font-bold capitalize text-[#7a522c] hero_h1 text-center">&</span>
                <h1 className="w-full text-3xl lg:text-4xl xl:text-5xl font-bold capitalize text-[#4E341C] hero_h1 text-center">GiftForward</h1>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-[#614123] text-center hero_p lg:w-[50vw]">Empowering students to share knowledge! Donate your old books and help others access valuable resources. Together, let's build a community of learning and giving.</p>
            <span className="w-full flex gap-3 justify-center">
                <Link href='#getInTouch' className="capitalize text-[#FAFAFA] bg-[#6F381E] hover:bg-[#6f381ee3] h-10 lg:h-12 w-36 lg:w-48 font-medium flex items-center justify-center gap-2 rounded-md text-sm lg:text-lg shadow-lg hero_btn">
                    KindDrop
                    <BsArrowUpRight className="text-lg lg:text-xl" />
                </Link>
            </span>
        </div>
    )
}

export default HomeHero