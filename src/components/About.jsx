import { useState } from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";
import { styles } from "../styles";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div
        className={`mt-[210px] ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </motion.div>

        <div className="flex-1">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="text-5xl"
          >
            About <span className="text-[#915EFF]"> Ahmed</span>
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className={`${styles.AboutSubText} mt-2 py-6`}
          >
            {showMore ? ABOUT_TEXT : `${ABOUT_TEXT.substring(0, 1000)}...`}
          </motion.p>
          <div className="text-right"> 
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-[#915EFF] underline"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
