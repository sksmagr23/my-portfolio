'use client';
import { projectsData } from '@/app/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50 border-t my-12 lg:my-20 border-[#1a1abb]">
      <div className="w-[180px] h-[180px] bg-indigo-500 rounded-full absolute top-20 left-[20%] filter blur-[120px] opacity-10"></div>
      <div className="w-[140px] h-[140px] bg-lime-400 rounded-full absolute bottom-20 right-[30%] filter blur-[100px] opacity-10"></div>
      
      <div className="flex justify-center translate-y-[25px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6b9dd1] to-transparent w-full" />
        </div>
      </div>

      <div className="sticky top-0 pt-6 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">
          <span className="text-gradient">PROJECTS</span>
        </h2>
      </div>

      <div className="pt-4">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 5).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-fit mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;