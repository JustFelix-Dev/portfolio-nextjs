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
  <p className="text-center text-sm max-w-[30ch] text-gray-600">
    Crafting elegant software solutions that solve real-world problems. A passionate developer with a keen eye for detail and a love for innovation.
  </p>

  {/* Tech Stacks */}
  <div>
    <h2 className="text-lg font-semibold mb-2 text-center">Tech Stack</h2>
    <div className="grid grid-cols-3 gap-4">
      {[
        { name: "JavaScript", icon: profileImage },
        { name: "React", icon: profileImage },
        { name: "TypeScript", icon: profileImage },
        { name: "Next.js", icon: profileImage },
        { name: "Node.js", icon: profileImage },
        { name: "TailwindCSS", icon: profileImage },
      ].map((stack) => (
        <div key={stack.name} className="flex flex-col items-center">
          <Image src={stack.icon} alt={stack.name} className="w-6 h-6 text-gray-500" />
          <p className="text-xs mt-1">{stack.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    <section className="main flex-grow">
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