import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaLightbulb,
  FaUsers,
  FaCheckCircle,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
} from "react-icons/vsc";
import { FaGitAlt, FaTwitter, FaDribbble } from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";

import PROJECT_IMG_1 from "../assets/images/project_img_1.png";
import PROJECT_IMG_2 from "../assets/images/project_img_2.png";
import PROJECT_IMG_3 from "../assets/images/project_img_3.png";
// import PROJECT_IMG_4 from "../assets/images/project-4.png";
// import PROJECT_IMG_5 from "../assets/images/project-5.png";
// import PROJECT_IMG_6 from "../assets/images/project-6.png";

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero" },
  { id: "02", label: "Skills", offset: -80, to: "skills" },
  { id: "03", label: "About Me", offset: -80, to: "about" },
  { id: "04", label: "Projects", offset: -80, to: "projects" },
  { id: "05", label: "Contact", offset: -80, to: "contact" },
];

export const STATS = [
  { id: "01", count: "10", label: 'Years of \nExperience' },
  { id: "02", count: "12", label: 'Certifications \nEarned' },
  { id: "03", count: "43", label: 'Projects \nCompleted' },
  { id: "04", count: "37+", label: 'Happily \nClients' },
];

export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Tools", value: "tools" },
  { id: "05", label: "Skills", value: "soft-skills" },
];

export const SKILLS = [
  {
    id: "01",
    icon: FaReact,
    skill: "React JS",
    progress: 95,
    type: "frontend",
    description:
      "Experienced in building scalable, component-driven web applications using React.js. Proficient in state management, hooks and integrating third-party libraries for enhanced functionality.",
  },
  {
    id: "02",
    icon: FaHtml5,
    skill: "HTML",
    progress: 99,
    type: "frontend",
    description:
      "Expert in structuring web content with semantic HTML, ensuring accessibility and SEO optimization. Skilled at creating clean and maintainable markup for modern web applications.",
  },
  {
    id: "03",
    icon: FaCss3,
    skill: "CSS",
    progress: 65,
    type: "frontend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SCSS. Experienced in implementing animations, transitions, and custom designs with precision.",
  },
  {
    id: "04",
    // FIX: Changed 'FaJs' to 'BiLogoJavascript' to match the import at the top of the file.
    icon: BiLogoJavascript,
    skill: "JavaScript",
    progress: 88,
    type: "frontend",
    description:
      "Skilled in writing clean, modular, and efficient JavaScript code to create interactive web functionalities. Well-versed in ES6+ features, DOM manipulation, and asynchronous programming.",
  },{
    id: "05",
    icon: FaNodeJs,
    skill: "Node.js",
    progress: 95,
    type: "backend",
    description:
      "Skilled in building scalable and high-performance server-side applications using Node.js. Experienced in handling asynchronous operations, event-driven programming, and optimizing API performance.",
  },
  {
    id: "06",
    icon: SiExpress,
    skill: "Express.js",
    progress: 98,
    type: "backend",
    description:
      "Proficient in developing RESTful APIs and middleware using Express.js. Focused on creating secure, efficient, and maintainable backend architectures for web applications.",
  },
  {
    id: "07",
    icon: SiMongodb,
    skill: "MongoDB",
    progress: 75,
    type: "backend",
    description:
      "Experienced in designing and managing NoSQL databases using MongoDB. Skilled in schema design, aggregation pipelines, and optimizing queries for performance and scalability.",
  },
  {
    id: "08",
    icon: FaDatabase,
    skill: "SQL",
    progress: 90,
    type: "backend",
    description:
      "Proficient in working with relational databases using SQL. Experienced in writing complex queries, optimizing database performance, and ensuring data integrity through normalization and indexing.",
  },
  {
    id: "09",
    icon: FaGithub,
    skill: "Git & GitHub",
    progress: 75,
    type: "tools",
    description:
      "Experienced in version control and collaborative development using Git and GitHub. Proficient in branching strategies, pull requests, and maintaining clean commit histories.",
  },
  {
    id: "10",
    // FIX: Changed 'SiVisualstudiocode' to 'VscVscode' to match the import at the top of the file.
    icon: VscVscode,
    skill: "Visual Studio Code",
    progress: 95,
    type: "tools",
    description:
      "Well-versed in using Visual Studio Code with custom extensions and debugging tools for a smooth development workflow. Optimized for productivity with shortcuts and automation.",
  },
  {
    id: "11",
    icon: SiWebpack,
    skill: "Webpack",
    progress: 70,
    type: "tools",
    description:
      "Skilled in optimizing frontend performance with Webpack, including asset bundling and code splitting. Ensures efficient loading times and modular code structures.",
  },
  {
    id: "12",
    icon: FaLightbulb,
    skill: "Problem-Solving",
    progress: 85,
    type: "soft-skills",
    description:
      "Strong analytical skills to identify and resolve technical challenges efficiently. Approaches problems with a structured and logical mindset to deliver effective solutions.",
  },
  {
    id: "13",
    icon: FaUsers,
    skill: "Collaboration",
    progress: 70,
    type: "soft-skills",
    description:
      "Experienced in working within teams, contributing ideas, and integrating feedback. Effective communication ensures smooth project execution and shared success.",
  },
  {
    id: "14",
    icon: FaCheckCircle,
    skill: "Attention to Detail",
    progress: 83,
    type: "soft-skills",
    description:
      "Meticulous in writing clean, maintainable code and ensuring UI/UX consistency. Focused on delivering high-quality work with precision and thoroughness.",
  },
];

export const ABOUT_ME = {
  content: 'I\'m a passionate Frontend Developer with a strong foundation in building responsive, user-friendly web applications. My journey in web development started with a simple curiosity—how does the web work? Fast forward to today, and I\'ve had the privilege of building software for a variety of clients and industries. I\'m quietly confident, naturally curious, and perpetually working on improving my skills one problem at a time.',
  socialLinks: [
    { id: "01", label: "Facebook", icon: FaFacebook, link: "#" },
    { id: "02", label: "Instagram", icon: FaInstagram, link: "#" },
    { id: "03", label: "Twitter", icon: FaTwitter, link: "#" },
    { id: "04", label: "LinkedIn", icon: FaLinkedin, link: "#" },
    { id: "05", label: "Dribble", icon: FaDribbble, link: "#" },
  ],

  email: "alex.doe@timetoprogram.com",
  phone: "+1 (123) 456-7890",
  website: "https://timetoprogram.com",
};

export const PROJECTS = [
  {
    id: 1,
    title:
      "Real-Time Weather Dashboard | Weather API, Express, React JS, Node JS",
    image: PROJECT_IMG_1,
    tags: ["React", "Express.js", "Weather API", "Node.js"],
  },
  {
    id: 2,
    title:
      "Web-Based Board Game | A classic Snakes and Ladders board game",
    image: PROJECT_IMG_2,
    tags: ["React", "HTML", "CSS"],
  },
  {
    id: 3,
    title:
      "Noughts & Crosses Game | MongoDB, Express, React, Node.js | A sleek and modern take on the classic game of Noughts & Crosses (Tic-Tac-Toe).",
    image: PROJECT_IMG_3,
    tags: ["React", "UI/UX Design", "JavaScript"],
  },
];

