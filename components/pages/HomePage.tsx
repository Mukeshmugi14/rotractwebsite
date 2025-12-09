
import React, { useState, useEffect } from 'react';
import { Page } from '../../types';
import { LOGO_URL, HERO_BANNER_IMAGES } from '../../constants';
import FadeInSection from '../FadeInSection';
import Counter from '../Counter';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const RotatingText: React.FC = () => {
  const items = [
    "Empowering Youth",
    "Inspiring Change",
    "Building a Better Tomorrow"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setIsVisible(true);
      }, 600); // Transition duration
    }, 3000); // Display duration
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 md:h-16 perspective-1000 relative flex justify-center items-center mb-4 w-full px-4">
      <p
        className={`text-lg sm:text-xl md:text-3xl text-rotary-yellow font-bold transition-all duration-700 absolute w-full text-center transform-style-3d drop-shadow-md ${
          isVisible 
            ? 'opacity-100 [transform:rotateX(0deg)] blur-none translate-y-0' 
            : 'opacity-0 [transform:rotateX(-90deg)] blur-sm translate-y-4'
        }`}
      >
        {items[currentIndex]}
      </p>
    </div>
  );
};

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % HERO_BANNER_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-0 pb-20"> 
      
      {/* HERO SECTION - ORIGINAL OVERLAY STYLE */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Slideshow */}
        {HERO_BANNER_IMAGES.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentBannerIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
             {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-dark-navy/60 z-10"></div>
            <img 
              src={img} 
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-10">
          
          {/* Logo */}
          <div className="mb-6 animate-fadeIn">
            <img 
                src={LOGO_URL} 
                alt="Club Logo" 
                className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-rotary-yellow shadow-2xl"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg animate-fadeInUp">
            Rotaract Club of <br/>
            <span className="text-rotary-yellow">Chennai Radiance Risers</span>
          </h1>

          {/* Rotating Tagline */}
          <div className="w-full max-w-4xl mx-auto mb-10 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <RotatingText />
          </div>

          {/* Action Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 w-full animate-fadeInUp"
            style={{ animationDelay: '400ms' }}
          >
            <button onClick={() => setCurrentPage('Contact')} className="w-auto px-6 py-2 sm:px-8 sm:py-3 bg-rotary-yellow text-dark-navy font-bold text-sm sm:text-lg rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
              Join the Movement
            </button>
            <button onClick={() => setCurrentPage('Projects')} className="w-auto px-6 py-2 sm:px-8 sm:py-3 bg-transparent border-2 border-rotary-yellow text-rotary-yellow font-bold text-sm sm:text-lg rounded-full hover:bg-rotary-yellow hover:text-dark-navy transition-all duration-300 whitespace-nowrap shadow-lg">
              Explore Our Work
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 text-white/50 hidden md:block">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </div>

        </div>
      </section>

      {/* Intro / Welcome Section */}
      <section className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <FadeInSection>
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block px-3 py-1 bg-rotary-blue/20 text-rotary-blue text-sm font-bold rounded-full mb-2">
                WHO WE ARE
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-light-slate leading-tight">
                Welcome to <span className="text-rotary-yellow">Radiance Risers</span>
              </h2>
              <div className="w-24 h-1.5 bg-rotary-blue rounded-full mx-auto lg:mx-0"></div>
              <p className="text-lg text-slate leading-relaxed">
                We are a dynamic community of young leaders dedicated to service, innovation, and personal growth. Under the umbrella of the Rotary Club of Chennai Radiance Family (RID 3233), we strive to create lasting impact.
              </p>
              <p className="text-lg text-slate leading-relaxed">
                Our club is more than just a non-profit; it's a family where ideas turn into actions. Whether it's through community service, professional development, or global networking, we rise together to make a difference—one smile at a time.
              </p>
              <button 
                onClick={() => setCurrentPage('About')}
                className="inline-flex items-center text-neon-blue font-semibold hover:text-rotary-yellow transition-colors mt-4 group"
              >
                Read our full story 
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </FadeInSection>

          {/* Right Content: 3D Cube Animation */}
          <FadeInSection delay="300ms">
            <div className="flex justify-center items-center py-10 lg:py-0 perspective-1000">
              <div className="cube-container">
                {/* Face Front: Community */}
                <div className="cube-face face-front bg-gradient-to-br from-light-navy to-dark-navy border border-rotary-blue/50">
                  <div className="text-4xl mb-2">🤝</div>
                  <h3 className="text-xl text-rotary-yellow">Community</h3>
                  <p className="text-xs text-slate px-4 text-center mt-2">Serving locally, impacting globally.</p>
                </div>

                {/* Face Right: Fellowship */}
                <div className="cube-face face-right bg-gradient-to-br from-light-navy to-dark-navy border border-rotary-yellow/50">
                   <div className="text-4xl mb-2">🎉</div>
                  <h3 className="text-xl text-rotary-yellow">Fellowship</h3>
                  <p className="text-xs text-slate px-4 text-center mt-2">Building bonds that last a lifetime.</p>
                </div>

                {/* Face Back: Leadership */}
                <div className="cube-face face-back bg-gradient-to-br from-light-navy to-dark-navy border border-rotary-blue/50">
                   <div className="text-4xl mb-2">🚀</div>
                  <h3 className="text-xl text-rotary-yellow">Leadership</h3>
                  <p className="text-xs text-slate px-4 text-center mt-2">Empowering the leaders of tomorrow.</p>
                </div>

                {/* Face Left: Professional */}
                <div className="cube-face face-left bg-gradient-to-br from-light-navy to-dark-navy border border-rotary-yellow/50">
                   <div className="text-4xl mb-2">💼</div>
                  <h3 className="text-xl text-rotary-yellow">Growth</h3>
                  <p className="text-xs text-slate px-4 text-center mt-2">Skills for a successful career.</p>
                </div>
              </div>
            </div>
          </FadeInSection>

        </div>
      </section>

      {/* Stats / Highlights Section */}
      <section className="bg-light-navy py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">
                <Counter end={50} suffix="+" />
              </div>
              <p className="text-sm text-rotary-yellow uppercase tracking-wider font-bold">Members</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">
                <Counter end={20} suffix="+" />
              </div>
              <p className="text-sm text-rotary-yellow uppercase tracking-wider font-bold">Projects</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">
                <Counter end={1000} suffix="+" />
              </div>
              <p className="text-sm text-rotary-yellow uppercase tracking-wider font-bold">Lives Touched</p>
            </div>
             <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">
                <Counter end={5} suffix="+" />
              </div>
              <p className="text-sm text-rotary-yellow uppercase tracking-wider font-bold">Awards</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
