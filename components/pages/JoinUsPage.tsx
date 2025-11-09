
import React from 'react';

const JoinUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16 space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">Join Our Family</h1>
        <p className="text-rotary-yellow text-lg">Become a Part of Something Bigger</p>
      </section>

      {/* Membership Info */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-light-slate">Why Join Rotaract?</h2>
          <div>
            <h3 className="text-xl font-semibold text-rotary-yellow mb-2">Expand Your Network</h3>
            <p className="text-slate">Connect with a diverse group of young professionals and leaders from your community and around the world.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-rotary-yellow mb-2">Develop Your Skills</h3>
            <p className="text-slate">Take on leadership roles, manage projects, and learn valuable skills in public speaking, marketing, and event planning.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-rotary-yellow mb-2">Serve Your Community</h3>
            <p className="text-slate">Make a real, tangible impact through meaningful service projects that address local and global challenges.</p>
          </div>
        </div>
        <div>
          <img src="https://picsum.photos/seed/joinus/600/400" alt="Members collaborating" className="rounded-lg shadow-2xl" />
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-light-navy p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-light-slate mb-8 text-center">What Our Members Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark-navy p-6 rounded">
                <p className="text-slate italic">"Joining Rotaract was the best decision of my college life. I've grown so much as a person and made lifelong friends."</p>
                <p className="text-right text-light-slate font-semibold mt-4">- Anjali, Member</p>
            </div>
            <div className="bg-dark-navy p-6 rounded">
                <p className="text-slate italic">"The opportunities for leadership and community service are incredible. It's rewarding to see our projects make a difference."</p>
                <p className="text-right text-light-slate font-semibold mt-4">- Sameer, Past President</p>
            </div>
        </div>
      </section>

      {/* Application Form */}
      <section>
        <h2 className="text-3xl font-bold text-light-slate mb-8 text-center">Ready to Rise?</h2>
        <form className="max-w-2xl mx-auto bg-light-navy p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-light-slate mb-2">Full Name</label>
            <input type="text" id="name" name="name" className="w-full bg-dark-navy border border-slate/50 rounded-md py-2 px-3 text-light-slate focus:outline-none focus:ring-2 focus:ring-rotary-yellow" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-light-slate mb-2">Email Address</label>
            <input type="email" id="email" name="email" className="w-full bg-dark-navy border border-slate/50 rounded-md py-2 px-3 text-light-slate focus:outline-none focus:ring-2 focus:ring-rotary-yellow" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-light-slate mb-2">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="w-full bg-dark-navy border border-slate/50 rounded-md py-2 px-3 text-light-slate focus:outline-none focus:ring-2 focus:ring-rotary-yellow" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-light-slate mb-2">Why do you want to join?</label>
            <textarea id="message" name="message" rows={4} className="w-full bg-dark-navy border border-slate/50 rounded-md py-2 px-3 text-light-slate focus:outline-none focus:ring-2 focus:ring-rotary-yellow" required></textarea>
          </div>
          <button type="submit" className="w-full bg-rotary-yellow text-dark-navy font-bold py-3 px-4 rounded-md hover:bg-yellow-300 transition-colors duration-300">
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
};

export default JoinUsPage;
    