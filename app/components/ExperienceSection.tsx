'use client'
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2023 – Present",
    description: "Developed scalable web apps using React.js and Tailwind CSS.",
  },
  {
    title: "Software Engineer",
    company: "InnovateX",
    duration: "Jun 2021 – Dec 2022",
    description: "Built and maintained APIs and modern UIs for e-commerce.",
  },
  {
    title: "Intern",
    company: "CodeLabs",
    duration: "Jan 2021 – May 2021",
    description: "Contributed to client projects and enhanced coding standards.",
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
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
