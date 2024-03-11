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
            <div className="flex flex-col gap-12 justify-start">
              <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
              <p className="text-lg">
              In my area, no women were working as developers, so  <br></br>I took on a self-taught coding journey. Starting with  <br></br> HTML and CSS, I learned JavaScript, React.js, and Next.js. <br></br> I polished my styling skills using CSS frameworks like   <br></br>Bootstrap and Tailwind CSS. Transitioning to the backend,  <br></br>I mastered Node.js and Express.js, initially using MongoDB   <br></br>and later adding PostgreSQL through collaboration with   <br></br>fellow developers.
              <br></br>

I thrive on exploring new technologies by delving into   <br></br>documentation, adapting quickly to start working with them.  <br></br> Currently, I take pride in training over 200 web developers,  <br></br> contributing to a growing number of women in the field in my area.
                
                </p>
            </div>
            <Extra />
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILLS TITLE */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* SKILLS LIST */}
            <div className="flex flex-wrap gap-4">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                HtmlL5
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Css3
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JavaScript
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Bootstrap
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                TailwindCss
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Firebase
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Reactjs
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Nextjs
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Nodejs
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Expressjs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Postgresql
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Mongodb
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Sequelize
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                SocketIO
              </div>    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                JQuery
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
                  <div className="p-3 text-sm italic">I worked as a backend developer at NaxTech, where I gained a lot of experience with tools like Node.js and Sequelize. My job included making efficient APIs, handling databases, and working closely with the team. I also played a key role in testing applications and talking to clients from different countries to make sure our projects went smoothly.</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-black text-sm font-semibold">08/2023 to 02/2024</div>
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
                  <div className="p-3 bg-white font-semibold rounded-b-lg rounded-s-lg">Full Stack Trainer</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">As a full-stack developer,I've successfully trained nearly 200 students in my first batch,
                   with a special focus on empowering women in the field.I'm currently training the second batch. This program involves engaging activities, including creating small projects from beginner to professional levels and organizing coding competitions, providing a comprehensive learning experience for the participants.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-black  text-sm font-semibold">05/2023 - Present</div>
                  {/* JOB COMPANY */}
                  <div className="p-1 bg-white rounded  text-sm font-semibold w-fit">Saylani Institute - Faisalabad </div>
                </div>
              </div>
              <div className="flex justify-between h-48 ">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="p-3 bg-white font-semibold rounded-b-lg rounded-s-lg">Shopify Theme Builder</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">I specialize in building Shopify themes, creating websites that seamlessly integrate data from various clients. I manage everything from data entry to customizing components, ensuring each website meets the unique needs of different clients</div>
                  {/* JOB DATE */}
                  <div className="p-3 text-black  text-sm font-semibold">04/2023 - 06/2023</div>
                  {/* JOB COMPANY */}
                  <div className="p-1 bg-white rounded  text-sm font-semibold w-fit">Client</div>
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