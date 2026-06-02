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

    // Photo Editor Ai
    {
    id: "photoeditorai",
    companyName: "Photo Editor AI (Next.js + Python)",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "An AI-powered photo editing application built with Next.js and Python, featuring background removal, image enhancement, AI filters, and more.",
    websiteLink: "https://photoeditor.rony.studio/",
    githubLink: "https://github.com/mahfujalarony/Photo-Editor-Ai",
    techStack: ["Next.js", "Python", "Tailwind CSS"],
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-05-01"),
    companyLogoImg: "/projects/coverproject/photoeditor2.png",
    pagesInfoArr: [
      {
        title: "Photo Editor Interface",
        description:
          "A clean, intuitive photo editing interface with AI-powered tools for background removal, enhancement, and creative filters.",
        imgArr: ["/projects/details/photoeditor/1.png"],
      },
      {
        title: "Background Editor",
        description:
          "AI-powered background editing tool to replace or modify image backgrounds seamlessly.",
        imgArr: ["/projects/details/photoeditor/backgroundeditor.png"],
      },
      {
        title: "Background Removal",
        description:
          "Instantly remove backgrounds from photos using AI — clean, precise, and automatic.",
        imgArr: ["/projects/details/photoeditor/backgroundremove.png"],
      },
      {
        title: "Eraser Tool",
        description:
          "Smart eraser tool to remove unwanted objects or elements from photos with AI assistance.",
        imgArr: ["/projects/details/photoeditor/Earse.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "An AI-powered photo editing platform that combines a Next.js frontend with a Python backend to deliver intelligent image processing capabilities. Users can upload photos and apply a variety of AI-driven transformations seamlessly.",
        "The application features background removal, image enhancement, AI-based filters, and other editing tools — all accessible through a modern, responsive interface built with Tailwind CSS.",
      ],
      bullets: [
        "Built a full-stack AI photo editor with Next.js frontend and Python backend.",
        "Implemented AI-powered background removal and image enhancement features.",
        "Developed AI-based creative filters and image transformation tools.",
        "Designed a responsive, modern UI with Tailwind CSS for all device sizes.",
        "Deployed with custom domain at photoeditor.rony.studio.",
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

  // Nexus Global Shop
{
  id: "nexus-global-shop",
  companyName: "Nexus Global Shop",
  type: "Personal",
  category: ["Full Stack", "Web Dev"],
  shortDescription:
    "A full-featured multi-vendor e-commerce platform with separate Admin, Merchant, and User panels, real-time support chat, digital wallet, and a dedicated image upload server built for cPanel deployment.",
  websiteLink: "https://nexus-global-shop.netlify.app/",
  githubLink: "https://github.com/mahfujalarony/Nexus-Global-Shop",
  techStack: ["React", "Vite", "Express.js", "MySQL", "Socket.io", "Tailwind CSS", "Redux Toolkit", "JWT"],
  startDate: new Date("2024-08-01"),
  endDate: new Date("2024-10-01"),
  companyLogoImg: "/projects/coverproject/nexus.png",
  pagesInfoArr: [
    {
      title: "User — Shop Interface",
      description:
        "Customers can browse products by category, place orders, track deliveries, use a digital wallet, redeem gift cards, and get real-time support via live chat.",
      imgArr: ["/projects/coverproject/nexus.png"],
    },
    {
      title: "Merchant — Store Panel",
      description:
        "Merchants can manage their own store, add and update products with images, track incoming orders, and view sales analytics.",
      imgArr: ["/projects/details/nexus/merchant.png"],
    },
    {
      title: "Admin — Dashboard",
      description:
        "Admins have full control over the platform — managing users, merchants, orders, offers, balance top-up approvals, and support chat. Sub-admins can be created with granular permissions.",
      imgArr: ["/projects/details/nexus/admin.png"],
    },
    {
      title: "Real-time Support Chat",
      description:
        "A dedicated Socket.io-powered support chat system with typing indicators, read receipts, online presence tracking, and guest user support with an automatic first-reply bot.",
      imgArr: ["/projects/details/nexus/support.png"],
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "Nexus Global Shop is a full-stack multi-vendor e-commerce platform built with React (Vite) on the frontend and Express.js with MySQL on the backend. The platform supports three distinct roles — Admin, Merchant, and User — each with a dedicated interface and access control.",
      "The project is split into four independent services: the main Frontend, the Backend API, a real-time Chat Server (Socket.io), and a dedicated Image Upload Server. This separation was intentionally designed for straightforward cPanel hosting, where each service runs as its own Node.js application.",
    ],
    bullets: [
      "Built a multi-role platform with separate dashboards for Admin, Merchant, and Customer, including a Sub-Admin system with granular permission control.",
      "Implemented real-time Support Chat using Socket.io with typing indicators, read receipts, online presence, and an auto-reply bot for guest users.",
      "Developed authentication with Email/Password and Google OAuth, secured with JWT, alongside a Digital Wallet, Mobile Banking top-up, and Gift Card system.",
      "Created a dedicated Image Upload Server in pure Node.js that organizes uploaded images by scope (products, profiles, offers, stories) and serves them as static files.",
      "Designed a product catalog system with Categories, Sub-Categories, Offers, and Reviews, with full CRUD operations for merchants and an analytics dashboard for admins.",
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
