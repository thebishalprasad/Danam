'use client'
import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from "next/image";
import logotext from "../../../public/logotext.png";

const HomeAbout = () => {
    return (
        <div className="bgGraphics h-fit w-full p-5 md:px-5 md:py-10 lg:py-20" id="about">
            <h2 className="text-2xl md:text-3xl lg:text-4xl capitalize text-center text-[#4F341D] font-bold mb-5">about danam</h2>
            <div className="h-fit w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-2 lg:py-5">
                <Image
                    src={logotext}
                    width={1043}
                    height={1043}
                    alt="danam image"
                    className="h-52 w-52 lg:h-[400px] lg:w-[400px] lg:ml-10"
                />
                <div className="flex flex-col items-center lg:items-start lg:justify-around h-full lg:col-span-2 lg:w-[90%] lg:px-10">
                    <div className="flex flex-col items-center lg:items-start">
                        <h2 className=" text-center font-extrabold text-xl lg:text-3xl text-[#b6753c]">Empowering Education & Community Sharing</h2>
                        <p className="text-justify text-[#4F341D] lg:text-lg font-medium mt-4">
                        At Danam, we believe in the power of sharing and community. This platform was created with a simple yet impactful vision: to enable students to share their old, unused books and resources with others who need them.
                        Education is a fundamental right, yet many students face challenges accessing the materials they need. By donating your gently used books, electronics, and study essentials, you&apos;re not just decluttering your space—you&apos;re creating opportunities for others to learn and grow.
                        Our purpose is to build a bridge of generosity where every small contribution sparks a chain of positive change. With Danam, we aim to foster a culture of sustainability and support, ensuring that no resource goes unused and every student has access to knowledge.
                        Together, let&apos;s make education more accessible, reduce waste, and inspire a community of giving.
                        </p>
                        <div className="h-fit w-full flex items-center justify-between md:justify-center lg:justify-start gap-2 md:gap-10 mt-2">
                            <span className="flex flex-col items-center justify-center gap-1 text-[#4F341D]">
                                <RiVerifiedBadgeFill className="text-2xl" />
                                <p className="text-sm font-medium">Sustainability</p>
                            </span>
                            <span className="flex flex-col items-center justify-center gap-1 text-[#4F341D]">
                                <RiVerifiedBadgeFill className="text-2xl" />
                                <p className="text-sm font-medium">Accessibility</p>
                            </span>
                            <span className="flex flex-col items-center justify-center gap-1 text-[#4F341D]">
                                <RiVerifiedBadgeFill className="text-2xl" />
                                <p className="text-sm font-medium">Community</p>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeAbout