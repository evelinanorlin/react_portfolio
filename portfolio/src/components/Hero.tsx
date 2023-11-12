import { useEffect } from "react";
import {useAnimation, motion} from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
    const heroVariants = {
      visible: { opacity: 1, x: 100, transition: { duration: 1 } },
      hidden: { opacity: 0 }
    };
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
        <motion.div
        ref={ref}
        animate="visible"
        initial="hidden"
        variants={heroVariants}
        className="square"
      >
            <h3 className='italic'>Hi, I'm</h3>
            <h1>Evelina</h1>
            <h4>Freelancing <span className="thin italic">web designer</span> and 
            <span className="thin italic">front end developer</span> student based in Gothenburg, Sweden 💫</h4>
      </motion.div>
    )
}