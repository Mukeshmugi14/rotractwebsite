import React from 'react';
import { Page } from '../../types';
import { LOGO_URL, HERO_BANNER_URL } from '../../constants';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white px-6">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: `url('${HERO_BANNER_URL}')` }}></div>
        <div className="absolute inset-0 bg-dark-navy/70 z-10"></div>
        <div className="relative z-20 flex flex-col items-center">
          <img 
            src={LOGO_URL} 
            alt="Rotaract Club of Chennai Radiance Risers Logo" 
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mb-4 opacity-0 animate-fadeIn" 
            style={{ animationDelay: '200ms' }}
          />
          <h1 
            className="text-4xl md:text-6xl font-bold text-light-slate mb-4 font-montserrat opacity-0 animate-fadeInUp"
            style={{ animationDelay: '400ms' }}
          >
            Rotaract Club of Chennai Radiance Risers
          </h1>
          <p 
            className="text-lg md:text-2xl text-rotary-yellow font-semibold opacity-0 animate-fadeInUp"
            style={{ animationDelay: '600ms' }}
          >
            Empowering Youth • Inspiring Change • Building a Better Tomorrow
          </p>
          <div 
            className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '800ms' }}
          >
            <button onClick={() => setCurrentPage('Join Us')} className="px-8 py-3 bg-rotary-yellow text-dark-navy font-bold rounded-md hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
              Join Us
            </button>
            <button onClick={() => setCurrentPage('Projects')} className="px-8 py-3 bg-transparent border-2 border-rotary-yellow text-rotary-yellow font-bold rounded-md hover:bg-rotary-yellow hover:text-dark-navy transition-all duration-300">
              See Our Projects
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-light-slate mb-6">Welcome to Our Club!</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate">
          We are the Rotaract Club of Chennai Radiance Risers, a dynamic community of young leaders dedicated to service, innovation, and personal growth. Together under the Rotary Club of Chennai Radiance Family, we rise to create lasting impact — one project, one idea, one smile at a time.
        </p>
        <button onClick={() => setCurrentPage('Contact')} className="mt-8 px-6 py-3 border-2 border-rotary-yellow text-rotary-yellow font-semibold rounded-md hover:bg-rotary-yellow hover:text-dark-navy transition-all duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default HomePage;