'use client';
import { useState, useEffect } from 'react';
import { projectsData } from '@/app/data/projects-data';
import ProjectCard from './project-card';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";


const Projects = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projectPairs = [];
  for (let i = 0; i < projectsData.length; i += 2) {
    projectPairs.push(
      projectsData.slice(i, i + 2)
    );
  }

  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 40,
    height: 40,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(26, 26, 200, 0.5)',
    borderRadius: '50%',
  };

  const CustomPrevArrow = (onClickHandler, hasPrev, label) => 
    hasPrev && (
      <button 
        type="button"
        onClick={onClickHandler} 
        title={label}
        style={{ ...arrowStyles, left: '-25px' }}
        className="hover:bg-indigo-800/70 transition-all duration-300"
      >
        <RiArrowLeftFill className="text-[#64ffb9] text-xl" />
      </button>
    );

  const CustomNextArrow = (onClickHandler, hasNext, label) => 
    hasNext && (
      <button 
        type="button"
        onClick={onClickHandler} 
        title={label}
        style={{ ...arrowStyles, right: '-25px' }}
        className="hover:bg-indigo-800/70 transition-all duration-300"
      >
        <RiArrowRightFill className="text-[#64ffb9] text-xl" />
      </button>
    );

  return (
    <div id='projects' className="relative z-50 border-t my-12 lg:my-20 border-[#1a1abb]">
      <div className="w-[180px] h-[180px] bg-indigo-500 rounded-full absolute top-20 left-[20%] filter blur-[120px] opacity-10"></div>
      <div className="w-[140px] h-[140px] bg-teal-400 rounded-full absolute bottom-20 right-[30%] filter blur-[100px] opacity-10"></div>
      
      <div className="flex justify-center translate-y-[25px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6b9dd1] to-transparent w-full" />
        </div>
      </div>

      <div className="pt-8 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">
          <span className="text-gradient">PROJECTS</span>
        </h2>
      </div>

      <div className="pt-4">
          <div className="max-w-6xl mx-auto px-4 relative">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              stopOnHover={true}
              swipeable={true}
              emulateTouch={true}
              className="custom-carousel"
              renderArrowPrev={CustomPrevArrow}
              renderArrowNext={CustomNextArrow}
              selectedItem={0}
              showIndicators={true}
              centerMode={false}
              centerSlidePercentage={100}
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                return (
                  <li
                    key={index}
                    style={{
                      display: 'inline-block',
                      margin: '20px 5px 0px 5px',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? '#64ffb9' : 'rgba(107, 157, 209, 0.5)',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                    }}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
            >
              {isMobile ? (
                projectsData.map((project, index) => (
                  <div key={index} className="carousel-slide px-1 py-2 flex justify-start">
                    <ProjectCard project={project} />
                  </div>
                ))
              ) : (
                projectPairs.map((pair, index) => (
                  <div key={index} className="carousel-slide px-1 py-1 grid grid-cols-2 gap-6">
                    {pair.map((project, projectIndex) => (
                      <div key={projectIndex} className="flex justify-start">
                        <ProjectCard project={project} />
                      </div>
                    ))}
                  </div>
                ))
              )}
            </Carousel>

            <style jsx global>{`
              .carousel .control-dots {
                padding: 0;
                margin: 16px 0 0 0;
              }
              
              .carousel.carousel-slider {
                overflow: visible;
                padding: 0 5px;
              }
              
              .carousel .carousel-status {
                display: none;
              }
              
              .carousel-slide {
                padding-bottom: 30px;
              }
              
              .carousel .control-arrow {
                display: none;
              }
              
              .carousel .carousel-slider .control-arrow:hover {
                background: rgba(26, 26, 187, 0.6);
              }
              
              .carousel .slider-wrapper {
                display: flex;
                justify-content: flex-start;
              }
              
              .carousel .slide {
                text-align: left;
                display: flex;
                justify-content: flex-start;
              }
            `}</style>
          </div>
      </div>
    </div>
  );
};

export default Projects;