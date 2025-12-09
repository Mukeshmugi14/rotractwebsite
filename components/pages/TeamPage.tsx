
import React from 'react';
import { TEAM_MEMBERS } from '../../constants';
import { TeamMember } from '../../types';

const TeamPage: React.FC = () => {
  // Group members by category, excluding 'Club Members'
  const categories = ['Core Board', 'Avenue Directors', 'Board of Directors'] as const;
  
  const groupedMembers = categories.reduce((acc, category) => {
    acc[category] = TEAM_MEMBERS.filter(member => member.category === category);
    return acc;
  }, {} as Record<typeof categories[number], TeamMember[]>);

  return (
    <div className="container mx-auto px-6 py-16 space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">Meet Our Leaders</h1>
        <p className="text-rotary-yellow text-lg">The Driving Force Behind Radiance Risers</p>
      </section>

      {categories.map((category) => {
        const members = groupedMembers[category];
        if (members.length === 0) return null;

        return (
          <section key={category}>
            <h2 className="text-3xl font-bold text-light-slate mb-8 border-b-2 border-rotary-yellow pb-2 inline-block">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {members.map((member) => (
                <div key={member.id} className="bg-light-navy rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative">
                  {/* Box image container - aspect-square ensures a box shape */}
                  <div className="w-full aspect-square overflow-hidden relative">
                     <img 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${member.role === 'Treasurer' ? 'object-center' : 'object-top'}`}
                     />
                     {/* Overlay gradient on hover */}
                     <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                     {/* Tooltip: Full Role */}
                     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 max-w-[90%] w-max px-3 py-1.5 bg-dark-navy/95 backdrop-blur-sm border border-rotary-yellow/30 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg pointer-events-none z-20">
                        {member.role}
                     </div>
                  </div>
                  <div className="p-6 text-center border-b-4 border-transparent group-hover:border-rotary-yellow transition-colors duration-300 bg-light-navy">
                    <h3 className="text-xl font-bold text-light-slate mb-1">{member.name}</h3>
                    <p className="text-rotary-yellow text-sm font-medium tracking-wide uppercase truncate">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default TeamPage;
