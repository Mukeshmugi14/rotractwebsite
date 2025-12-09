
import { NavLink, Project, ProjectCategory, Event, GalleryImage, TeamMember } from './types';

export const LOGO_URL = 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/clublogo.jpg?raw=true';

// Keeping the single URL for backward compatibility if needed, but primarily using the array below
export const HERO_BANNER_URL = 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/grouphoto.jpg?raw=true';

export const HERO_BANNER_IMAGES = [
  'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/grouphoto.jpg?raw=true',
  'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/ban2.jpg?raw=true', // Group/Volunteering
  'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/ban3.jpg?raw=true'  // Teamwork/Hands
];

export const NAV_LINKS: NavLink[] = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Team' },
  { name: 'Projects' },
  { name: 'Events' },
  { name: 'Gallery' },
  { name: 'Contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Sathyaudhayam',
    category: ProjectCategory.Club,
    description: 'A massive tree plantation drive across various parts of Chennai to combat pollution and increase green cover.',
    longDescription: 'Project Green Chennai was conceived with the goal of restoring the green cover of our city which was lost due to urbanization and recent cyclones. Over the course of 3 months, our volunteers identified suitable locations in schools, colleges, and public parks. We partnered with local NGOs to source native saplings that are resilient to the local climate. The drive not only involved planting but also setting up a mechanism for regular watering and maintenance, ensuring a survival rate of over 85%. This initiative has helped in creating micro-habitats for local birds and reducing the urban heat island effect in the targeted areas.',
    date: 'Aug 9, 2025',
    location: 'Multiple locations across Chennai',
    impact: 'Planted over 1,000 saplings, involving 200+ volunteers.',
    imageUrl: 'https://picsum.photos/seed/green/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/ban3.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/ins1.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/ins2.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/ins3.jpg?raw=true'
    ],
    isFlagship: true,
  },
  {
    id: 2,
    title: 'Book Bond',
    category: ProjectCategory.Professional,
    description: 'A seminar series featuring industry experts to guide students and young professionals on career paths and skill development.',
    longDescription: 'The Career Guidance Conclave bridged the gap between academic learning and industry expectations. We invited HR leaders, entrepreneurs, and technical experts from top MNCs to deliver keynote sessions and conduct panel discussions. Topics covered included resume building, personal branding on LinkedIn, emerging technologies (AI/ML), and soft skills mastery. Students from over 10 different engineering and arts colleges participated, gaining direct access to mentorship and internship opportunities.',
    date: 'August 20, 2024',
    location: 'Anna University Auditorium',
    impact: 'Benefitted over 500 students from 10 different colleges.',
    imageUrl: 'https://picsum.photos/seed/career/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/bb4.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/bb3.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/bb2.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/bb1.jpg?raw=true'
    ]
  },
  {
    id: 9,
    title: 'Sunrise Party',
    category: ProjectCategory.Club,
    description: 'An evening of fun, games, and bonding for all club members to strengthen fellowship and teamwork.',
    longDescription: 'Radiance Fellowship Night is our signature internal event designed to break the ice between new inductees and senior members. The evening featured team-building activities, a talent showcase, and a campfire dinner. Such events are crucial for maintaining the high morale of the club and fostering deep friendships that translate into better teamwork during service projects.',
    date: 'September 05, 2024',
    location: 'East Coast Road Resort',
    impact: 'Increased member engagement by 40%.',
    imageUrl: 'https://picsum.photos/seed/fellowship/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/sun1.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/sun2.jpg?raw=true',
       'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/sun3.jpg?raw=true'
    ]
  },
  {
    id: 4,
    title: 'Independenceday 2.0',
    category: ProjectCategory.International,
    description: 'A virtual cultural exchange program connecting with Rotaract clubs from across the globe to promote understanding and friendship.',
    longDescription: 'In an increasingly connected world, understanding different cultures is vital. Our Global Friendship Exchange involved virtual joint meetings with Rotaract clubs from Brazil, Germany, Sri Lanka, and Japan. Members shared insights about their country\'s traditions, food, and Rotaract projects. This exchange led to the signing of "Twin Club Agreements" to collaborate on future international service projects.',
    date: 'October 10, 2024',
    location: 'Virtual (Zoom)',
    impact: 'Partnered with clubs from 5 countries.',
    imageUrl: 'https://picsum.photos/seed/global/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/ind1.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/ind2.jpg?raw=true'
    ]
  },
  {
    id: 5,
    title: 'Mind Over Miles',
    category: ProjectCategory.Community,
    description: 'Organized a cleanup at Marina Beach, collecting tons of plastic waste and raising awareness about marine pollution.',
    longDescription: 'We woke up early on a Sunday morning to tackle the plastic waste issue at Marina Beach. Equipped with gloves and bags, our team, along with local residents, combed through a 2km stretch of the coastline. We segregated the waste into recyclables and non-recyclables. The event concluded with an awareness session for beachgoers about the harmful effects of microplastics on marine life.',
    date: 'November 12, 2024',
    location: 'Marina Beach, Chennai',
    impact: 'Collected over 500 kgs of waste.',
    imageUrl: 'https://picsum.photos/seed/beach/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/mind1.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/mind2.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/mind3.jpg?raw=true'
    ]
  },
  {
    id: 6,
    title: 'Matrix Arena',
    category: ProjectCategory.Professional,
    description: 'A hands-on workshop to help members and guests create professional LinkedIn profiles for better career opportunities.',
    longDescription: 'Recognizing the importance of digital presence, this workshop provided a step-by-step guide to optimizing LinkedIn profiles. We covered headline writing, summary crafting, skill endorsement strategies, and networking etiquette. Participants had their profiles reviewed live by experts and received personalized feedback to improve their visibility to recruiters.',
    date: 'December 02, 2024',
    location: 'Workafella, Teynampet',
    impact: 'Helped 100+ attendees enhance their professional online presence.',
    imageUrl: 'https://picsum.photos/seed/linkedin/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/mat1.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/mat2.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/mat3.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/mat4.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/mat5.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/mat6.jpg?raw=true'
    ]
  },
  {
    id: 7,
    title: 'Duram',
    category: ProjectCategory.Community,
    description: 'Organized a cleanup at Marina Beach, collecting tons of plastic waste and raising awareness about marine pollution.',
    longDescription: 'We woke up early on a Sunday morning to tackle the plastic waste issue at Marina Beach. Equipped with gloves and bags, our team, along with local residents, combed through a 2km stretch of the coastline. We segregated the waste into recyclables and non-recyclables. The event concluded with an awareness session for beachgoers about the harmful effects of microplastics on marine life.',
    date: 'November 12, 2024',
    location: 'Marina Beach, Chennai',
    impact: 'Collected over 500 kgs of waste.',
    imageUrl: 'https://picsum.photos/seed/beach/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/dura1.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/dura2.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/dura3.jpg?raw=true'
    ]
  },
  {
    id: 8,
    title: 'Meendum Paliku Pogalam',
    category: ProjectCategory.Club,
    description: 'An evening of fun, games, and bonding for all club members to strengthen fellowship and teamwork.',
    longDescription: 'Radiance Fellowship Night is our signature internal event designed to break the ice between new inductees and senior members. The evening featured team-building activities, a talent showcase, and a campfire dinner. Such events are crucial for maintaining the high morale of the club and fostering deep friendships that translate into better teamwork during service projects.',
    date: 'September 05, 2024',
    location: 'East Coast Road Resort',
    impact: 'Increased member engagement by 40%.',
    imageUrl: 'https://picsum.photos/seed/fellowship/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/scl1.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/scl2.jpg?raw=true',
       'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/scl3.jpg?raw=true'
    ]
  },
  {
    id: 3,
    title: 'Kaai Maanu Aalavu',
    category: ProjectCategory.Club,
    description: 'An evening of fun, games, and bonding for all club members to strengthen fellowship and teamwork.',
    longDescription: 'Radiance Fellowship Night is our signature internal event designed to break the ice between new inductees and senior members. The evening featured team-building activities, a talent showcase, and a campfire dinner. Such events are crucial for maintaining the high morale of the club and fostering deep friendships that translate into better teamwork during service projects.',
    date: 'September 05, 2024',
    location: 'East Coast Road Resort',
    impact: 'Increased member engagement by 40%.',
    imageUrl: 'https://picsum.photos/seed/fellowship/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/ori1.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/ori2.jpg?raw=true',
       'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/ori3.jpg?raw=true'
    ]
  },
   {
    id: 10,
    title: 'Litride',
    category: ProjectCategory.International,
    description: 'A virtual cultural exchange program connecting with Rotaract clubs from across the globe to promote understanding and friendship.',
    longDescription: 'In an increasingly connected world, understanding different cultures is vital. Our Global Friendship Exchange involved virtual joint meetings with Rotaract clubs from Brazil, Germany, Sri Lanka, and Japan. Members shared insights about their country\'s traditions, food, and Rotaract projects. This exchange led to the signing of "Twin Club Agreements" to collaborate on future international service projects.',
    date: 'October 10, 2024',
    location: 'Virtual (Zoom)',
    impact: 'Partnered with clubs from 5 countries.',
    imageUrl: 'https://picsum.photos/seed/global/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/lit1.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/li12.jpg?raw=true'
    ]
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
  { id: 1, category: 'Events', src: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/gal9.jpg?raw=true', alt: 'Group photo at an Assembly' },
  { id: 2, category: 'Projects', src: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/gal1.jpg?raw=true', alt: 'Club Instalation' },
  { id: 3, category: 'Fellowship', src: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/gal5.jpg?raw=true', alt: 'Club First Project Day' },
  { id: 4, category: 'Events', src: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/gal6.jpg?raw=true', alt: 'Members Have Fun' },
  { id: 5, category: 'Projects', src: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/gal3.jpg?raw=true', alt: 'Lead Event' },
  { id: 6, category: 'Fellowship', src: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/gal8.jpg?raw=true', alt: 'Group 1' },
  { id: 7, category: 'Projects', src: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/gal7.jpg?raw=true', alt: 'District Instalation' },
  { id: 8, category: 'Events', src: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/gal4.jpg?raw=true', alt: 'closed Door Meet' },
  { id: 9, category: 'Projects', src: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/gal2.jpg?raw=true', alt: 'CRR' },
];


export const TEAM_MEMBERS: TeamMember[] = [
    {id: 1, name: 'Rtr. Sathyapriya B', role: 'President', category: 'Core Board', imageUrl: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/pres.png?raw=true'},
    {id: 2, name: 'Rtr. Keerthivasan V', role: 'Secretary', category: 'Core Board', imageUrl: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/sec.jpg?raw=true'},
    {id: 3, name: 'Rtr. Shoban Kumar S', role: 'Vice President', category: 'Core Board', imageUrl: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/vice.jpg?raw=true'},
    {id: 4, name: 'Rtr. A. Gopinath', role: 'Sergeant At Arms', category: 'Core Board', imageUrl: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/sarge.jpg?raw=true'},
    {id: 5, name: 'Rtr. Priyadharshini K', role: 'Joint Secretary', category: 'Core Board', imageUrl: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/joinsec.jpg?raw=true'},
    {id: 6, name: 'Rtr. Dharshini Raju', role: 'Treasurer', category: 'Core Board', imageUrl: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/tres.jpg?raw=true'},
    {id: 7, name: 'Rtr. Logasree B', role: 'Community Service Director', category: 'Avenue Directors', imageUrl: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/com.jpg?raw=true'},
    {id: 8, name: 'Rtr. Mukesh M', role: 'Professional Service Director', category: 'Avenue Directors', imageUrl: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/prof.jpg?raw=true'},
    {id: 9, name: 'Rtr. Padma Priya', role: 'Club Service Director', category: 'Avenue Directors', imageUrl: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/club.jpg?raw=true'},
    {id: 10, name: 'Rtr. Mahibalan B', role: 'International Service Director', category: 'Avenue Directors', imageUrl: 'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/inte.jpg?raw=true'},
];
