import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
      
      <Sidebar/>
      <div className="wrapper">
        <motion.span
         
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
         Deep Bhattacharyya
        </motion.span>
        <div className="social-icon">
          <a href="https://www.facebook.com/deep.bhattacharyya.946">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/deep-bhattacharyya-8489a2229/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/DeeptheCoderboy">
            <img src="/github-logo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 