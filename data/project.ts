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
    description:
      "Application to call out numbers for a game of Bingo. Allows for user preference theming",
    github: "https://github.com/Adam-Schlichtmann/bingo",
    appstore: "",
    googlePlayStore: "",
    badges: ["React Native", "Expo", "TypeScript", "Expo Speech"],
  },
  {
    name: "Taskit",
    description: "Simple todo app with some advanced features",
    github: "https://github.com/Adam-Schlichtmann/timed-tasks",
    appstore: "",
    googlePlayStore: "",
    badges: ["React Native", "Expo", "Notifications", "SQL", "TypeScript"],
  },
  {
    name: "Advent of Code 2022",
    description: "Advent of code 2022",
    github: "https://github.com/Adam-Schlichtmann/AoC-2022",
    appstore: "",
    googlePlayStore: "",
    badges: ["Rust"],
  },
  {
    name: "Advent of Code 2021",
    description: "Advent of code 2021",
    github: "https://github.com/Adam-Schlichtmann/AoC-2021",
    appstore: "",
    googlePlayStore: "",
    badges: ["Golang"],
  },
  {
    name: "Advent of Code 2020",
    description: "Advent of code 2020",
    github: "https://github.com/Adam-Schlichtmann/AoC-2020",
    appstore: "",
    googlePlayStore: "",
    badges: ["TypeScript"],
  },
  {
    name: "Portfolio",
    description: "The website you are currently looking at!",
    github: "https://github.com/Adam-Schlichtmann/portfolio",
    appstore: "",
    googlePlayStore: "",
    badges: ["React", "Next", "GitHub Actions", "GitHub Pages", "TypeScript"],
  },
];
