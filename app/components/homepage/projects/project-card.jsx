import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="from-[#040819] border-[#1c3aa5a0] to-[#00054b] relative rounded-lg border bg-gradient-to-r w-full shadow-xl shadow-sky-800/80 drop-shadow-md mx-4">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-[#0056be] via-[#ffc300]"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-[#0056be] to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-600"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-600"></div>
        </div>
        <p className="text-center ml-3 text-[#ffc300] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-orange-400">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-orange-400">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-blue-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.techstack.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-cyan-300">{tag}</span>
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
            <span className="text-blue-400">{project.type}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-300">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">source code:</span>
            <span className="text-blue-400 hover:text-red-500"><a href={project.code} target='_blank'>{project.code}</a></span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">deployment:</span>
            <span className="text-blue-400 hover:text-red-500"><a href={project.web} target='_blank'>{project.web}</a></span>
            <span className="text-gray-400">,</span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;