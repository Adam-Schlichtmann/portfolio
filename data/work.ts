export type Work = {
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
      "Performed TypeScript conversion for multiple packages and apps.",
      "Mentored college students through their senior design projects.",
      "Communicated with 10+ team members during Agile meetings to inform product decisions about technical requirements, restrictions, and UI/UX flows, improving overall software solutions.",
      "Deployed custom GitHub Action Runners to improve action performance.",
      "Created self service two factor authentication portal.",
      "Built automation to handle access to company assets.",
      "Spearheaded test driven development movement to improve overall code quality",
      "Led UI rewrite of old app modules to improve UI/UX.",
    ],
    badges: ["React", "React Native", "TypeScript", "Git", "Agile", "Expo"],
    startDate: "May 2020",
    endDate: "Present",
  },
  {
    title: "Software Engineering Intern",
    company: "DMSi Software",
    description: [
      "Learned React and React Native through hands on experience with production lever code.",
      "Practiced problem solving through a multitude of small projects to improve DX for fellow team members.",
      "Participated in rewrite of legacy mobile application to React Native.",
      "Took over as lead developer of user customizable offline first mobile application.",
      "Informed stakeholders and designers in UI/UX discussions.",
    ],
    badges: ["React", "React Native", "TypeScript", "Git", "Agile", "Expo"],
    startDate: "May 2019",
    endDate: "May 2020",
  },
];
