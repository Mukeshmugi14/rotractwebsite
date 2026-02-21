
import React from 'react';
import { Page } from '../types';
import { LOGO_URL } from '../constants';
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from './icons/SocialIcons';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const quickLinks: Page[] = ['Home', 'Projects', 'Team', 'Events', 'Contact'];

  return (
    <footer className="bg-light-navy text-slate">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
               <img src={LOGO_URL} alt="Rotaract Club of Chennai Radiance Raisers Logo" className="h-14 w-14 rounded-full object-cover" />
              <h3 className="text-xl font-bold text-light-slate">Rotaract Club of Chennai Radiance Raisers</h3>
            </div>
            <p className="text-sm">Rotary Club of Chennai Radiance Family, RID 3233.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-light-slate mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link}>
                  <button onClick={() => setCurrentPage(link)} className="text-sm hover:text-rotary-yellow transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-light-slate mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-slate hover:text-rotary-yellow transition-colors"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn" className="text-slate hover:text-rotary-yellow transition-colors"><LinkedinIcon /></a>
              <a href="#" aria-label="WhatsApp" className="text-slate hover:text-rotary-yellow transition-colors"><WhatsAppIcon /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Rotaract Club of Chennai Radiance Raisers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
