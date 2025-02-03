import React from 'react'
import Image from 'next/image'
import profileImage from '@/public/profile-picture.jpg'
import { LinkIcon, VerifiedIcon } from 'lucide-react'


const About = () => {
  return (
    <section className="about md:border md:border-l p-4 space-y-6">
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
    <p className="text-center text-sm max-w-full md:max-w-[31ch] text-gray-600">
      Crafting elegant software solutions that solve real-world problems. A passionate developer with a keen eye for detail and a love for innovation.
    </p>
  
   <div className='text-center'>
    <h1>Fact:</h1>
    <p className='text-gray-600'>I&apos;m a southpaw (left-handed) 😊</p>
   </div>
   <div className='flex items-center justify-center gap-1 underline text-center text-gray-600'>
   <a target='_blank'  rel="noopener noreferrer"  href="https://drive.google.com/file/d/1eZErtoeKKUqufwSQwX_VabmrVlX6rD03/view?usp=drive_link" download='Felix Resume.pdf'>Resume</a>
   <LinkIcon size={11}/>
   </div>
  </section>
  )
}

export default About