'use client';

import React, { useState } from 'react'
import Header from '../components/Header'
import Contact from '../components/Contact'
import MainSection from '../components/MainContent'
import About from '../components/About'

const Software = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [activeSection, setActiveSection] = useState("main");
  return (
    <>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <main className="flex">
        <div
          className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:hidden`}
        >
          <nav className="p-8 space-y-4">
          <button
              onClick={() => {
                setActiveSection("main");
                setMenuOpen(false); // Close menu after selection
              }}
              className="block text-lg font-bold text-gray-800"
            >
              Projects
            </button>
            <button
              onClick={() => {
                setActiveSection("about");
                setMenuOpen(false); // Close menu after selection
              }}
              className="block text-lg font-bold text-gray-800"
            >
              About
            </button>
            <button
              onClick={() => {
                setActiveSection("contact");
                setMenuOpen(false); // Close menu after selection
              }}
              className="block text-lg font-bold text-gray-800"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <main className='hidden md:flex'>
          <About/>
         <MainSection />  
          <Contact />
        </main>

        {/* Sidebar (Visible on Larger Screens) */}
        <section className="flex md:hidden border-l p-4 space-y-6">
        {activeSection === "main" && <MainSection/>}
          {activeSection === "about" && <About/>}
          {activeSection === "contact" && <Contact />}
        </section>
      </main>
    </>
  )
}

export default Software