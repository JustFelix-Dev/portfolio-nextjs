'use client';

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";
import { projects } from "@/lib/projectsData";

interface Project {
    id: number,
    userImage: StaticImageData |  string,
    userName: string,
    userTagline:string,
    title:string,
    description:string,
    image: StaticImageData | string,
    details:string
}


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>();

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Project List */}
      <div className="gap-6">
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
                placeholder="blur"
                className="w-full h-60 object-cover"
              />
            </div>
          
          </div>
        ))}
      </div>

      {/* Dialog Box */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-lg">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  {selectedProject.details}
                </DialogDescription>
              </DialogHeader>
              
              {/* Media */}
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={774}
                height={330}
                placeholder="blur"
                className="w-full h-60 object-cover rounded-md my-4"
              />

              {/* Footer */}
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600"
              >
                Close
              </button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
