import React from "react";
import { motion } from "framer-motion"

const HomePage = () => {
  return(
    <>
    <motion.div
     initial={{ x: "100%" }}
     animate={{ x: "calc(100vw - 50%)" }}
    >
        <img src="/images/image2.jpg"/>
    </motion.div>
    </>
  );
};

export default HomePage;
