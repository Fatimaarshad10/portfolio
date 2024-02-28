"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      {/* CONTAINER */}
      <div className=" ">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-30 flex flex-col gap-24 md:gap-32 lg:gap-38 xl:gap-39">
          {/* BIOGRAPHY CONTAINER */}
          <div className=" flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}

            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}

            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis fugit nihil explicabo, et maiores id labore cumque facere quo ipsam modi velit omnis! Consequuntur laboriosam beatae dolorum nostrum dolore?</p>
            {/* BIOGRAPHY QUOTE */}

            <span className="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            {/* BIOGRAPHY SIGN */}
            <Image src='/svg.svg' alt="svg" width={50} height={50} className="self-end" />
            <div className=""></div>
            {/* BIOGRAPHY SVG */}

          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILLS TITLE */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* SKILLS LIST */}
            <div className="flex flex-wrap gap-4">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>
            </div>
            {/* SKILLS SCROLL SVG */}
            <div className=""></div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className=" flex flex-col gap-12 justify-center pb-48">
            {/* EXPERIENCE TITLE */}
            <h1 className="font-bold text-2xl">EXPERIENCE </h1>
            {/* EXPERIENCE LIST */}
            <div className="">
              {/* EXPERIENCE LIST ITEM */}
              <div className="">
                {/* LEFT */}
                <div className="">
                {/* JOB TITLE */}
<div className="">Backend Developer</div>
                {/* JOB DESC */}
<div className="">My current employment. Way better than the position before!</div>
                {/* JOB DATE */}
<div className="">2023 - Present</div>
                {/* JOB COMPANY */}
<div className="">NAXTECH</div>
                </div>

                {/* CENTER */}
                <div className="">
              {/* LINE */}
              <div className="">
                {/* LINE CIRCLE */}
              </div>
                </div>
                {/* RIGHT */}
<div className=""></div>
              </div>
                {/* EXPERIENCE LIST ITEM */}
                <div className="">
                {/* LEFT */}
                <div className=""></div>
                {/* CENTER */}
                <div className="">
              {/* LINE */}
              <div className="">
                {/* LINE CIRCLE */}
              </div>
                </div>
                {/* RIGHT */}
                <div className="">
                {/* JOB TITLE */}
<div className="">Backend Developer</div>
                {/* JOB DESC */}
<div className="">My current employment. Way better than the position before!</div>
                {/* JOB DATE */}
<div className="">2023 - Present</div>
                {/* JOB COMPANY */}
<div className="">NAXTECH</div>
                </div>
              </div>
                {/* EXPERIENCE LIST ITEM */}
                <div className="">
                {/* LEFT */}
                <div className="">
                {/* JOB TITLE */}
<div className="">Backend Developer</div>
                {/* JOB DESC */}
<div className="">My current employment. Way better than the position before!</div>
                {/* JOB DATE */}
<div className="">2023 - Present</div>
                {/* JOB COMPANY */}
<div className="">NAXTECH</div>
                </div>

                {/* CENTER */}
                <div className="">
              {/* LINE */}
              <div className="">
                {/* LINE CIRCLE */}
              </div>
                </div>
                {/* RIGHT */}
<div className=""></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden"></div>

      </div>
    </motion.div>
  )
}

export default AboutPage