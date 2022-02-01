import { Project, Certificate } from "@libs/types";

import spotify from "@public/images/projects/spotify.png";
import airbnb from "@public/images/projects/airbnb.png";
import jiraClone from "@public/images/projects/jira-clone.png";
import reactCertificate from "@public/images/certificates/reactCertificate.webp";
import javaScriptCertificate from "@public/images/certificates/javaScriptCertificate.webp";
import nextCertificate from "@public/images/certificates/nextCertificate.webp";
import reactNativeCertificate from "@public/images/certificates/reactNativeCertificate.webp";

export const projects: Project[] = [
  {
    id: 1,
    name: "Airbnb Clone",
    points: [
      " • Fully responsive Airbnb clone with features like date range picker calendar, choosing the number of guests, a separate search results page, and an integrated map with location markers.",
      " • Building this clone helped me learn about maintaining states and passing props in react while avoiding the problem of prop drilling.",
      " • I also learned about server-side and static-side rendering in next.js which helps in greatly improving the user's experience.",
    ],
    image: airbnb,
    deployed_url: "https://airbnb-clone-theta-blush.vercel.app/",
    github_url: "https://github.com/kapil551/Airbnb-Clone",
    category: ["react", "next","tailwind"],
    key_techs: ["React", "Next", "JavaScript", "Tailwind", "Mapbox API"],
  },
  {
    id: 2,
    name: "Spotify Clone",
    image: spotify,
    deployed_url: "https://github.com/kapil551/spotify-2.0",
    github_url: "https://github.com/kapil551/spotify-2.0",
    category: ["react"],
    points: [
      " • Fully functional and responsive clone of Spotify with features like search, play, pause, and change songs.",
      " • Complete search functionality with data being fetched from Spotify API.",
      " • Added User authentication using NextAuth.js.",
      " • Implemented many concepts of react components, hooks, lifecycle methods, props, and added global state management using recoil.",
      " • Added a custom player with controls like play, pause, and adjust the volume. ",
      " • User can search videos, subscribe, like, comment, browse other channels , etc",
    ],
    key_techs: ["React", "Next", "JavaScript", "Tailwind", "NextAuth", "Recoil"],
  },

  {
    id: 3,
    name: "Jira Ticket Clone",
    image: jiraClone,
    deployed_url: "https://jira-ticket-clone-kc.netlify.app/",
    github_url: "https://github.com/kapil551/JIRA_Ticket_Clone",
    category: ["react"],
    points: [
      " • Implemented CRUD operations like creating new tickets with color priority, deleting and updating old tickets.",
      " • Added different priority coloring to tickets and filter tickets based on priority.",
      " • For the persistence of tickets added localStorage API.",
      " • Added lock and unlock features to the tickets.",
    ],

    key_techs: ["JavaScript", "HTML5", "CSS3", "Tailwind", "Local Storage", "DOM Manipulation"],
  },

  {
    id: 4,
    name: "Project Title",
    deployed_url: "",
    github_url: "",
    category: ["express", "socket", "react"],
    points: [
      " • Project Description Line 1",
      " • Project Description Line 2",
      " • Project Description Line 3"
    ],
    key_techs: ["Tech1", "Tech2", "Tech3", "Tech4", "Tech5"],
  },
  {
    id: 5,
    name: "Project Title",
    deployed_url: "",
    github_url: "",
    category: ["express", "socket", "react"],
    points: [
      " • Project Description Line 1",
      " • Project Description Line 2",
      " • Project Description Line 3"
    ],
    key_techs: ["Tech1", "Tech2", "Tech3", "Tech4", "Tech5"],
  },
  {
    id: 6,
    name: "Project Title",
    deployed_url: "",
    github_url: "",
    category: ["express", "socket", "react"],
    points: [
      " • Project Description Line 1",
      " • Project Description Line 2",
      " • Project Description Line 3"
    ],
    key_techs: ["Tech1", "Tech2", "Tech3", "Tech4", "Tech5"],
  },
  {
    id: 7,
    name: "Project Title",
    deployed_url: "",
    github_url: "",
    category: ["express", "socket", "react"],
    points: [
      " • Project Description Line 1",
      " • Project Description Line 2",
      " • Project Description Line 3"
    ],
    key_techs: ["Tech1", "Tech2", "Tech3", "Tech4", "Tech5"],
  },
];

export const certifiates: Certificate[] = [
  {
    id: 1,
    title: "Complete Next.js Developer in 2022: Zero to Mastery",
    image: nextCertificate,
    certificateLink: "",
    duration: "Currently Ongoing",
    organisation: "Udemy",
  },
  {
    id: 2,
    title: "JavaScript: The Advanced Concepts 2022: Zero to Mastery",
    image: javaScriptCertificate,
    certificateLink: "",
    duration: "Currently Ongoing",
    organisation: "Udemy",
  },
  {
    id: 3,
    title: "Complete React Developer in 2022: Zero to Mastery",
    image: reactCertificate,
    certificateLink: "",
    duration: "Currently Ongoing",
    organisation: "Udemy",
  },
  {
    id: 4,
    title: "Complete React Native Developer in 2022: Zero to Mastery",
    image: reactNativeCertificate,
    certificateLink: "",
    duration: "Currently Ongoing",
    organisation: "Udemy",
  },
];
