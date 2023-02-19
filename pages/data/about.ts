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
    "My name is adam schlichtmann alsdkfjalk jalksdfjl ;asdjflk;asf jlasdfklsdjfk sjdflkjsd lkfsdklf sfjek slfajlekfj islkej lelcjlsjelej selse ksels e sleksl eksel ske lk k",
  hobbies: ["Curling", "Corgi", "Cooking", "Lake", "Golf"],
  location: "Fargo, ND",
  socials: {
    facebook: "https://www.facebook.com/",
    github: "https://github.com/Adam-Schlichtmann",
    twitter: "a",
    instagram: "a",
    reddit: "a",
    myWebsite: "www.adam.com",
  },
};
