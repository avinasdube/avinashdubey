import listdown from "../assets/images/listdown.jpg";
import menhew from "../assets/images/menhew.jpg";
import weatherin from "../assets/images/weatherin.jpg";

export const welcomeContent = {
  greeting: "namaskar, i am avinash",
  location: "greater noida, up",
  intro:
    "currently, building full-stack web products while upskilling in python, ai engineering, and practical machine learning.",
  highlightStats: [
    { id: 1, label: "live projects", value: "6+" },
    { id: 2, label: "core stack", value: "mern + python" },
    { id: 3, label: "focus area", value: "ai-ready products" },
  ],
};

export const projects = [
  {
    id: 1,
    type: "web application",
    image: menhew,
    name: "menhew",
    description:
      "an e-commerce application for men clothing built using mern stack with stripe integration.",
    liveUrl: "https://menhew.onrender.com",
    codeUrl: "https://github.com/avinasdube/menhew",
    stack: ["react", "node.js", "mongodb", "stripe"],
  },
  {
    id: 2,
    type: "web application",
    image: listdown,
    name: "listdown",
    description:
      "a beautiful and fully responsive to-do app built using nodejs and reactjs with redux implementation to support reliable task management.",
    liveUrl: "https://listdown.vercel.app/",
    codeUrl: "https://github.com/avinasdube/listdown",
    stack: ["react", "redux", "node.js"],
  },
  {
    id: 3,
    type: "web application",
    image: weatherin,
    name: "weather.in",
    description:
      "a live weather application built in react and nodejs using openweather api to fetch real-time forecast data.",
    liveUrl: "https://avinasdube.github.io/weather.in/",
    codeUrl: "https://github.com/avinasdube/weather.in",
    stack: ["react", "api integration", "sass"],
  },
];

export const aboutContent = {
  heading: "namaskar! i'm avinash dubey",
  paragraphs: [
    "i'm a developer who enjoys creating digital products from scratch. i work primarily with the mern stack, c, and c++, and i am currently diving deeper into python for data science, machine learning, and ai.",
    "currently, i'm pursuing my master's in computer applications from galgotias university, greater noida, and balancing academics with practical build-focused learning.",
    "programming feels like poetry to me. i enjoy writing clean, expressive, and thoughtful code that solves real-world problems while still feeling elegant.",
  ],
  educationLink: "https://www.galgotiasuniversity.edu.in/",
  focusAreas: [
    "full-stack product engineering with mern",
    "python for ai workflows and model experimentation",
    "clean ui implementation with robust frontend architecture",
    "problem solving with dsa and practical system thinking",
  ],
  stats: [
    { id: 1, label: "projects built", value: "12+" },
    { id: 2, label: "primary focus", value: "mern + python" },
    { id: 3, label: "current trajectory", value: "ai-ready full stack" },
    { id: 4, label: "build mindset", value: "clean + scalable" },
  ],
  timeline: [
    {
      id: 1,
      year: "2023",
      title: "started practical web development",
      detail:
        "moved from fundamentals to full projects with html, css, javascript, c and c++ foundations.",
    },
    {
      id: 2,
      year: "2024",
      title: "built and shipped mern projects",
      detail:
        "developed projects like listdown and weather.in with frontend architecture and api integration focus.",
    },
    {
      id: 3,
      year: "2025",
      title: "product thinking and deployment depth",
      detail:
        "worked on production-style patterns including payments, reliability, and release-oriented iteration.",
    },
    {
      id: 4,
      year: "2026",
      title: "ai engineering growth phase",
      detail:
        "expanding into python, data science, and applied ai workflows while strengthening full-stack delivery.",
    },
  ],
  tabs: [
    { id: "focus", label: "focus" },
    { id: "timeline", label: "timeline" },
    { id: "wins", label: "wins" },
  ],
  achievements: [
    {
      id: 1,
      metric: "6+",
      label: "live deployments",
      detail:
        "deployed personal and learning products across web hosting platforms.",
    },
    {
      id: 2,
      metric: "10+",
      label: "full-stack builds",
      detail:
        "shipped end-to-end apps covering ui, apis, and state management.",
    },
    {
      id: 3,
      metric: "2026",
      label: "ai transition",
      detail:
        "actively integrating python and ai workflows into practical product builds.",
    },
  ],
  cta: {
    title: "let's build something meaningful together",
    subtitle:
      "i enjoy creating practical digital products with clean execution and thoughtful user experience.",
    mail: "mailto:hello.avinasdube@gmail.com",
    resumeUrl: "https://github.com/avinasdube",
    availability: "open to internships, freelance, and collaboration",
  },
};

export const skills = [
  "html",
  "css",
  "javascript",
  "react",
  "node.js",
  "express.js",
  "mongodb",
  "c",
  "c++",
  "python",
  "git",
  "rest api",
  "sass",
];

export const highlights = [
  {
    id: 1,
    title: "what i am building now",
    detail:
      "portfolio-led projects with stronger architecture, testability, and production-ready deployment practices.",
  },
  {
    id: 2,
    title: "2026 growth direction",
    detail:
      "agentic ai workflows, practical llm integration, and modern full-stack patterns that prioritize speed and reliability.",
  },
  {
    id: 3,
    title: "collaboration style",
    detail:
      "i like shipping in small iterations, documenting tradeoffs, and improving maintainability with each release.",
  },
];

export const quote =
  "design is the art of creating visual poetry. let me do some for you!";

export const socials = [
  { id: 1, name: "linkedin", url: "https://www.linkedin.com/in/avinasdube/" },
  { id: 2, name: "instagram", url: "http://www.instagram.com/avinas.dube/" },
  { id: 3, name: "twitter", url: "https://www.twitter.com/avinaasdube/" },
  { id: 4, name: "github", url: "https://github.com/avinasdube" },
];
