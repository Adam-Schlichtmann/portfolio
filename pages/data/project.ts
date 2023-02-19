export type Project = {
  name: string;
  description: string;
  github: string;
  googlePlayStore: string;
  appstore: string;
  badges: string[];
};

export const projects: Project[] = [
  {
    name: "Bingo App",
    description: "",
    github: "a",
    appstore: "here",
    googlePlayStore: "here",
    badges: ["React Native", "Expo", "TypeScript"],
  },
  {
    name: "Taskit",
    description: "Simple todo app with some advanced features",
    github: "",
    appstore: "here",
    googlePlayStore: "here",
    badges: ["React Native", "Expo", "Notifications", "SQL", "TypeScript"],
  },
  {
    name: "Advent of Code 2022",
    description: "Advent of code 2022",
    github: "a",
    appstore: "",
    googlePlayStore: "",
    badges: ["Rust"],
  },
  {
    name: "Advent of Code 2021",
    description: "Advent of code 2021",
    github: "a",
    appstore: "",
    googlePlayStore: "",
    badges: ["Golang"],
  },
  {
    name: "Advent of Code 2020",
    description: "Advent of code 2020",
    github: "a",
    appstore: "",
    googlePlayStore: "",
    badges: ["TypeScript"],
  },
  {
    name: "Portfolio",
    description: "The website you are currently looking at",
    github: "a",
    appstore: "",
    googlePlayStore: "",
    badges: ["React", "Nuxt", "GitHub Actions", "GitHub Pages"],
  },
];
