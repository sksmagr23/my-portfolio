import * as React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className=" border-[#1c3aa5ce] relative border-2 glass-panel w-full shadow-xl shadow-sky-800/20 drop-shadow-lg rounded-md">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#64ffb9a9] to-transparent"></div>
      </div>
      
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-600"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-600"></div>
        </div>
        <p className="text-center ml-12 text-[#64ffb9] text-base lg:text-xl font-medium">
          {project.name}
        </p>
      </div>
      
      <div className="overflow-hidden border-t border-indigo-900/30 px-4 lg:px-8 py-4 lg:py-8">
        <code className="text-xs md:text-sm lg:text-base font-mono">
          <div>
            <span className="mr-2 text-teal-300">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-indigo-300">=</span>
            <span className="text-gray-300">{'{'}</span>
          </div>
          
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-[#6b9dd1]">name:</span>
            <span className="text-[#c8a951]">{`'`}</span>
            <span className="text-cyan-300">{project.name}</span>
            <span className="text-[#c8a951]">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-[#6b9dd1]">tools:</span>
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
            <span className="ml-4 lg:ml-8 mr-2 text-[#6b9dd1]">type:</span>
            <span className="text-cyan-300">{project.type}</span>
            <span className="text-gray-400">,</span>
          </div>
          
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-[#6b9dd1]">description:</span>
            <span className="text-gray-300">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          
          
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-[#6b9dd1]">code:</span>
            <a 
              href={project.code} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-[#64ffb9] transition-colors duration-300 inline-flex items-center gap-1"
            >
              <FaGithub className="inline" />
              <span className='mt-1'>GitHub</span>
            </a>
            <span className="text-gray-400">,</span>
          </div>
          
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-[#6b9dd1]">live:</span>
            <a 
              href={project.web} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-300 hover:text-[#64ffb9] transition-colors duration-300 inline-flex items-center gap-1"
            >
              <FaExternalLinkAlt className="inline" />
              <span className='mt-1'>Demo</span>
            </a>
            <span className="text-gray-400">,</span>
          </div>
          
          
          <div><span className="text-gray-300">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;