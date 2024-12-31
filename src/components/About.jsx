import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      <div className="flex flex-wrap gap-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
        
           As a Software Developer with over a year of experience, 
           I specialize in building scalable applications using React.js, Express.js, Node.js, MongoDB, 
           and Java. With a strong foundation in DSA, I’ve achieved a 30% improvement in code efficiency in key projects. 
           Certified as an AWS Solutions Architect Associate, I’ve contributed to cloud projects that enhanced scalability by 40% and optimized costs by 20%. 
           My DevOps skills have streamlined deployment processes, reducing deployment times by 25%. I’m passionate about problem-solving, system design, and creating impactful solutions while driving innovation in every project.
  
        </motion.p>

        <Tilt className="mx-auto my-auto green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <motion.button
            className="bg-tertiary text-secondary px-10 py-5 rounded-[20px]"
            onClick={() => {
              window.location.href = '#contact'; 
            }}
          >
            Contact!
          </motion.button>
        </Tilt>
        <Tilt className="mx-auto my-auto green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <motion.button
            className="bg-tertiary text-secondary px-10 py-5 rounded-[20px]"
            onClick={() => {
              window.location.href = 'https://drive.google.com/drive/folders/1atXW0mdcs_5pQ0enxwPl1gt1_TQewYqc'; 
            }}
          >
            Resume
          </motion.button>
        </Tilt>
      </div>


      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>

  );
};

export default SectionWrapper(About, "about");
