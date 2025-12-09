import { NavLink, Project, ProjectCategory, Event, GalleryImage, TeamMember } from './types';

// FIX: Removed trailing comma.
export const LOGO_URL = 'https://raw.githubusercontent.com/Mukeshmugi14/rotractwebsite/refs/heads/main/clublogo.jpg';

// FIX: Removed trailing comma.
export const HERO_BANNER_URL = 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/grouphoto.jpg?raw=true';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Projects' },
  { name: 'Events' },
  { name: 'Gallery' },
  { name: 'Join Us' },
  { name: 'Contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Project Green Chennai',
    category: ProjectCategory.Community,
    description: 'A massive tree plantation drive across various parts of Chennai to combat pollution and increase green cover.',
    impact: 'Planted over 1,000 saplings, involving 200+ volunteers.',
    imageUrl: 'https://picsum.photos/seed/green/600/400',
    isFlagship: true,
  },
  {
    id: 2,
    title: 'Career Guidance Conclave',
    category: ProjectCategory.Professional,
    description: 'A seminar series featuring industry experts to guide students and young professionals on career paths and skill development.',
    impact: 'Benefitted over 500 students from 10 different colleges.',
    imageUrl: 'https://picsum.photos/seed/career/600/400',
  },
  {
    id: 3,
    title: 'Radiance Fellowship Night',
    category: ProjectCategory.Club,
    description: 'An evening of fun, games, and bonding for all club members to strengthen fellowship and teamwork.',
    impact: 'Increased member engagement by 40%.',
    imageUrl: 'https://picsum.photos/seed/fellowship/600/400',
  },
  {
    id: 4,
    title: 'Global Friendship Exchange',
    category: ProjectCategory.International,
    description: 'A virtual cultural exchange program connecting with Rotaract clubs from across the globe to promote understanding and friendship.',
    impact: 'Partnered with clubs from 5 countries.',
    imageUrl: 'https://picsum.photos/seed/global/600/400',
  },
  {
    id: 5,
    title: 'Beach Cleanup Drive',
    category: ProjectCategory.Community,
    description: 'Organized a cleanup at Marina Beach, collecting tons of plastic waste and raising awareness about marine pollution.',
    impact: 'Collected over 500 kgs of waste.',
    imageUrl: 'https://picsum.photos/seed/beach/600/400',
  },
  {
    id: 6,
    title: 'LinkedIn Profile Building Workshop',
    category: ProjectCategory.Professional,
    description: 'A hands-on workshop to help members and guests create professional LinkedIn profiles for better career opportunities.',
    impact: 'Helped 100+ attendees enhance their professional online presence.',
    imageUrl: 'https://picsum.photos/seed/linkedin/600/400',
  },
];

export const EVENTS: Event[] = [
  {
    id: 1,
    title: 'Club Installation Ceremony 2025',
    date: 'August 15, 2025',
    location: 'Radiance Hall, Chennai',
    description: 'Join us for the official installation of the new board of directors for the upcoming Rotaract year.',
    isUpcoming: true,
    registrationLink: '#',
  },
  {
    id: 2,
    title: 'Blood Donation Camp',
    date: 'September 10, 2025',
    location: 'Community Center, T. Nagar',
    description: 'Be a hero, save a life. Participate in our annual blood donation drive.',
    isUpcoming: true,
    registrationLink: '#',
  },
  {
    id: 3,
    title: 'Diwali Celebration with Orphanage',
    date: 'October 25, 2024',
    location: 'Anbu Illam Orphanage',
    description: 'Celebrated the festival of lights with the children, distributing sweets, and organizing fun activities.',
    isUpcoming: false,
  },
  {
    id: 4,
    title: 'Annual Club Trip',
    date: 'December 20, 2024',
    location: 'Pondicherry',
    description: 'A memorable trip for club members to unwind and strengthen bonds.',
    isUpcoming: false,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, category: 'Events', src: 'https://picsum.photos/seed/g1/800/600', alt: 'Group photo at an event' },
  { id: 2, category: 'Projects', src: 'https://picsum.photos/seed/g2/800/600', alt: 'Members planting a tree' },
  { id: 3, category: 'Fellowship', src: 'https://picsum.photos/seed/g3/800/600', alt: 'Club members having fun' },
  { id: 4, category: 'Events', src: 'https://picsum.photos/seed/g4/800/600', alt: 'Speaker at a seminar' },
  { id: 5, category: 'Projects', src: 'https://picsum.photos/seed/g5/800/600', alt: 'Beach cleanup in action' },
  { id: 6, category: 'Fellowship', src: 'https://picsum.photos/seed/g6/800/600', alt: 'Team building activity' },
  { id: 7, category: 'Projects', src: 'https://picsum.photos/seed/g7/800/600', alt: 'Donating supplies' },
  { id: 8, category: 'Events', src: 'https://picsum.photos/seed/g8/800/600', alt: 'Award ceremony' },
  { id: 9, category: 'Projects', src: 'https://picsum.photos/seed/g9/800/600', alt: 'Working with community members' },
];


export const TEAM_MEMBERS: TeamMember[] = [
    {id: 1, name: 'Priya Sharma', role: 'President', imageUrl: 'https://picsum.photos/seed/priya/400/400'},
    {id: 2, name: 'Arjun Verma', role: 'Secretary', imageUrl: 'https://picsum.photos/seed/arjun/400/400'},
    {id: 3, name: 'Sneha Reddy', role: 'Treasurer', imageUrl: 'https://picsum.photos/seed/sneha/400/400'},
    {id: 4, name: 'Rohan Kumar', role: 'Community Service Director', imageUrl: 'https://picsum.photos/seed/rohan/400/400'},
    {id: 5, name: 'Anika Singh', role: 'Professional Development Director', imageUrl: 'https://picsum.photos/seed/anika/400/400'},
    {id: 6, name: 'Vikram Patel', role: 'Club Service Director', imageUrl: 'https://picsum.photos/seed/vikram/400/400'},
];