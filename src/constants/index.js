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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  skypoint,
  tesla,
  shopify,
  skypointthumbnail,
  jobit,
  wildoasisdashboard,
  book,
  threejs,
  chat,
  cabin
} from "../assets";

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
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile
  }
 
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-end Intern",
    company_name: "Homains",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Dec 2024 - Feb 2025",
    points: [
      "Developed responsive and accessible web interfaces using Angular and TypeScript, enhancing user engagement by 25%",
      "Collaborated with designers to implement pixel-perfect UI components and ensure consistency across platforms",
      "Integrated RESTful APIs to enable seamless data retrieval and improve application performance",
      
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Skypoint",
    icon: skypoint,
    iconBg: "#383E56",
    date: "Jul 2023 - Oct 2024",
    points: [
      "Developed a dynamic and responsive web application using ReactJS, improving user engagement and load performance.",
      "Integrated RESTful APIs for real-time data updates, enhancing the user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Enhanced UI/UX design by gathering user feedback and implementing best practices to increase satisfaction.",
    ],
  },
  {
    title: "Node.js Developer",
    company_name: "Route IT Training Center",
    icon: nodejs,
    iconBg: "#383E56",
    date: "Aug 2023 - Dec 2023",
    points: [
      `Designed and developed a comprehensive e-commerce application using Node.js and MongoDB, incorporating key features
such as authentication, authorization, and payment integration with Stripe`,
      `Implemented functionalities for managing products, carts, orders, and user profiles, ensuring seamless and secure user
experience`,
      `Optimized backend processes to improve performance and scalability, supporting large datasets and concurrent user
operations`,
      ,
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Travelling agency",
    description:
      "Web-based platform that allows users to search, book, and manage activity bookings, hotel room rentals and car rentals from various providers, providing a convenient and efficient solution for vacation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: skypointthumbnail,
    source_code_link: "https://skypoint.fi",
  },
  {
    name: "Cabin booking dashboard",
    description:
      "Web application that enables admins to manage for users, cabins and cabin bookings for each user with an easy to use UI and charts for bookings. You can use admin@admin.com and for the password admin to login and view the project",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wildoasisdashboard,
    source_code_link: "https://the-wild-oasis-dashboard-two.vercel.app/login",
  },
  {
    name: "Book selling e-commerce",
    description:
      `A comprehensive e-commerce platform that allows users to browse products, add items to their cart, and securely complete payments. The app features a fully functional shopping cart, integrated payment gateway, and dynamic product filtering, providing a seamless shopping experience.`,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: book,
    source_code_link: "https://bookstore-pearl-seven.vercel.app/",
  },
  {
    name: "Chat-app",
    description:
      `A comprehensive chat platform that allows users to join chat rooms and exchange messages in real-time. Built with React, Node.js, and Socket.io, it features real-time messaging, typing indicators, and a responsive design for seamless communication.`,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      },
      {
        name: "socket.io", 
        color: "blue-text-gradient"
      }
    ],
    image: chat,
    source_code_link: "https://github.com/xMeda33/chat-app",
  },
  {
    name: "Cabin booking app",
    description:
      `Web application that enables users to browse and book cabins, manage their profiles and cabin bookings with an easy to use UI.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      },
    ],
    image: cabin,
    source_code_link: "https://github.com/xMeda33/the-wild-oasis-customers",
  },
];

export { services, technologies, experiences, testimonials, projects };
