"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    color: "from-slate-200 to-stone-800",
    title: "Deep Turing AI",
    desc: "My main job was finding and fixing problems in frontend and backend how it looks and how it works. I really focused on getting rid of errors to make sure users have a smooth experience. By carefully fixing bugs, I made sure the website runs without any issues",
    image: "/deep.png",
    link: "https://deepturingai.com/"

  },
  {
    id: 2,
    color: "from-slate-200 to-stone-800",
    title: "HumidPeach website",
    desc: "HumidPeach is the original website that served as inspiration for a project I created for additional practice. In my version, I expanded the functionality by incorporating an admin page. This admin page empowers users to contribute their paintings and share ideas with others. Additionally, administrators have the authority to edit or remove painting details",
    image: "/humid.png",
    link: "https://github.com/Fatimaarshad10/mern-website-project"

  },
  // {
  //   id: 3,
  //   color: "from-slate-300 to-black",
  //   title: "React js Medium blog",
  //   desc: "loreme ajdjadjbda",
  //   image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   link: "https://www.pexels.com"

  // },


]
const PortfolioPage = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])
  return (
    <motion.div className="h-full  " initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-[600vh]" ref={ref} >
        <div className="w-screen  h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{x}}className="flex ">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-300"/>
          {data.map((data) => (
            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${data.color}`} key={data.id}>
              <div className="flex flex-col gap-8 text-white">
                <h1 className="text-xl font-bold md:text-4xl lg:text-6xl  xl-text-8xl">{data.title}</h1>
                {/* <div className="relative w-80 h-56  md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]"> */}
                  <Image src={data.image} alt="" width={300}
                    height={500} />
                {/* </div> */}
                <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">{data.desc}</p>
                <Link href={data.link} className="flex justify-end">
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                </Link>
              </div>
            </div>
          ))}
          </motion.div>
          
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-13 items-center justify-center text-center">
            <h1 className="text-6xl">Do you have a project?</h1>
            <div className="relative ">
              <motion.svg animate={{rotate : 360}} transition={{duration :8 , ease:"linear" , repeat:Infinity}}viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
                <defs>
                  <path id="circlePath" d="M 150, 150 m -60 , 0 a 60 ,60 0 0,1 120,0 a 60,60 0 0 , 1 -120 ,0"/>
                </defs>
                <text fill="#000">
                  <textPath xlinkHref="#circlePath" className="text-xl">
                    Full-stack Developer
                  </textPath>
                </text>
              </motion.svg>
              <Link href="/contact"className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto  bg-black text-white rounded-full
              flex items-center justify-center">Hire Me</Link>
            </div>
          </div>
    </motion.div>
  )
}

export default PortfolioPage