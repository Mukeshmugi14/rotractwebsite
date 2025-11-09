
import React from 'react';
import { TEAM_MEMBERS } from '../../constants';

const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16 space-y-16">
      {/* Overview Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">About Us</h1>
        <p className="text-rotary-yellow text-lg">Youth in Action: Service Above Self</p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-light-navy p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-light-slate mb-4">Our Mission</h2>
          <p className="text-slate leading-relaxed">
            To provide an opportunity for young men and women to enhance the knowledge and skills that will assist them in personal development, to address the physical and social needs of their communities, and to promote better relations between all people worldwide through a framework of friendship and service.
          </p>
        </div>
        <div className="bg-light-navy p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-light-slate mb-4">Our Vision</h2>
          <p className="text-slate leading-relaxed">
            We envision a world where young leaders are empowered to take action, creating sustainable change in their communities and beyond. We strive to be a premier Rotaract club known for our impactful projects, strong fellowship, and commitment to Rotary ideals.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="bg-light-navy p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-light-slate mb-4 text-center">Our Journey</h2>
        <p className="text-slate leading-relaxed max-w-4xl mx-auto text-center">
          The Rotaract Club of Chennai Radiance Risers was chartered on [Charter Date] under the guidance of our parent club, the Rotary Club of Chennai Radiance. Since our inception, we have been a vibrant group of young professionals and students committed to making a difference. Our journey is marked by numerous successful projects, strong community partnerships, and the personal growth of our members, all driven by the spirit of "Service Above Self."
        </p>
      </section>

      {/* Leadership Team */}
      <section>
        <h2 className="text-4xl font-bold text-light-slate mb-8 text-center">Meet Our Leaders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map(member => (
            <div key={member.id} className="bg-light-navy rounded-lg shadow-lg text-center p-6 transform hover:-translate-y-2 transition-transform duration-300">
              <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-rotary-yellow" />
              <h3 className="text-xl font-bold text-light-slate">{member.name}</h3>
              <p className="text-rotary-yellow">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
    