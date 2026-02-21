
import React from 'react';
import FadeInSection from '../FadeInSection';
import Counter from '../Counter';

const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16 space-y-16">
      {/* Overview Section */}
      <section className="text-center" aria-labelledby="about-heading">
        <h1 id="about-heading" className="text-4xl md:text-5xl font-bold text-light-slate mb-4">About Us</h1>
        <p className="text-rotary-yellow text-lg font-medium">Youth in Action: Service Above Self</p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-10 items-stretch" aria-label="Our Mission and Vision">
        <FadeInSection>
          <div className="bg-light-navy p-8 rounded-lg shadow-lg h-full border-t-4 border-rotary-blue hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <h2 className="text-3xl font-bold text-light-slate">Our Mission</h2>
            {/* Visual Separator */}
            <div className="w-16 h-1 bg-rotary-blue rounded mt-2 mb-6" aria-hidden="true"></div>
            <p className="text-slate leading-relaxed flex-grow">
              To provide an opportunity for young men and women to enhance the knowledge and skills that will assist them in personal development, to address the physical and social needs of their communities, and to promote better relations between all people worldwide through a framework of friendship and service.
            </p>
          </div>
        </FadeInSection>
        
        <FadeInSection delay="200ms">
          <div className="bg-light-navy p-8 rounded-lg shadow-lg h-full border-t-4 border-rotary-yellow hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <h2 className="text-3xl font-bold text-light-slate">Our Vision</h2>
            {/* Visual Separator */}
            <div className="w-16 h-1 bg-rotary-yellow rounded mt-2 mb-6" aria-hidden="true"></div>
            <p className="text-slate leading-relaxed flex-grow">
              We envision a world where young leaders are empowered to take action, creating sustainable change in their communities and beyond. We strive to be a premier Rotaract club known for our impactful projects, strong fellowship, and commitment to Rotary ideals.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Stats Section */}
      <FadeInSection delay="300ms">
        <section className="bg-light-navy py-12 rounded-xl shadow-2xl relative overflow-hidden" aria-label="Club Statistics">
          {/* Decorative background element - Refined with shadow */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-rotary-blue via-rotary-yellow to-rotary-blue shadow-[0_0_10px_rgba(255,199,44,0.5)]" aria-hidden="true"></div>
          
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  <Counter end={50} suffix="+" />
                </div>
                <p className="text-sm text-rotary-yellow uppercase tracking-wider font-bold">Members</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  <Counter end={20} suffix="+" />
                </div>
                <p className="text-sm text-rotary-yellow uppercase tracking-wider font-bold">Projects</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  <Counter end={1000} suffix="+" />
                </div>
                <p className="text-sm text-rotary-yellow uppercase tracking-wider font-bold">Lives Touched</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">
                  <Counter end={5} suffix="+" />
                </div>
                <p className="text-sm text-rotary-yellow uppercase tracking-wider font-bold">Awards</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* History */}
      <section className="bg-light-navy p-8 rounded-lg shadow-lg" aria-labelledby="history-heading">
        <div className="flex flex-col items-center mb-6">
            <h2 id="history-heading" className="text-3xl font-bold text-light-slate text-center">Our Journey</h2>
            {/* Visual Separator */}
            <div className="w-24 h-1 bg-gradient-to-r from-rotary-blue to-rotary-yellow rounded mt-3" aria-hidden="true"></div>
        </div>
        <p className="text-slate leading-relaxed max-w-4xl mx-auto text-center">
          The Rotaract Club of Chennai Radiance Raisers was chartered on 5th August 2024 under the guidance of our parent club, the Rotary Club of Chennai Radiance. Since our inception, we have been a vibrant group of young professionals and students committed to making a difference. Our journey is marked by numerous successful projects, strong community partnerships, and the personal growth of our members, all driven by the spirit of "Service Above Self."
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;
