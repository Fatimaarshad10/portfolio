"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col  lg:flex-row px-4  sm:px-8 md:px-12 lg:px-20 xl:px-30">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/fatimaarshad.png" alt="fatima" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER  */}
        <div className="h-1/2  lg:h-full lg:w-1/2  flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">Full stack developer</h1>
          {/* DESC */}
          <p className="md:text-xl ">{`My name is Fatima Arshad. I began learning basic coding four years ago as a computer science student. Now, as a full-stack developer, I'm skilled at solving different problems to improve your projects. I concentrate on creating websites that work well, look good on any device, and are efficient for your business goals. `}</p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <a href="./portfolio">View My Work</a></button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              <a href="./contact">Contact Me</a></button>

          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
