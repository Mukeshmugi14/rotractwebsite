
import React, { useState, useEffect, useRef } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: string; // e.g., '0ms', '200ms'
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = '0ms' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, we can stop observing to keep it visible
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: delay }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
