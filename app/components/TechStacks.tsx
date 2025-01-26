import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiJavascript,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiTailwindcss,
    SiSass,
    SiBootstrap,
    SiCss3,
    SiHtml5,
    SiGit,
    SiGithub,
    SiJest,
    SiFlutter,
    SiRedux,
    SiDart,
    SiKirby,
    SiClerk,
    SiPrisma,
    SiShadcnui,
    SiSanity,
    SiFramer,
  } from "react-icons/si"; // For recognized icons
  import {  Code } from "lucide-react"; // For fallback icons

  const techStacks = [
    { name: "NEXT.js", icon: <SiNextdotjs className="text-black w-10 h-10" /> },
    { name: "React.js", icon: <SiReact className="text-blue-500 w-10 h-10" /> },
    { name: "React-Native", icon: <SiReact className="text-blue-500 w-10 h-10" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-10 h-10" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 w-10 h-10" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400 w-10 h-10" /> },
    { name: "Dart", icon: <SiDart className="text-blue-400 w-10 h-10" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-10 h-10" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800 w-10 h-10" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600 w-10 h-10" /> },
    { name: "Prisma", icon: <SiPrisma className="text-teal-600 w-10 h-10" /> },
    { name: "Clerk", icon: <SiClerk className="text-purple-500 w-10 h-10" /> },
    { name: "Kirby CMS", icon: <SiKirby className="w-10 h-10" /> },
    { name: "Sanity CMS", icon: <SiSanity className="text-red-500 w-10 h-10" /> },
    { name: "shadcn UI", icon: <SiShadcnui className="w-10 h-10" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500 w-10 h-10" /> },
    { name: "GSAP", icon: <Code className="text-green-600 w-10 h-10" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-10 h-10" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-600 w-10 h-10" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-400 w-10 h-10" /> },
    { name: "SCSS/SASS", icon: <SiSass className="text-pink-500 w-10 h-10" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 w-10 h-10" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500 w-10 h-10" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-600 w-10 h-10" /> },
    { name: "Git", icon: <SiGit className="text-orange-500 w-10 h-10" /> },
    { name: "GitHub", icon: <SiGithub className="text-black w-10 h-10" /> },
    { name: "Material UI", icon: <Code className="text-blue-600 w-10 h-10" /> },
    { name: "Jest", icon: <SiJest className="text-red-500 w-10 h-10" /> },
    
    
  ];
  

export default function TechStacks() {
  return (
    <section className="py-8 px-4">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {techStacks.map((stack, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Stack Icon */}
            <div className="mb-3">{stack.icon}</div>
            {/* Stack Name */}
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {stack.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
