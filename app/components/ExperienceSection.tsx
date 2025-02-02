'use client'
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Software Engineer",
    company: "EnnovateLab, NG",
    duration: "March 2024 – Present",
    description: "Optimized web application for maximum speed and scalability leveraging on technologies like Nextjs and also other principles that ensures a performant web application. Implemented reusable code and component library to ensure the maintainability of code and streamline development processes."
  },
  {
    title: "FullStack Engineer",
    company: "Bootcampr, US",
    duration: "Dec 2023 – March 2024",
    description: ("Consistently delivered high-quality features and deliverables within agreed-upon timelines, leveraging Agile methodologies and effective collaboration within the team. Gained proficiency in TypeScript, Jest, SuperTest, Sass/SCSS alongside other technologies, contributing significantly to crucial features."),
  },
  {
    title: "Open-Source Developer",
    company: "Tublian, US",
    duration: "Dec 2023 – Jan 2024",
    description: " Made significant contributions to Digitomize, an innovative open-source platform within the Microsoft for Startups Founders Hub ecosystem by successfully completing tasks and making 4+ pull requests, all of which were merged into the codebase, demonstrating proficiency in technical abilities ",
  },
];

export default function VerticalTimeline() {
  return (
    <section className="px-6 py-4">
      <div className="relative border-l-4 border-[#B87D4B]">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Dot */}
            <div className="absolute w-6 h-6 bg-[#B87D4B] rounded-full -left-[15px] border-2 border-white"></div>
            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.company}</p>
              <p className="text-sm text-gray-500">{item.duration}</p>
              <p className="mt-2 text-gray-600 max-w-[75ch]">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
