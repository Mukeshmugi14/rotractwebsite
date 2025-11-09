
import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import { Project, ProjectCategory } from '../../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-light-navy rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300">
    <div className="relative">
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      {project.isFlagship && (
        <span className="absolute top-4 left-4 bg-rotary-yellow text-dark-navy px-3 py-1 text-sm font-bold rounded-full">Flagship Project</span>
      )}
    </div>
    <div className="p-6">
      <p className="text-sm text-rotary-yellow mb-2">{project.category}</p>
      <h3 className="text-xl font-bold text-light-slate mb-2">{project.title}</h3>
      <p className="text-slate text-sm mb-4">{project.description}</p>
      <div className="border-t border-slate/20 pt-4">
        <p className="font-semibold text-light-slate">Impact:</p>
        <p className="text-slate text-sm">{project.impact}</p>
      </div>
    </div>
  </div>
);

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const categories = ['All', ...Object.values(ProjectCategory)];

  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-6 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">Our Projects</h1>
        <p className="text-rotary-yellow text-lg">Creating Lasting Change in Our Community and Beyond</p>
      </section>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat as ProjectCategory | 'All')}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
              filter === cat
                ? 'bg-rotary-yellow text-dark-navy'
                : 'bg-light-navy text-light-slate hover:bg-rotary-blue'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
    