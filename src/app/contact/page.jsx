"use client"
import { useRef , useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser'

const ContactPage = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const text = "Say Hello"
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_KEY
      )
      .then(
        () => {
         setSuccess(true)
         form.current.reset()
        },
        (error) => {
          setError(true)
        },
      );
  };
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30 scroll-ms-0">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">

          <div>
            {text.split("").map((letter, index) => (
              < motion.span key={index} initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}>
                {letter}
              </motion.span>

            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}

        <form onSubmit={sendEmail} ref={form}className="h-1/2 lg:h-full lg:w-1/2 bg-gradient-to-b  rounded-xl text-xl flex flex-col gap-8
        justify-center p-24 ">
          <span>Dear Fatima Arshad</span>
          <input rows={6}  className=" bg-transparent border-b-2 border-b-black outline-none "
          name="user_message"/>
          <span>My mail address is:</span>
          <input type="text" className="bg-transparent border-b-2 border-b-black outline-none "
          name="user_email"/>

          <span>Regards</span>
          <button className="bg-black rounded font-semibold text-gray-600 p-4">Send</button>
          {success  && <span className="text-green-500 font-semibold">
            Your message has been sent successfully</span>}
            {error && <span  className="text-red-500 font-semibold">
              Something went wrong!</span>}
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage