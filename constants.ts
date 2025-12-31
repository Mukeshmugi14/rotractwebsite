
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
    description: 'Book Sharing & develop the book reading habit and gain valuable knowledege from books.',
    longDescription: 'Book Bond is a reading-engagement initiative implemented to cultivate consistent reading habits and build a community of shared learning. As part of the project, participants brought a book they had read and described its theme, message, and why it mattered to them. Other participants then expressed interest in the book by giving a thoughtful reason for why they wished to read it next. The participant who provided the most meaningful or compelling reason received the book, encouraging attentive listening, reflection, and purposeful reading choices. To make the exchange more personal and memorable, we gifted handmade personalised bookmarks to each book recipient. Every month with a new BOOK BOND CHAPTER, these interactive sharing circles, discussions, and reflections, it creates a collaborative reading culture that promotes curiosity, critical thinking, communication skills, and lifelong learning..',
    Frequency: 'Monthly',
    location: 'Blue Dot, T.Nagar',
    impact: 'Benefitted 20+ Club Members Gaining Knowledge, Vocabularies Self Development.',
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
    description: 'This event specifically for funs and entertainment. To relief our stress and to entertain everyone.',
    longDescription: '"Sunrise Party was a fun-filled Club Service initiative designed to help members unwind, relieve stress, and enjoy a refreshing start to the day together. The event brought members together early in the morning to witness a beautiful sunrise, accompanied by light activities, laughter, and shared moments of joy. By creating a relaxed and cheerful atmosphere, the Sunrise Party strengthened team bonding, encouraged meaningful interactions, and helped members build memorable experiences beyond routine club activities.',
    date: '21/09/2025',
    location: 'Besant Nagar beach',
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
    description: 'A Group Discussion and Debate about Modern freedom and politics with the Rotaract club of Navi Mumbai Samaritans. .',
    longDescription: '"Independence 2.0 was a collaborative project exploring the concept of new age freedom, conducted with members of our club and the Rotaract Club of Navi Mumbai Samaritans, RID 3142. The session was moderated by Ms. Aswathi Sebastian, a professional social worker, who guided the discussion and encouraged thoughtful reflection. Participants engaged in a meaningful group discussion, sharing diverse perspectives on what freedom means in today’s world—ranging from digital autonomy and mental well-being to social expression and evolving personal rights. This collaboration strengthened international service bonds by bringing together members from different districts to exchange ideas and cultural perspectives. It fostered unity, shared learning, and a broader understanding of global viewpoints on freedom, while also encouraging sustained partnerships for future international initiatives.',
    date: 'Aug 15, 2025',
    location: 'Virtual (Zoom)',
    impact: ' A collaborative project exploring the concept of new age freedom Across the other Part of India.',
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
    description: 'Mind Over Miles is a mental-health awareness walkathon that brings people together in motion and solidarity, breaking stigma with every step and reminding the community that healing begins when we walk the journey together',
    longDescription: '"Mind Over Miles: Mental Health WalkathonMind Over Miles was a community walkathon aimed at promoting mental health awareness and emotional well-being among youth. Chief guests Dr. Shiva Prakash Srinivasan (SCARF), Dr. Rakesh Chander Kalaivanan, and Dr. A.C.N. Aruna (Jeeva Rakshai Mental Health Wellness Centre) addressed participants on mental resilience, emotional balance, and reducing stigma around seeking help.The event began with a Zumba warm-up, followed by a walkathon along Besant Nagar Beach, where over 50 participants—including students, Rotaractors, and the public—carried placards spreading messages of mental wellness. With support from Wellmore Mindcare and Akshayapala, the event created a warm, inclusive space for conversation, connection, and awareness.Mind Over Miles successfully encouraged youth to prioritise mental well-being, reminding everyone that when we walk for wellness, we walk for life.',
    date: '19/10/25',
    location: 'Besant nagar beach road',
    impact: 'Promoted mental health awareness and emotional well-being among youth.',
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
    description: '360* Employability simulation lab Face the Future – Ideathon, Group Discussion,Mock Interview and Career Readiness Drive',
    longDescription: 'Matrix Arena offered participants a complete hiring simulation through Aptitude Tests, Group Discussions, Technical Rounds, an Ideathon, and Mock HR Interviews—replicating real industry expectations and providing hands-on clarity and confidence. The event was led by a distinguished panel of HR professionals and industry experts from Yamaha Motors, Indium Software, Infosys, Goodium Tech, Venkata Beverages, and more, who provided personalised feedback at every stage.The Ideathon segment supported aspiring entrepreneurs, enabling them to pitch ideas to experienced judges from Infosys. A highlight of the event was when a chief resource person expressed interest in financially supporting one participant’s startup idea, demonstrating the real opportunities created through the platform.Benefitting 30 Rotaractors, Matrix Arena strengthened employability skills, enhanced interview readiness, and offered mentorship for both career and entrepreneurial pathways. Several participants secured jobs, internships, and startup support as a direct outcome of the initiative.',
    date: 'November 29, 2025',
    location: 'RV Towers, Guindy',
    impact: 'Helped 30+ attendees enhance their professional presence, Strengthened employability for Rotaractors; secured jobs and internships.',
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
    id: 12,
    title: 'LGT',
    category: ProjectCategory.Professional,
    description: "Lets grow Together, a peer Knowledge and Skill Sharing from club members",
    longDescription:'Let’s Grow Together is a peer-learning initiative that promotes collaborative skill-sharing and continuous growth among members. As part of this initiative, interactive sessions on graphic design, mental wellness & career decision-making, and portrait drawing were conducted by fellow members with professional expertise. These sessions emphasized hands-on learning, knowledge exchange, and holistic skill development.' ,
    Date: "Sep 2025 - May 2026",
    Phases: "Three",
    location: 'Virtual(G-meet)',
    impact: 'The initiative empowered members with practical skills, creative confidence, emotional intelligence, and professional readiness through peer-led learning.',
    imageUrl: 'https://picsum.photos/seed/linkedin/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/mat1.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/mat2.jpg?raw=true',
    ]
  },
  {
    id: 7,
    title: 'Duram',
    category: ProjectCategory.Community,
    description: 'Dhooram is a menstrual-awareness initiative that breaks silence and stigma, spreading knowledge, dignity, and confidence so every girl and woman can move through life without fear or shame',
    longDescription: '"This community service initiative was conducted at the Narikuravar Colony in Pallavaram, focusing on creating open and honest conversations around menstrual health among an underprivileged community where traditional practices often limit personal hygiene—such as the custom of not wearing underwear. Recognising these cultural realities, the project aimed to introduce safe, practical, and culturally sensitive hygiene practices.Awareness sessions were held to help women understand their menstrual cycle, the importance of maintaining hygiene, and methods they can adopt in their daily lives to stay healthy and comfortable. To deepen understanding and engagement, a street play was performed, using visual storytelling to break stigma and make essential information more accessible.As part of the initiative, we distributed sanitary kits—each containing a cotton cloth, sanitary napkin, soap, and shampoo—to support the women’s hygiene needs. These kits were thoughtfully prepared by club members, ensuring dignity, care, and respect in every detail.This project served as a meaningful step toward improving menstrual awareness, promoting healthier practices, and empowering women within the community through compassion, education, and practical support.',
    date: '22/11/25',
    location: 'Narikuravar colony,pallavaram',
    impact: 'This project Empowered women within the community through compassion, menstrual-awareness, education, and practical support',
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
    description: 'The "மீண்டும் பள்ளிக்கு போகலாம்" project is made for Bring school memories and good bonding between with other members .where we got to experience  typical school day looks like. The trip aimed to learning something new and create a good memories on learning experience and us a glimpse into the daily life of Members.',
    longDescription: '"மீண்டும் பள்ளிக்கு போகலாம் was a club service initiative designed to rekindle school memories and strengthen bonding among members by recreating the experience of a typical school day. Members dressed as students in uniforms, while some took on playful roles such as teachers, subject heads, and even the principal, creating an immersive and nostalgic atmosphere.As part of the experience, the club organised a one-day excursion to the Egmore Museum, offering participants the chance to learn, explore, and relive the excitement of a classic school field trip. The visit blended fun and learning, giving members a glimpse into art, culture, and history while building memorable shared experiences.By combining nostalgic school-life elements with an educational outing, the project fostered camaraderie, enriched learning, and created enduring memories within the club.',
    date: 'Oct 01, 2025',
    location: 'Egmore Museum',
    impact: 'Strengthened club bonding for participating members.',
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
    category: ProjectCategory.Professional,
    description: 'Club Orientation and Board Official training session ',
    longDescription: '"Kai Mann Alavu was a structured club orientation and learning seminar designed to equip Rotaract members and board officials with a clear understanding of the organisation and their responsibilities. Held at Bluedot Academy, the program featured four distinguished speakers from the District Council who provided insights into Rotaract’s core values, operations, avenues of service, and leadership expectations.The seminar helped members understand how the club functions, the significance of their individual roles, and how to work collaboratively toward club goals. An engaging ice-breaking session further strengthened bonding, encouraged participation, and built team spirit among members.By offering both knowledge and connection, Kai Mann Alavu ensured that members—especially board officials—were well-prepared, confident, and aligned with the vision of the Rotaract movement for the year ahead.',
    date: 'Augest 08, 2025',
    location: 'Blue Dot Academy, T.Nagar',
    impact: 'Ensured that members—especially board officials—were well-prepared, confident, and aligned with the vision of the Rotaract movement for the year ahead',
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
    category: ProjectCategory.Community,
    description: 'LitRide is a high-impact awareness initiative carried out on the occasion of International Literacy Day',
    longDescription: 'LitRide is a high-impact awareness initiative carried out on the occasion of International Literacy Day, bringing together a team of 10 passionate riders on a 600 km journey from Porur, Chennai, to Karnataka. The mission of the ride was simple yet powerful—to spread the message of literacy and inspire communities to value education as a tool for empowerment.Throughout the route, riders engaged with local communities, distributed awareness materials, and sparked conversations on the importance of reading, learning, and accessible education for all. The long-distance ride symbolised determination, purpose, and the collective responsibility to uplift society through literacy.By turning the road into a moving platform for awareness, LitRide served as a reminder that progress begins with education—and every kilometre ridden was a step toward a more informed and empowered future.',
    date: 'October 10, 2024',
    location: 'Virtual (Zoom)',
    impact: ' Riders engaged with local communities, distributed awareness materials, and sparked conversations on the importance of reading, learning, and accessible education for all',
    imageUrl: 'https://picsum.photos/seed/global/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/lit1.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/li12.jpg?raw=true'
    ]
  },
  {
    id: 14,
    title: 'Theera aasai padhai-1',
    category: ProjectCategory.Community,
    description: 'Theera Aasai – 1 is a wish-fulfilling initiative that brings small dreams to life for those in need, turning heartfelt desires into moments of joy that linger long after the day is over',
    longDescription: 'This phase unfolded at Don Bosco Anbu Illam Children’s Orphanage, where our club members spent heartfelt, meaningful time with the wonderful children there. After sharing stories, laughter, and small moments of joy, we invited each child to write down their wishes in letters. These collected wishes became the heart of the project—a promise we carry forward with care, ready to turn their dreams into reality in the next phase.',
    date: 'November 10, 2025',
    location: 'Bosco illam',
    impact: 'Giving Orphanage children a voice for their dreams and transforming compassion into a committed promise for future action.',
    imageUrl: 'https://picsum.photos/seed/global/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/lit1.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/li12.jpg?raw=true'
    ]
  },
   {
    id: 15,
    title: 'Project PAUSE ',
    category: ProjectCategory.Club,
    description: "Project PAUSE! 7-Day Self-Care ChallengeProject PAUSE! was a week-long wellness initiative designed to help members slow down, reset, and prioritise their physical, emotional, and mental well-being." ,
    longDescription: "Project PAUSE! 7-Day Self-Care ChallengeProject PAUSE! was a week-long wellness initiative designed to help members slow down, reset, and prioritise their physical, emotional, and mental well-being. Conducted entirely through WhatsApp, the challenge introduced one simple self-care task each day—hydration, decluttering, nature connection, digital detox, movement, gratitude, and self-compassion.Members actively participated by completing daily tasks, sharing photos and reflections, and encouraging one another throughout the journey. Each activity was crafted to build healthier habits, reduce stress, and strengthen mindfulness in small, meaningful steps.The challenge created a supportive space for personal growth, community bonding, and emotional awareness. By the end of seven days, participants reported feeling lighter, calmer, and more connected—to themselves and to each other.",
    date: '18/11/2025 - 24/11/25',
    Platform: 'Whatsapp',
    impact: 'The challenge helped members build mindful self-care habits, reduce stress, and feel more connected to themselves and the community.',
    imageUrl: 'https://picsum.photos/seed/fellowship/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/scl1.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/scl2.jpg?raw=true',
       'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/scl3.jpg?raw=true'
    ]
  },
   {
    id: 16,
    title: 'Outlive Yourself',
    category: ProjectCategory.International,
    description: 'Organ donation awareness drive',
    longDescription: "Outlive Yourself was an international service initiative focused on spreading awareness about the importance of organ donation.  The session aimed to educate participants on the life-saving impact of organ donation, debunk myths, and encourage informed decision-making. This project was collaboratively hosted by the Rotaract Club of Delhi Genesis Midwest, Rotaract Club of Delhi Elite, Rotaract Club of Meraki, and the Interact Club of Tagore International School, Vasant Vihar, with active participation from RAC Chennai Radiance Raisers. Through expert insights, interactive discussions, and sensitisation activities, the session fostered a deeper understanding of organ donation as a compassionate act that can give others a second chance at life. The collaboration strengthened international ties, encouraged youth engagement in global humanitarian causes, and reflected the collective commitment of Rotaractors toward building a more aware and empathetic society.",
    date: 'Nov 6, 2025',
    location: 'Virtual (G-meet)',
    impact: 'The initiative inspired awareness, empathy, and informed perspectives on organ donation while strengthening international collaboration among youth.',
    imageUrl: 'https://picsum.photos/seed/global/600/400',
    gallery: [
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/ind1.jpg?raw=true',
      'https://github.com/Mukeshmugi14/rotractwebsite/blob/main/components/ind2.jpg?raw=true'
    ]
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
