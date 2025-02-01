'use client';
import BackButton from '../components/BackButton'
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";
import { projects } from "@/lib/projectsData";
import { Link2 } from "lucide-react";

interface Project {
    id: number,
    title:string,
    description:string,
    link:string,
    image: StaticImageData | string,
    details:string
}

const AllProjects = () => {
     const [selectedProject, setSelectedProject] = useState<Project | null>();
  return (
    <>
      <BackButton/>
      <main className='px-6 py-4'>
      <div className=" mx-auto p-4">
      {/* Project List */}
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="mb-6 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Header */}
            {/* Content */}
            <div className="p-4">
              <h4 className="text-xl font-bold">{project.title}</h4>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>

            {/* Media */}
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={774}
                height={330}
                className="w-full h-60 object-cover"
              />
            </div>
          
          </div>
        ))}
        
      </div>

      {/* Dialog Box */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-md">
                  {selectedProject.details}
                </DialogDescription>
              </DialogHeader>
                
                <div>
                  <a className='flex items-center gap-1 text-blue-500 hover:underline' target="_blank" href={selectedProject.link}>
                    <Link2 size={15} />
                    View project here 
                  </a>
                </div>
              {/* Media */}
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={774}
                height={330}
                className="w-full h-60 object-cover rounded-md my-4"
              />

              {/* Footer */}
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full bg-[#B87D4B] text-white py-2 rounded-lg shadow hover:bg-[#B87D4B]"
              >
                Close
              </button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
      </main>
    </>
  )
}

export default AllProjects