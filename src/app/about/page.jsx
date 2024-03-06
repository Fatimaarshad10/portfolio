"use client"
import { motion } from "framer-motion";
import Extra from "../../components/Image";
import './style.css'
const AboutPage = () => {
  
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      {/* CONTAINER */}
      <div className="h-full overflow-y-auto placeholder:lg-flex ">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-30 flex flex-col gap-24 md:gap-32 lg:gap-38 xl:gap-39 ">
          <div className="flex  flex-row gap-40">
            <div className="flex flex-col gap-12 justify-center">
              <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
              <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Adipisci quis fugit nihil explicabo, et maiores id <br />labore cumque facere quo ipsam modi<br /></p>
              <span className="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <Extra/>
            {/* <Image src='/laptop.jpg' alt="svg" width={500} height={200} className="hidden lg:block rounded"/> */}
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
 
  </div>
  {/* EXPERIENCE CONTAINER */}
  <div className=" flex flex-col gap-12 justify-center pb-48">
    {/* EXPERIENCE TITLE */}
    <h1 className="font-bold text-2xl">EXPERIENCE </h1>
    {/* EXPERIENCE LIST */}
    <div className="">
      {/* EXPERIENCE LIST ITEM */}
      <div className="flex justify-between h-48">
        {/* LEFT */}
        <div className="w-1/3 ">
          {/* JOB TITLE */}
          <div className="p-3 bg-white font-semibold rounded-b-lg rounded-s-lg">Backend Developer</div>
          {/* JOB DESC */}
          <div className="p-3 text-sm italic">My current employment. Way better than the position before!</div>
          {/* JOB DATE */}
          <div className="p-3 text-black text-sm font-semibold">2023 - Present</div>
          {/* JOB COMPANY */}
          <div className="p-1 bg-white rounded  text-sm font-semibold w-fit">NAXTECH</div>
        </div>

        {/* CENTER */}
        <div className="w-1/6">
          {/* LINE */}
          <div className="w-1 h-full bg-black rounded relative">
            {/* LINE CIRCLE */}
            <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2"></div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-1/3"></div>
      </div>
      {/* EXPERIENCE LIST ITEM */}
      <div className="flex justify-between h-48">
        {/* LEFT */}
        <div className="w-1/3 ">
        </div>
        {/* CENTER */}
        <div className="w-1/6">
          {/* LINE */}
          <div className="w-1 h-full bg-black rounded relative">
            {/* LINE CIRCLE */}
            <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2"></div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-1/3 ">
          {/* JOB TITLE */}
          <div className="p-3 bg-white font-semibold rounded-b-lg rounded-s-lg">Backend Developer</div>
          {/* JOB DESC */}
          <div className="p-3 text-sm italic">My current employment. Way better than the position before!</div>
          {/* JOB DATE */}
          <div className="p-3 text-black  text-sm font-semibold">2023 - Present</div>
          {/* JOB COMPANY */}
          <div className="p-1 bg-white rounded  text-sm font-semibold w-fit">NAXTECH</div>
        </div>
      </div>
      <div className="flex justify-between h-48 ">
        {/* LEFT */}
        <div className="w-1/3 ">
           {/* JOB TITLE */}
           <div className="p-3 bg-white font-semibold rounded-b-lg rounded-s-lg">Backend Developer</div>
          {/* JOB DESC */}
          <div className="p-3 text-sm italic">My current employment. Way better than the position before!</div>
          {/* JOB DATE */}
          <div className="p-3 text-black  text-sm font-semibold">2023 - Present</div>
          {/* JOB COMPANY */}
          <div className="p-1 bg-white rounded  text-sm font-semibold w-fit">NAXTECH</div>
        </div>
        {/* CENTER */}
        <div className="w-1/6">
          {/* LINE */}
          <div className="w-1 h-full bg-black rounded relative">
            {/* LINE CIRCLE */}
            <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2"></div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-1/3 ">
         
        </div>
      </div>
    </div>
  </div>


        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage