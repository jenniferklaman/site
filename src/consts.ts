import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Jennifer Laman",
  EMAIL: "jenniferklaman@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Linguistics and computer science research, projects, and writing.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on language, data, and machine learning.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Research, engineering, and work experiences.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Selected projects spanning NLP, computational linguistics, and data science.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/jenniferklaman",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/jennifer-laman/",
  },
];
