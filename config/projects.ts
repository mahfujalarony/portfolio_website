import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [

  // e-commerce website
  {
    id: "e-commerce-shop",
    companyName: "E-Commerce Shop",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "A modern, fully responsive e-commerce platform with separate user and admin interfaces, comprehensive shopping functionality, and real-time chat support.",
    websiteLink: "https://rony-bg-az-r.netlify.app/",
    githubLink: "https://github.com/mahfujalarony/E-comarce-shop",
    techStack: ["React", "Node.js", "express.js", "MongoDB"],
    startDate: new Date("2024-10-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/projects/coverproject/e-commerce-shop.png",
    pagesInfoArr: [
      {
        title: "Messaging Interface",
        description:
          "This project uses Socket.IO to enable real-time messaging. Users can initiate chats regarding any product, and admins receive the messages instantly through the admin panel and can respond in real time.",
        imgArr: ["/projects/details/e-commerce-shop/chat.png"],
      },
      {
        title: "Wishlist & Cart",
        description:
          "Users can save items to their wishlist and manage their shopping cart with real-time updates.",
        imgArr: ["/projects/details/e-commerce-shop/wishlist.png"],
      },
      {
        title: "Place Order",
        description:
          "A simple and intuitive process for users to place orders and complete their purchases.",
        imgArr: ["/projects/details/e-commerce-shop/placeorder.png"],
      },
      {
        title: "Admin Panel",
        description:
          "Comprehensive admin panel for managing products, orders, and users.",
        imgArr: ["/projects/details/e-commerce-shop/adminpanel.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I built this e-commerce platform as a personal project to get hands-on experience with building a production-grade full-stack application. It has two completely separate sides — one for customers and one for admins — each with their own set of features.",
        "One thing I really enjoyed adding was the real-time chat, which lets customers message support directly while browsing. On the backend I used Node.js and Express with MongoDB, and kept the frontend clean and fast with React.",
      ],
      bullets: [
        "Separate user and admin panels with role-based access control.",
        "Real-time customer support chat built with Socket.io.",
        "Product management — add, edit, delete, and organize inventory from the admin panel.",
        "Wishlist and cart system with persistent state for logged-in users.",
        "Order placement flow with order history for both users and admins.",
      ],
    },
  },

  // airport service booking
  {
    id: "airport-service-booking",
    companyName: "Airport Service Booking",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Next.js app for airport transfer booking with SSLCommerz payment integration, user profile management, and a full admin panel.",
    websiteLink: "https://airport.mahfujalamrony.me/",
    githubLink: "https://github.com/mahfujalarony/Airport_Service",
    techStack: ["Next.js", "Prisma", "MongoDB", "Tailwind CSS"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-03-01"),
    companyLogoImg: "/projects/coverproject/airport.png",
    pagesInfoArr: [
      {
        title: "Booking & Payment",
        description:
          "Seamless airport transfer booking flow with SSLCommerz payment gateway integration.",
        imgArr: ["/projects/details/airport/home.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A full-stack Next.js application for booking airport transfer services. Users can browse available services, make bookings, and complete payments through the SSLCommerz payment gateway — all within a clean, responsive interface.",
        "The platform includes a comprehensive admin panel for managing bookings, drivers, and users, along with user profile management features built on Prisma ORM and MongoDB.",
      ],
      bullets: [
        "Built a full airport transfer booking platform using Next.js and Prisma ORM.",
        "Integrated SSLCommerz payment gateway for secure online transactions.",
        "Developed a comprehensive admin panel for booking and user management.",
        "Implemented user profile management with booking history.",
        "Deployed on a custom domain with a production-ready setup.",
      ],
    },
  },

  // Multiporpose Ai
    {
    id: "multipurpose-ai",
    companyName: "Multipurpose AI (OpenAI API)",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "A versatile AI application built with Next.js, integrating multiple AI services for text generation, image creation, and more.",
    websiteLink: "https://multipurpose-ai.netlify.app/",
    githubLink: "https://github.com/mahfujalarony/Multipurpose-AI",
    techStack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-09-01"),
    companyLogoImg: "/projects/coverproject/multipurpose-ai.png",
    pagesInfoArr: [
      {
        title: "Email Generator",
        description:
          "AI-powered email generation tool for creating personalized and professional emails.",
        imgArr: ["/projects/details/multipurpose-ai/emailgeneration.png", "/projects/details/multipurpose-ai/emailgeneration2.png" ],

      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A versatile AI application built with Next.js, integrating multiple AI services for text generation, image creation, and more.",
        "The platform provides a seamless experience for users to interact with various AI functionalities.",
      ],
      bullets: [
        "Built a versatile AI application with Next.js.",
        "Integrated multiple AI services for text generation and image creation.",
        "Implemented responsive UI with Tailwind CSS across all device sizes.",
        "Developed a user-friendly interface for interacting with AI functionalities.",
        "Deployed on Vercel with cloud-hosted backend.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
