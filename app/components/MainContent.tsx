import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Briefcase, Code, Layout } from "lucide-react";
import TechStacks from "./TechStacks";
import VerticalTimeline from "./ExperienceSection";
import Projects from "./Projects";

export default function MainSection() {
  return (
    <section className="main-section flex-grow space-y-8 px-0 md:p-6 md:px-4">
      {/* Header Component */}
      <header className="header text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          &quot;Building the future, one line of code at a time.&quot;
        </h1>
        <p className="text-muted-foreground">
          Explore my journey through projects, experiences, and the tools I love.
        </p>       
      </header>

      {/* Tabs Component */}
      <Tabs style={{maxHeight:"calc(100vh - 78px)"}} defaultValue="projects" className="tabs overflow-auto ">
        <TabsList className="flex justify-around">
          <TabsTrigger value="projects" className="flex items-center space-x-2">
            <Layout className="w-4 h-4" />
            <span>Projects</span>
          </TabsTrigger>
          <TabsTrigger value="experience" className="flex items-center space-x-2">
            <Briefcase className="w-4 h-4" />
            <span>Experience</span>
          </TabsTrigger>
          <TabsTrigger value="tech" className="flex items-center space-x-2">
            <Code className="w-4 h-4" />
            <span>Tech Stacks</span>
          </TabsTrigger>
        </TabsList>

        {/* Projects */}
        <TabsContent value="projects">
           <Projects/>
        </TabsContent>

        {/* Experience */}
        <TabsContent value="experience">
        <VerticalTimeline/>
        </TabsContent>

        {/* Tech Stacks */}
        <TabsContent value="tech">
          <div className="">
             <TechStacks/>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
