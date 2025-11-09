
import React from 'react';
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from '../icons/SocialIcons';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">Get In Touch</h1>
        <p className="text-rotary-yellow text-lg">We'd love to hear from you. Let's connect!</p>
      </section>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-light-navy p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-light-slate mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-light-slate mb-2">Your Name</label>
              <input type="text" id="contact-name" name="name" className="w-full bg-dark-navy border border-slate/50 rounded-md py-2 px-3 text-light-slate focus:outline-none focus:ring-2 focus:ring-rotary-yellow" required />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-light-slate mb-2">Your Email</label>
              <input type="email" id="contact-email" name="email" className="w-full bg-dark-navy border border-slate/50 rounded-md py-2 px-3 text-light-slate focus:outline-none focus:ring-2 focus:ring-rotary-yellow" required />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-light-slate mb-2">Message</label>
              <textarea id="contact-message" name="message" rows={5} className="w-full bg-dark-navy border border-slate/50 rounded-md py-2 px-3 text-light-slate focus:outline-none focus:ring-2 focus:ring-rotary-yellow" required></textarea>
            </div>
            <button type="submit" className="w-full bg-rotary-yellow text-dark-navy font-bold py-3 px-4 rounded-md hover:bg-yellow-300 transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
            <div className="bg-light-navy p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-light-slate mb-4">Contact Information</h2>
                <div className="space-y-4">
                    <p className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-rotary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        <span>radiance.risers@gmail.com</span>
                    </p>
                    <div className="flex space-x-4 pt-4">
                        <a href="#" aria-label="Instagram" className="text-slate hover:text-rotary-yellow transition-colors"><InstagramIcon /></a>
                        <a href="#" aria-label="LinkedIn" className="text-slate hover:text-rotary-yellow transition-colors"><LinkedinIcon /></a>
                        <a href="#" aria-label="WhatsApp" className="text-slate hover:text-rotary-yellow transition-colors"><WhatsAppIcon /></a>
                    </div>
                </div>
            </div>
            <div className="bg-light-navy p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-light-slate mb-4">Meeting Location</h2>
                <div className="aspect-w-16 aspect-h-9 bg-dark-navy rounded-md flex items-center justify-center">
                    <p className="text-slate">Google Map Placeholder</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
    