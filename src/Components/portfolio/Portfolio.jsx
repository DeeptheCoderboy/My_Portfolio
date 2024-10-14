import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Ecommerce Application",
    img: "/Project1.jpg",
    desc: "I developed this full-stack eCommerce website using React, Node.js, Express.js, and MongoDB, improving skills in APIs, authentication, and database optimization. The project enhanced my understanding of state management, asynchronous programming, and responsive design.",
    link:"https://ecommerceproject01.netlify.app/"
  },
  {
    id: 2,
    title: "JobSeeking Application",
    img: "/Project2.jpg",
    desc: "I developed this job-seeking application using React, Node.js, Express.js, and MongoDB with role-based authentication for Job-seeker and Employees. This enhanced my skills in secure authentication, API development, and role management. I also focused on state management and responsive design to ensure a seamless experience across all devices.",
    link:"https://job-seeking-webapp-deep.netlify.app/"
  },
  {
    id: 3,
    title: "Food Delivery Application",
    img: "/Project3.jpg",
    desc: "I built this using Next.js, Node.js, Express.js, and MongoDB, implementing JWT-based authentication and password hashing with bcrypt for secure user login. Fetch requests were handled using Next.js API routes, ensuring smooth communication between the frontend and backend. The project improved my understanding of secure authentication, role-based access, and state management in Next.js.",
    link:"https://food-xynzqszet-deep-bhattacharyyas-projects.vercel.app/"
  },
  {
    id: 4,
    title: "Technical Blog ",
    img: "/Project4.jpg",
    desc: " developed a tech blog using JSP, Servlets, JDBC, and a frontend built with HTML, CSS, and JavaScript. The backend utilized JDBC for database connectivity, enabling CRUD operations for blog posts and user comments. JSP and Servlets handled dynamic content rendering and user requests, while the frontend focused on a clean, responsive UI. This project enhanced my skills in Java web development, database management, and creating interactive user experiences with a focus on efficient server-client communication.",
    link:"https://github.com/DeeptheCoderboy/TECHBLOG"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}} whileHover={{color:"orange"}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.link} className='btn'>See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;