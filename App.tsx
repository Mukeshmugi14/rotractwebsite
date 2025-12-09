
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutUsPage from './components/pages/AboutUsPage';
import ProjectsPage from './components/pages/ProjectsPage';
import EventsPage from './components/pages/EventsPage';
import GalleryPage from './components/pages/GalleryPage';
import ContactPage from './components/pages/ContactPage';
import TeamPage from './components/pages/TeamPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'About':
        return <AboutUsPage />;
      case 'Team':
        return <TeamPage />;
      case 'Projects':
        return <ProjectsPage />;
      case 'Events':
        return <EventsPage />;
      case 'Gallery':
        return <GalleryPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
