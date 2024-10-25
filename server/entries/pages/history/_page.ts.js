const WORK_HISTORY = [
  {
    company: "DMSi Software",
    end: /* @__PURE__ */ new Date(),
    start: new Date(2024, 5, 1),
    tasks: [
      "Communicated with 10+ team members to inform product decisions about technical requirements, restrictions, and UI/UX flows, improving overall software solutions.",
      "Architected complex reusable components for the shared design system to provide a consistent feel during advanced user interactions across the suite of four mobile applications.",
      "Administered JavaScript to TypeScript conversion of multiple outdated mobile applications resulting in 100,000+ lines of code converted and an overall increase to developer experience.",
      "Implemented advanced features such as notifications, deep linking, calendars, and maps.",
      "Mentored and guided three teams of college students through a year long capstone project.",
      "Established 50+ company wide development standards to increase consistency across multiple teams and projects.",
      "Deployed custom GitHub Action Runners to double action performance and reduce costs.",
      "Spearheaded test driven development movement to improve overall code quality and work towards 100% coverage of business logic code.",
      "Developed material for and conducted 10+ technical interviews of prospective developers.",
      "Oversaw rewrite of outdated UI/UX flows to increase consistency and reuse across a suit of applications resulting in an overall decrease in lines of code.",
      "Saved 100s of hours of work through automation of repetitive tasks.",
      "Defined 5+ reusable automations for the building and deployment of mobile applications to the app stores.",
      "Constructed a self service two factor authentication management portal.",
      "Created bots to automate 4 steps of the onboarding/offboarding.",
      "Conducted thousands of code reviews, proposing alternatives to improve performance and code quality.",
      "Standardized onboarding process of new developers.",
      "Regularly analyzed external tools and dependencies for quality, usability, and security."
    ],
    title: "Sr. Software Software Engineer"
  },
  {
    company: "DMSi Software",
    end: new Date(2024, 5, 1),
    start: new Date(2019, 4, 15),
    tasks: ["See above."],
    title: "Software Software Engineer"
  }
];
const load = () => {
  return { data: WORK_HISTORY };
};
export {
  load
};
