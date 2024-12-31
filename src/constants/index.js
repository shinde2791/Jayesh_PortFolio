import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  syncsense,
  tesla,
  shopify,
  upgrad,
  carrent,
  jobit,
  tripguide,
  threejs,
  stanvac,
} from "../assets";

export const navLinks = [
  {
    id:"home",
    title:"Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "Projects",
    title: "Project",
  },
  {
    id: "contacts",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: backend,
  },
  {
    title: "Mentor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const Social = [
  {
    handle:
      "shinde2791",
    handle_link:"https://github.com/shinde2791",
    name: "Github",
  
    image: "https://avatars.githubusercontent.com/u/75433632?v=4",
  },
  {
    handle:
      "Jayesh Shinde",
    handle_link:"https://www.linkedin.com/in/jayesh-shinde-4677ab210/",
    name: "LinkedIn",
    image: "https://avatars.githubusercontent.com/u/75433632?v=4",  },
  {
    handle:
      "shinde_jayesh2791",
    handle_link:"https://www.instagram.com/shinde_jayesh2791/",
    name: "Instagram",
    image: "https://avatars.githubusercontent.com/u/75433632?v=4",  },
];

const projects = [
  {
    name: "SIID",
    description:
      "Web-based platform introducing the SIID Device's standout features, providing a convenient and efficient solution for road saftey    .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/shinde2791/Jayesh_PortFolio.git",
    live_link:"https://jayesh-portfolio-rose.vercel.app/",
  },
  {
    name: "Wanderer",
    description:
      "Web application simplifying the search for nearby attractions, Hotels, Resturants. Discover hidden gems and popular landmarks seamlessly through its user-friendly interface, redefining how you experience new places.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "MiUi",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/omkar2711/Wanderer",
    live_link:"https://wanderer-livid-chi.vercel.app/",
  },
  {
    name: "Drum kit",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "JQuery",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://github.com/omkar2711/Drum_Kit",
    live_link:"https://omkar2711.github.io/Drum_Kit/",
  },
];

const experiences = [
  {
    title: "AWS Solutions Architect Associate Intern",
    company_name: "AI-VARIANT",
    //icon: syncsense,
    iconBg: "#131313",
    date: "March 2023 – Aug 2023",
    points: [
      "Assisted extensively in the design , deployment, and management of scalable , secure , and highly cost-effective AWS solutions..",
      "Actively collaborated with the development team to successfully implement robust cloud-based solutions.",
      "Consistently provided comprehensive technical support and efficient troubleshooting for a wide range of AWS-related issues.",
      
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Software Developer",
    company_name: "Stanvac System",
    icon: stanvac,
    iconBg: "#e62d3e",
    date: "Sep 2023 – Present",
    points: [
      "As a Software Developer on Stanvac Systems' 'Imagine' project in the medical billing domain,",
      " I optimized the 'Track Billing Status' module, reducing user interaction time by 30% and increasing system responsiveness by 40%.",
      "By integrating real-time billing status tracking, I improved data retrieval accuracy by 95% and delivered instant updates to doctors.",
      " My contributions enhanced cross-platform usability by 25% and reduced user errors by 20% through refined UI design.",
      " Additionally, I achieved a 99.9% compliance rate in patient data verification, reduced billing discrepancies by 15%, and ensured a 99.5% backend uptime for reliable payment tracking.",
    ],
  },

];

export { services, technologies,experiences, Social, projects };
