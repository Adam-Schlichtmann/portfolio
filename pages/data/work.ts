type Work = {
  title: string;
  company: string;
  description: string[];
  badges: string[];
  startDate: string;
  endDate: string;
};

export const work: Work[] = [
  {
    title: "Software Engineer",
    company: "DMSi Software",
    description: [
      "Architected complex reusable components for the shared design system to provide a consistent feel during advanced user interactions across the suite of four mobile applications.",
      "Administered thousands of code reviews, proposing algorithmic alternatives to improve app performance.",
      "Engineered two app modules in React Native to allow warehouse workers to quickly handle shipments.",
      "Spearheaded TypeScript conversion for multiple packages and apps.",
      "Conducted workshops on TypeScript, Git, and Testing for Accessibility to 50+ engineers in internal trainings.",
      "Communicated with 10+ team members during Agile meetings to inform product decisions about technical requirements, restrictions, and UI/UX flows, improving overall software solutions.",
      "Deployed several composite GitHub Actions and provided training to developers on best-practices.",
      "Led UI rewrite of old app modules to improve UX",
    ],
    badges: ["React", "React Native", "TypeScript", "Git", "Agile", "Expo"],
    startDate: "May 2019",
    endDate: "Present",
  },
  {
    title: "Mobile sales rep",
    company: "Best Buy",
    description: [
      "Help customers find a mobile phone",
      "Help customers find a mobile phone",
      "Help customers find a mobile phone",
      "Help customers find a mobile phone",
      "Help customers find a mobile phone",
      "Help customers find a mobile phone ",
      "Help customers find a mobile phone",
    ],
    badges: ["Problem solving", "Teamwork"],
    startDate: "May 2018",
    endDate: "August 2019",
  },
];
