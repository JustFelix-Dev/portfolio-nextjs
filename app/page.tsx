'use client'

import { motion } from "framer-motion";
import BrushStrokeHighlight from "./components/BrushStrokeHighlight";
import BouncyButton from "./components/BouncyButton";

export default function Home() {
  return (
    <div className="relative">
     <header className="p-6 shadow-sm">
      <motion.span className="flex items-center gap-1">
        <span className="text-xl font-bold text-[#0d0c22]">JustFelix</span> <svg  width={30} height={30} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:3,repeat:Infinity,repeatType:'mirror',ease:'easeInOut'}}  strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"></motion.path>
         </svg>
         </motion.span>
     </header>
     <main style={{minHeight:"calc(100vh - 78px)"}} className="border flex flex-col items-center justify-between py-16">
       <div className="flex flex-col gap-12">
        <div className="badge flex py-1 px-3 gap-2 border border-[#adadb3] self-center items-center rounded-sm">
          <span className="pulsating-dot"></span>
          <span>Available for projects</span>
        </div>
        <section className=" text-[#0d0c22]">
        <div className="text-center text-6xl max-w-[30ch] font-bold">
          <span>Crafting intelligent solutions, solving real problems </span>
        <BrushStrokeHighlight>
        quickly and elegantly.
        </BrushStrokeHighlight>
        </div>
        <p className="mt-6 text-center text-xl font-semibold"> Let&apos;s build something extraordinary together!</p>
        </section>
       </div>
       <BouncyButton/>
     </main>
     </div>
  );
}
