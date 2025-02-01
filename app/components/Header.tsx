'use client';

import { motion } from 'framer-motion'
import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <header className="p-6 shadow-sm">
      <Link href='/'>
    <motion.span className="flex items-center gap-1">
      <span className="text-xl font-bold text-[#0d0c22]">JustFelix</span> <svg  width={30} height={30} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:3,repeat:Infinity,repeatType:'mirror',ease:'easeInOut'}}  strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"></motion.path>
       </svg>
       </motion.span>
      </Link>
   </header>
  )
}

export default Header