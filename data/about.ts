export type About = {
  name: string;
  email: string;
  description: string;
  location: string;
  hobbies: string[];

  socials: {
    facebook: string;
    twitter: string;
    github: string;
    instagram: string;
    reddit: string;
    myWebsite: string;
  };
};

export const about: About = {
  name: "Adam Schlichtmann",
  email: "",
  description:
    "I am currently working as a mobile developer using React Native with Expo. My passion is problem solving and creating user friendly front end applications. I am a strong believer in test driven development and clean coding practices.",
  hobbies: ["Curling", "Cooking", "Corgi", "Golf", "Lake"],
  location: "Fargo, ND",
  socials: {
    facebook: "",
    github: "https://github.com/Adam-Schlichtmann",
    twitter: "",
    instagram: "",
    reddit: "",
    myWebsite: "https://adam-schlichtmann.github.io/portfolio/",
  },
};
