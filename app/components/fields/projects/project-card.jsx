import * as React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="border-[#1c3aa5ce] relative border-2 w-full shadow-xl shadow-sky-800/20 drop-shadow-lg rounded-md glass-panel cursor-pointer">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#64f7ffa9] to-transparent"></div>
      </div>
      
      <div className="px-4 lg:px-5 py-2 lg:py-3 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-600"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-600"></div>
        </div>
        <p className="text-center ml-10 text-[#7ebcfe] text-base lg:text-xl font-medium">
          {project.name}
        </p>
      </div>
      
      <div className="w-full border-t border-b border-indigo-900/30 overflow-hidden">
        <div className="relative w-full h-48 md:h-60">
          <img
            src={`/projects/${project.id}.png`}
            alt={`${project.name} screenshot`}
            className="w-full h-full object-cover object-center opacity-70"
          />
        </div>
      </div>
      
      <div className="overflow-hidden border-t border-indigo-900/30 px-3 lg:px-6 py-3 lg:py-5 text-xs md:text-base">
          <div>
            <span className="mr-2 text-orange-300">const</span>
            <span className="mr-2 text-purple-300">project</span>
            <span className="mr-2 text-indigo-50">=</span>
            <span className="text-gray-300">{'{'}</span>
          </div>
          
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-[#c8a951]">{`'`}</span>
            <span className="text-cyan-300">{project.name}</span>
            <span className="text-[#c8a951]">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.techstack.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-teal-300">{tag}</span>
                  {
                    project.techstack?.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </div>
          
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">type:</span>
            <span className="text-cyan-300">{project.type}</span>
            <span className="text-gray-400">,</span>
          </div>
          
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">description:</span>
            <span className="text-yellow-50">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          
          
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">code:</span>
            <a 
              href={project.code} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-[#64ffb9] transition-colors duration-300 inline-flex items-center gap-1"
            >
              <FaGithub className="inline" />
              <span className='mt-1'>GitHub</span>
            </a>
            <span className="text-gray-400">,</span>
          </div>
          
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">live:</span>
            <a 
              href={project.web} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-yellow-400 hover:text-[#64ffb9] transition-colors duration-300 inline-flex items-center gap-1"
            >
              <FaExternalLinkAlt className="inline" />
              <span className='mt-1'>Demo</span>
            </a>
            <span className="text-gray-400">,</span>
          </div>
          
          
          <div><span className="text-gray-300">{`};`}</span></div>
        
      </div>
    </div>
  );
};

export default ProjectCard;