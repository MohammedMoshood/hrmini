import React from "react";
import { motion } from "framer-motion";
const Column1 = () => {
  return (
    <div className="left_column">
      <div>
        <motion.h1
          // initial={{ rotate: 0, scale: 0.5 }}
          // animate={{ rotate: 360, scale: 1 }}
          // transition={{ duration: 1 }}
        >
          HR
          <span
            style={{
              fontFamily: "Passero One",
              fontSize: "110px",
              color: "#263238",
            }}
          >
            M
          </span>
          ini
        </motion.h1>
        <span>Staff organization for small businesses</span>
      </div>
    </div>
  );
};

export default Column1;
