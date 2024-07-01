import logo1 from "../assets/hacker.jpg";
import twitter from "../assets/twitter.png";
import facebook from "../assets/fb.png";
import instagram from "../assets/ig.png";
import whastapp from "../assets/wa.png";
import Motion from "../components/motion";
import Skill from "./skill";
import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";

function About() {
  return (
    <div>
      <div className="flex justify-between px-[200px] pt-28">
        <div className="text-violet-200">
          <Motion pos="kiri">
            <h1 className="text-white pb-4 px-40 text-[50px]">ABOUT ME</h1>
          </Motion>
          <div className="px-20 text-[20px]">
            <Motion pos="kanan">
              <p>My name is Kresna Wibisono </p>
              <p>I come from Bandung, West Java, Indonesia</p>
              <p>I'm married</p>
              <p>
                I am switching my Pilot career to become a Full Stack Developer.
              </p>
            </Motion>
            <div className="flex gap-2 pt-2">
                <motion.img src={twitter} alt="" className="bg-white rounded-md p-2" 
                transition=
                {{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay:0.2
                }}
                initial={{ scale: 0, rotate:0 }}
                animate={{ rotate: 360, scale: 1 }}/>
              <motion.img src={facebook} alt="" className="bg-white rounded-md p-2" 
              transition=
                {{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay:0.2
                }}
                initial={{ scale: 0, rotate:0 }}
                animate={{ rotate: 360, scale: 1 }}
              />
              <motion.img src={instagram} alt="" className="bg-white rounded-md p-2" 
              transition=
              {{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay:0.2
              }}
              initial={{ scale: 0, rotate:0 }}
              animate={{ rotate: 360, scale: 1 }}
              />
              <motion.img src={whastapp} alt="" className="bg-white rounded-md p-2" 
              transition=
              {{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay:0.2
              }}
              initial={{ scale: 0, rotate:0 }}
              animate={{ rotate: 360, scale: 1 }}
              />
            </div>
          </div>
        </div>
        <div>
          <Motion pos="kanan">
            <img src={logo1} alt="" className="w-[450px] pt-[10px]" />
          </Motion>
        </div>
      </div>
      <Skill />
    </div>
  );
}

export default About;
