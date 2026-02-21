
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../../constants';
import { Project, ProjectCategory } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.imageUrl];

  useEffect(() => {
    if (images.length <= 1) return;

    const randomDelay = Math.floor(Math.random() * 2000);
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setActiveImageIndex((prev) => (prev + 1) % images.length);
      }, 2500);
    }, randomDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div 
      onClick={() => onClick(project)}
      className="bg-light-navy rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col cursor-pointer hover:shadow-2xl hover:shadow-rotary-blue/20"
    >
      <div className="relative h-56 w-full overflow-hidden bg-dark-navy">
        {/* Loading Spinner Background - Visible if images haven't loaded */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
             <div className="w-8 h-8 border-4 border-rotary-blue/30 border-t-rotary-blue rounded-full animate-spin"></div>
        </div>

        {images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`${project.title} - view ${idx + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${
              idx === activeImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`} 
            loading="lazy"
          />
        ))}
        
        {project.isFlagship && (
          <span className="absolute top-4 left-4 z-20 bg-rotary-yellow text-dark-navy px-3 py-1 text-sm font-bold rounded-full shadow-md">Flagship Project</span>
        )}
        
        <div className="absolute inset-0 z-30 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="bg-dark-navy/80 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold transform translate-y-4 group-hover:translate-y-0">View Details</span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col relative z-20 bg-light-navy">
        <p className="text-sm text-rotary-yellow mb-2 font-medium">{project.category}</p>
        <h3 className="text-xl font-bold text-light-slate mb-2 group-hover:text-white transition-colors">{project.title}</h3>
        <p className="text-slate text-sm mb-4 flex-grow line-clamp-3">{project.description}</p>
        <div className="border-t border-slate/20 pt-4 mt-auto">
          <p className="font-semibold text-light-slate text-sm">Impact:</p>
          <p className="text-slate text-sm line-clamp-2">{project.impact}</p>
        </div>
      </div>
    </div>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.imageUrl];

  useEffect(() => {
    // Reset loaded state when project changes
    setImagesLoaded(new Array(images.length).fill(false));
  }, [images.length]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, onClose]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 bg-dark-navy/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-light-navy rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-6xl max-h-[90vh] border border-slate/20"
        onClick={e => e.stopPropagation()}
      >
        {/* Left: Image Gallery */}
        <div className="w-full md:w-1/2 bg-dark-navy p-4 flex flex-col justify-center relative min-h-[300px] md:min-h-0">
          <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden bg-dark-navy relative group h-full shadow-inner">
            
            {/* Loading Spinner for Modal */}
             {!imagesLoaded[activeImageIndex] && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="w-10 h-10 border-4 border-rotary-yellow border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`${project.title} view ${idx + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  idx === activeImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                onLoad={() => handleImageLoad(idx)}
              />
            ))}

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-rotary-yellow hover:text-dark-navy transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-rotary-yellow hover:text-dark-navy transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </>
            )}
          </div>
          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto py-2 px-1 scrollbar-hide">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-16 rounded-md overflow-hidden border-2 transition-all relative ${
                    activeImageIndex === idx ? 'border-rotary-yellow opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                   {!imagesLoaded[idx] && (
                       <div className="absolute inset-0 flex items-center justify-center bg-light-navy/50">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                       </div>
                   )}
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" onLoad={() => handleImageLoad(idx)} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto custom-scrollbar relative">
          <button 
             onClick={onClose}
             className="absolute top-4 right-4 text-slate hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10 z-10"
             aria-label="Close Modal"
          >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
             </svg>
          </button>
          
          <div className="mt-2">
            <span className="inline-block bg-rotary-blue/20 text-rotary-blue text-xs font-bold px-3 py-1 rounded-full border border-rotary-blue/50 mb-4">
              {project.category}
            </span>
            <h2 className="text-3xl font-bold text-white mb-4 leading-tight">{project.title}</h2>
            
            <div className="flex flex-wrap gap-4 text-sm text-slate mb-6 border-b border-slate/10 pb-6">
              {project.date && (
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-rotary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  {project.date}
                </div>
              )}
              {project.location && (
                <div className="flex items-center">
                   <svg className="w-4 h-4 mr-2 text-rotary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {project.location}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-light-slate mb-2">About the Project</h3>
                <p className="text-slate leading-relaxed whitespace-pre-line">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-light-slate mb-2">Impact Created</h3>
                <div className="bg-dark-navy/50 p-4 rounded-lg border-l-4 border-rotary-yellow">
                  <p className="text-white italic">{project.impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', ...Object.values(ProjectCategory)];

  return (
    <div className="container mx-auto px-6 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">Our Projects</h1>
        <p className="text-rotary-yellow text-lg">Service Above Self in Action</p>
      </section>

      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto mb-12 space-y-8">
        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-slate group-focus-within:text-rotary-yellow transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search projects by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-light-navy border border-slate/20 rounded-full py-4 pl-12 pr-6 text-light-slate focus:outline-none focus:ring-2 focus:ring-rotary-yellow focus:border-transparent transition-all shadow-lg placeholder:text-slate/50"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as ProjectCategory | 'All')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md ${
                selectedCategory === category
                  ? 'bg-rotary-yellow text-dark-navy ring-2 ring-rotary-yellow ring-offset-2 ring-offset-dark-navy'
                  : 'bg-light-navy text-slate hover:bg-light-navy/80 hover:text-white border border-slate/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div key={`${selectedCategory}-${searchQuery}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="h-full">
               <ProjectCard project={project} onClick={setSelectedProject} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-light-navy/30 rounded-2xl border border-dashed border-slate/20">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-xl text-light-slate font-semibold mb-2">No projects found</p>
            <p className="text-slate">Try adjusting your search or category filter.</p>
            {(searchQuery || selectedCategory !== 'All') && (
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-6 text-rotary-yellow hover:underline font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default ProjectsPage;
