"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const Extra = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            <Image src='/laptop.jpg' alt="svg" width={500} height={200} className="hidden lg:block rounded shadow-lg"/>

    </motion.div>
  )
}

export default Extra