import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  c,
  tailwind,
  cSharp,
  sqlServer,
  git,
  figma,
  java,
  nust,
  sirgil,
  universityWebsite,
  foodieExpress,
  bootstrap,
  githubTech,
  nikeLandingPage,
  brakwaterAbattoir,
  lodgeReservationSystem,
} from "../assets";

import logo from "/logo.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
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
    title: "Tech Enthusiast",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "CSharp",
    icon: cSharp,
  },
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: githubTech,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Sql Server",
    icon: sqlServer,
  },
  {
    name: "JAVA",
    icon: java,
  },
];

const experiences = [
  {
    title: "Freelancer developer",
    company_name: "My own",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 2022 - current date",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Continuously advancing my skills through hands-on project experience.",
    ],
  },
  {
    title: "Computer Science Student",
    company_name: "NUST - Software Engineering",
    icon: nust,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - current date",
    points: [
      "Building foundation in computer science principles, including algorithms, data structures, and software engineering.",
      "Proficient in multiple programming languages and development frameworks, ensuring versatile and robust solutions.",
      "Experience with problem-solving and critical thinking through rigorous coursework and practical projects.",
      "Understanding of modern software development practices, enhancing project efficiency and quality.",
    ],
  },
  {
    title: "Software developer",
    company_name: "Sirgil Org",
    icon: sirgil,
    iconBg: "#383E56",
    date: "March 2024 - current date",
    points: [
      "Building and maintaining robust web applications using React.js and complementary technologies.",
      "Implementing responsive and adaptive design principles to ensure optimal performance across various devices and browsers.",
      "Conducting thorough code reviews and offering constructive feedback to enhance code quality and team performance.",
    ],
  },
];

const projects = [
  {
    name: "University Website",
    description:
      "A simple yet elegant university website developed with HTML, CSS, and minimal JavaScript, utilizing Font Awesome for icons. This project showcases responsive design, clean layouts, and user-friendly navigation.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: universityWebsite,
    source_code_link: "https://github.com/euricodande12/university-website",
    live_url_link: "https://euricodande12.github.io/university-website/",
  },
  {
    name: "Nike Landing Page",
    description:
      "This project showcases the integration of these powerful tools to create a responsive and visually appealing web application. Dive into the code and explore the functionalities that make this landing page stand out.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nikeLandingPage,
    source_code_link: "https://github.com/euricodande12/nike-landing-page",
    live_url_link: "https://edan-landing-nike.netlify.app/",
  },
  {
    name: "Foodie Express",
    description:
      "A dynamic and user-friendly food delivery app designed to bring your favorite meals right to your doorstep with speed and convenience. It offers a delightful user experience, ensuring that ordering food is as enjoyable as eating it.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: foodieExpress,
    source_code_link: "https://github.com/euricodande12/FoodieExpress",
    live_url_link: "https://foodie-express-hazel.vercel.app/",
  },
  {
    name: "Brakwater Abattoir",
    description:
      "A dynamic and user-friendly meat selling app designed to bring your favorite meats close to you. It offers a delightful user experience, ensuring that ordering meat is as enjoyable as eating it.",
    tags: [
      {
        name: "Ionic",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Supabase",
        color: "blue-text-gradient",
      },
    ],
    image: brakwaterAbattoir,
    source_code_link: "https://github.com/sirgil-org/BrakwaterAbattoir",
    live_url_link: "https://friendly-caramel-898ad0.netlify.app/login",
  },
  {
    name: "Lodge Reservation System",
    description:
      "A dynamic and user-friendly lodge reservation system to simplify daily tasks. It offers a delightful and exciting user experience, ensuring that all the data about the customers are always available.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Supabase",
        color: "blue-text-gradient",
      },
    ],
    image: lodgeReservationSystem,
    source_code_link: "https://github.com/sirgil-org/lodge-reservation-system",
    live_url_link: "https://lodge-reservation-system.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
