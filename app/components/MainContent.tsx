import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Briefcase, Code, Layout } from "lucide-react";

export default function MainSection() {
  return (
    <section className="main-section space-y-8 p-6">
      {/* Header Component */}
      <header className="header text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          &quot;Building the future, one line of code at a time.&quot;
        </h1>
        <p className="text-muted-foreground">
          Explore my journey through projects, experiences, and the tools I love.
        </p>
        {/* Optional cool animation */}
        <div className="animation">
          <div className="rounded-full bg-primary h-4 w-4 mx-auto animate-pulse"></div>
        </div>
      </header>

      {/* Tabs Component */}
      <Tabs defaultValue="projects" className="tabs">
        <TabsList className="flex justify-center">
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
          <div className="projects-feed space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="project-card border p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl">Project {i + 1}</h3>
                <p className="text-sm text-muted-foreground">
                  A brief description of the project goes here. It highlights the purpose and key features.
                </p>
                <div className="mt-4 flex space-x-2">
                  <span className="badge">React</span>
                  <span className="badge">TypeScript</span>
                  <span className="badge">Next.js</span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Experience */}
        <TabsContent value="experience">
          <ul className="timeline space-y-4">
            <li>
              <h4 className="font-semibold">Software Engineer</h4>
              <p className="text-muted-foreground">Company A - 2021-2023</p>
              <p>Worked on scalable web apps using modern JavaScript frameworks.</p>
            </li>
            <li>
              <h4 className="font-semibold">Frontend Developer</h4>
              <p className="text-muted-foreground">Company B - 2019-2021</p>
              <p>Focused on delivering beautiful and responsive interfaces.</p>
            </li>
          </ul>
        </TabsContent>

        {/* Tech Stacks */}
        <TabsContent value="tech">
          <div className="tech-grid grid grid-cols-3 gap-4">
            {["React", "Next.js", "Node.js", "Tailwind", "TypeScript", "GraphQL"].map((tech) => (
              <div key={tech} className="tech-item flex items-center space-x-2">
                <div className="icon bg-primary h-8 w-8 rounded-full flex items-center justify-center">
                  <Code className="text-white w-4 h-4" />
                </div>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
