import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      
      ref={ref}
      animate={ window.innerWidth<= 738 ? "animate" : isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
      
        <div className="container skill" id="skills">
            <div className="row">
              <div className="col-12">
                    
                       
            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">                  
             <motion.div
                 className="box"
                  whileHover={{ background: "lightgray", color: "black" }}
              >
          <h2>React Js</h2>
          <p>**React.js** is a JavaScript library designed for creating fast, scalable web applications with efficient virtual DOM rendering and a component-based architecture that promotes clean, modular code.</p>
        
          <button> <a href="https://react.dev/">What's this?</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Node Js</h2>
          <p> 
          **Node.js** is a runtime environment that allows Js to build scalable, server-side applications, utilizing an event-driven, non-blocking architecture for efficiently handling multiple client requests.
          </p>
          <button> <a href="https://nodejs.org/en">What's this?</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Express Js</h2>
          <p>
          **Express.js** is a lightweight web framework for Node.js that offers robust routing and middleware, simplifying the development of scalable server-side applications with ease and flexibility.
          </p>
          <button> <a href="https://expressjs.com/">What's this?</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MongoDB</h2>
          <p>
          **MongoDB** is a NoSQL database that stores data in flexible, JSON-like documents, facilitating easy scalability, rapid data retrieval, and efficient management of unstructured data.
          </p>
          <button> <a href="https://www.mongodb.com/products/platform/cloud">What's this?</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Core Java</h2>
          <p>
          **Core Java** is a robust, platform-independent language featuring essential capabilities such as object-oriented programming, multithreading, and memory management via the JVM.
          </p>
          <button> <a href="https://www.javatpoint.com/what-is-core-java">What's this?</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Jsp</h2>
          <p>
          **JSP** is a server-side technology that embed the Java code within HTML, making it ideal for interactive web applications with seamless integration of backend logic  and frontend presentation.
          </p>
          <button><a href="https://www.geeksforgeeks.org/introduction-to-jsp/">What's this?</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Servlet</h2>
          <p>
          **Servlets** are Java programs executed on a web server that handle client requests and generate dynamic web content, making them crucial for developing scalable and robust Java-web applications.
          </p>
          <button> <a href="https://www.geeksforgeeks.org/introduction-java-servlets/">What's this?</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>JDBC</h2>
          <p>
          **JDBC** is an API that enables Java applications to communicate with databases, providing a standardized interface for executing for managing database connections.
          </p>
          <button> <a href="https://www.geeksforgeeks.org/introduction-to-jdbc/">What's this?</a></button>
        </motion.div>


        </Carousel>
          </div>
          </div>
        </div>
        
   
      </motion.div>
    </motion.div>
  );
};

export default Services;