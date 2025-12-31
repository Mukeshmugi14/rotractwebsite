

export type Page = 'Home' | 'About' | 'Team' | 'Projects' | 'Gallery' | 'Contact';

export interface NavLink {
  name: Page;
}

export enum ProjectCategory {
  Community = 'Community Service',
  Professional = 'Professional Development',
  Club = 'Club Service',
  International = 'International Service'
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  impact: string;
  imageUrl: string;
  isFlagship?: boolean;
  // New detailed fields
  longDescription?: string;
  gallery?: string[];
  date?: string;
  location?: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  isUpcoming: boolean;
  registrationLink?: string;
}

export interface GalleryImage {
  id: number;
  category: string;
  src: string;
  alt: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  category: 'Core Board' | 'Board of Directors' | 'Avenue Directors' | 'Club Members';
  imageUrl: string;
}
