import Work1 from "../../assets//formvalidation.jpeg";
import Work2 from "../../assets//lifecyclenews.jpeg";
import Work3 from "../../assets//hooknews.jpeg";
import Work4 from "../../assets//Screenshot_1.png";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Form Validation",
    category: "My Project",
    desc: "To handle user input, we can use the onChange event on input elements.",
    tools: "ReactJS, React Hook, Formik, Yup",
    github: [
      {
        title: "",
        link: "https://github.com/IhzhaNB/validation-form",
      },
    ],
    demo: "https://validation-form-kappa.vercel.app/",
  },
  {
    id: 2,
    image: Work2,
    title: "Lifecycle News",
    category: "My Project",
    desc: "A news portal website is a website that is created to provide informational services. This web portal uses Lifecycle Methods, and the news sources are fetched from the GNews API.",
    tools: "ReactJS, Lifecycle Methode, API GNews",
    github: [
      {
        title: "",
        link: "https://github.com/IhzhaNB/lifecycle-news",
      },
    ],
    demo: "https://lifecycle-news-eta.vercel.app/",
  },
  {
    id: 3,
    image: Work3,
    title: "Hook News",
    category: "My Project",
    desc: "A news portal website is a website that is created to provide informational services. This web portal uses React-Hook Methods, and the news sources are fetched from the GNews API.",
    tools: "ReactJS, React Hook, API GNews",
    github: [{ title: "", link: "https://github.com/IhzhaNB/hook-news" }],
    demo: "https://hook-news.vercel.app/",
  },
  {
    id: 4,
    image: Work4,
    title: "D.Store",
    category: "My Project",
    desc: "D.Store is a web platform that enables buyers to purchase both smartphones and laptopswithout the need to leave their homes.",
    tools: "MongoDB, ExpressJS, ReactJS, NodeJS, Mongoose, Redux, Stripe",
    github: [
      {
        title: "Frontend :",
        link: "https://github.com/IhzhaNB/ecommerce-eduwork-backend",
      },
      {
        title: "Backend :",
        link: "https://github.com/IhzhaNB/ecommerce-frontend-eduwork",
      },
    ],
    demo: "https://ecommerce-frontend-eduwork.vercel.app/",
  },
];

export const projectsNav = [
  {
    name: "My Project",
  },
];
