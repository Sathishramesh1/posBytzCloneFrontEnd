import React from "react";
import "./Integrations.css";
import animation from "../utilites/animation.json";
import { motion } from "framer-motion";
import { fadeIn } from "../utilites/motion";
import { MultiCarousel } from "./Multi";
import carosel1 from "../utilites/carosel1.json";

function Integrations() {
  return (
    <div className="integration_page">
      <h1>Integrations</h1>
      <p>
        Connect <b>third-party software integrations</b> to PosBytz to keep your
        business running smoothly
      </p>

      <div className="animation_container">
        {animation.map((ele, index) => {
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              variants={fadeIn(index, ele.delay)}
              viewport={{ once: false }}
            >
              <div>
                <img src={ele.url} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Integrations;
