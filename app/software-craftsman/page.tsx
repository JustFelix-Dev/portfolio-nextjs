import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import profileImage from '@/public/profile-picture.jpg'

import Contact from '../components/Contact'
import { VerifiedIcon } from 'lucide-react'
import MainSection from '../components/MainContent'

const Software = () => {
  return (
    <>
    <Header/>
    <main className='flex'>
<section className="about  border border-l p-4 space-y-6">
  {/* Profile Image */}
  <Image
    src={profileImage} 
    alt="Profile image"
    width={120} 
    height={120} 
    placeholder="blur" 
    priority
    className="rounded-full mx-auto"
    style={{ objectFit: "cover", aspectRatio: "1 / 1" }}
  />

  {/* Name with Verified Badge */}
  <div className="flex items-center justify-center space-x-2">
    <h1 className="text-xl font-bold">Felix Owolabi</h1>
    <VerifiedIcon className="text-blue-500 w-5 h-5" />
  </div>

  {/* Bio */}
  <p className="text-center text-sm max-w-[31ch] text-gray-600">
    Crafting elegant software solutions that solve real-world problems. A passionate developer with a keen eye for detail and a love for innovation.
  </p>

 <div className='text-center'>
  <h1>Fact:</h1>
  <p className='text-gray-600'>I&apos;m a southpaw (left-handed) 😊</p>
 </div>
</section>

    <section className="main flex-grow ">
      <MainSection/>
    </section>
   <section className="contact border border-l p-4 space-y-6">
      <Contact/>
</section>

    </main>
    </>
  )
}

export default Software