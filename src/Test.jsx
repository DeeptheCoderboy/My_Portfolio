import {motion} from "framer-motion";
const Test=()=>{
    const variant={
      variable:{  opacity:0.5,
        scale:0.5}
    }
    return(
     <div className="course">
        <motion.div className="box" variants={variant} initial="variable" animate={{opacity:1,scale:1}} transition={{duration:2}} whileHover={{opacity:0,scale:1}} drag></motion.div>
     </div>

    )
}
export default Test