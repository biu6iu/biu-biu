export interface LinkRef {
  href: string;
  text: string;
}

export type TimelineLine = { text: string } | { prefix: string; links: LinkRef[] };

export interface TimelineEntry {
  date: string;
  title: string;
  lines: TimelineLine[];
}

export const EDUCATION: TimelineEntry[] = [
  {
    date: '2024 — Present',
    title: 'The University of Melbourne',
    lines: [
      { text: 'BSci majoring in Computing and Software Systems | Concurrent Diploma in Mathematics' },
      {
        prefix: 'CS courses:',
        links: [
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/comp30026', text: 'Models of Computation' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/comp30022', text: 'IT Project' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/swen30006', text: 'Software Modelling and Design' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/comp30027', text: 'Machine Learning' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/swen20003', text: 'Object Oriented Software Development' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/info20003', text: 'Database Systems' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/comp10002', text: 'Foundations of Algorithms' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/comp10001', text: 'Foundations of Computing' },
        ],
      },
      {
        prefix: 'Maths courses:',
        links: [
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/mast20005', text: 'Statistics' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/mast20026', text: 'Real Analysis' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/mast20006', text: 'Probability for Statistics' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/mast10006', text: 'Calculus 2' },
          { href: 'https://handbook.unimelb.edu.au/2026/subjects/mast10007', text: 'Linear Algebra' },
        ],
      },
    ],
  },
  {
    date: '2025',
    title: 'Shanghai Jiaotong University',
    lines: [
      { text: 'Exchange semester' },
      {
        prefix: 'Courses:',
        links: [
          { href: 'https://www.ji.sjtu.edu.cn/academics/courses/courses-by-number/course-info/?id=73561', text: 'Data Structures and Algorithms' },
          { href: 'https://www.ji.sjtu.edu.cn/academics/courses/courses-by-number/course-info/?id=241', text: 'Discrete Mathematics' },
          { href: 'https://www.ji.sjtu.edu.cn/academics/courses/courses-by-number/course-info/?id=75316', text: 'Data Science and Analytics using Python' },
        ],
      },
    ],
  },
  {
    date: '2018 — 2023',
    title: 'Kristin School',
    lines: [{ text: 'Completed the IB Diploma' }],
  },
];

export const EXPERIENCE: TimelineEntry[] = [
  {
    date: '2026',
    title: 'Software Engineer at Partners In Planning',
    lines: [{ text: 'Automation' }],
  },
  {
    date: '2026',
    title: 'Research Intern at Chinese University of Hong Kong, Shenzhen',
    lines: [{ text: 'Building machine learning models to predict MOF structures' }],
  },
  {
    date: '2025 - 2026',
    title: 'Backend Developer at Circula',
    lines: [{ text: 'Building, maintaining and testing APIs for Circula' }],
  },
  {
    date: '2025',
    title: 'Web Developer at HackMelbourne',
    lines: [{ prefix: 'Worked on', links: [{ href: 'https://hack.melbourne', text: 'hack.melbourne' }] }],
  },
];

export const EXTRACURRICULARS: TimelineEntry[] = [
  {
    date: '2026-',
    title: 'President of the Data Science Students Society at UniMelb',
    lines: [{text: 'Led a 60+ member committee across six subcommittees (education, industry, events, marketing, HR, and products)' },
            {text: 'Coordinated initiatives across the society, worked closely with subcommittee leads to translate ideas into success whilst ensuring effective delegation, communication, and execution'},
            {text: 'Oversaw the planning and delivery of diverse events including datathons, educational workshops, networking events, and social events, reaching over 500+ students'},
    ],
  },
  {
    date: '2025',
    title: 'Events Co-ordinator at Melbourne University Racing',
    lines: [{text: 'Planned and coordinated a range of events including trivia nights, educational workshops, F1 watch parties, and internal committee events, managing logistics and execution from initial planning through to delivery' },
            {text: 'Applied risk management and contingency planning to identify potential issues in advance and develop practical solutions to ensure smooth event delivery'},
            {text: 'Liaised with external businesses to explore event opportunities and partnerships, strengthening communication and stakeholder management skills'},
    ],
  },
  {
    date: '2024',
    title: 'Media Director at HackMelbourne',
    lines: [{text: 'Led a team of 4 in handling media related tasks for HackMelbourne, including photographing and filming events, creating marketing material, and posting short form videos'},
            {text: 'Garnered over 15 million cummulative views during my time as media director, with the top video hitting 12 million views'},
            {text: 'Grew the Instagram account from 700 followers to 5000+ followers over the span of 1 year'}
    ],
  }
];
