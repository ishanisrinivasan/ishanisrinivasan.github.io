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
    lunatech,
    conrad,
    eaton2,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ibm,
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
      title: "Web Development",
      icon: web,
    },
    {
      title: "Programming and Prototyping",
      icon: mobile,
    },
    {
      title: "Research and Analysis",
      icon: backend,
    },
    {
      title: "Robotics",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5`",
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
      title: "Firmware Engineer",
      company_name: "Eaton Coorporation",
      icon: eaton2,
      iconBg: "#E6DEDD",
      date: "July 2021 - September 2024",
      points: [
        "Conducted real-time PLC testing on MCUs for high performance drives to control the motors and actuators, programming Modbus communication for precise system inputs and outputs. ",
       "Developed and modified Python scripts to automate the migration of test cases from Excel to Jama Software, ensuring seamless integration and data accuracy."],
    },
    {
      title: "Team Captain",
      company_name: "Conrad Challenge",
      icon: conrad,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Designed a product to remodel the HVAC industry: air conditioners that works on Bernoulli’s principle. It is a combination of a special design of windows and the use of a high-power vacuum pump that eliminates CFCs released in an atypical AC. .",
        "We used Computational Fluid Dynamics (CFD) Simulations, Smart Sensors and IoT Integration, Energy-Efficient Vacuum Pumps, Advanced Refrigerant Management, Control Systems and Algorithms, High-Efficiency Windows, Energy Recovery System, Wireless Connectivity, Cloud Computing.",
        "Received the Conrad Innovators Award for our model among 823 teams.",
      ],
    },
    {
      title: " Technical Head",
      company_name: "LunaTech Robotics",
      icon: lunatech,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Led a team in designing and coding autonomous robots.",
        "Utilized agile methodologies for efficient development.",
        "Created precise motion control algorithms with PID controllers.",
        "Integrated sensors for real-time feedback and employed advanced path planning techniques.",
        "Utilized machine learning and AI for image recognition and object detection.",
        "Trained CNN models (e.g., TensorFlow and PyTorch) for accurate object recognition.",
        "Integrated YOLO and SSD frameworks for dynamic object detection.",
       
      ],
    },
    {
      title: "Student",
      company_name: "International Business Machines Coorporation (IBM)",
      icon: ibm,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };