
import React from 'react';
import { EVENTS } from '../../constants';
import { Event } from '../../types';

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="bg-light-navy p-6 rounded-lg shadow-lg flex flex-col">
    <div className="flex-grow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-light-slate">{event.title}</h3>
        {event.isUpcoming && <span className="text-xs bg-green-500/20 text-green-300 font-bold px-2 py-1 rounded-full">UPCOMING</span>}
      </div>
      <p className="text-sm text-rotary-yellow font-semibold mb-1">{event.date}</p>
      <p className="text-sm text-slate mb-4">{event.location}</p>
      <p className="text-slate text-sm">{event.description}</p>
    </div>
    {event.isUpcoming && event.registrationLink && (
      <a
        href={event.registrationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block w-full text-center bg-rotary-yellow text-dark-navy font-bold py-2 px-4 rounded-md hover:bg-yellow-300 transition-colors duration-300"
      >
        Register Now
      </a>
    )}
  </div>
);

const EventsPage: React.FC = () => {
  const upcomingEvents = EVENTS.filter(e => e.isUpcoming);
  const pastEvents = EVENTS.filter(e => !e.isUpcoming);

  return (
    <div className="container mx-auto px-6 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">Club Events</h1>
        <p className="text-rotary-yellow text-lg">Connect, Learn, and Serve with Us</p>
      </section>

      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-light-slate mb-8">Upcoming Events</h2>
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-slate text-center">No upcoming events scheduled. Stay tuned!</p>
        )}
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-3xl font-bold text-light-slate mb-8">Past Events</h2>
        {pastEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-slate text-center">No past events to show.</p>
        )}
      </section>
    </div>
  );
};

export default EventsPage;
    