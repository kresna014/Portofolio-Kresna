import App from "../App";
import logo2 from "../assets/htmllogo.png";
import logo3 from "../assets/csslogo.png";
import logo4 from "../assets/jslogo.png";
import logo5 from "../assets/tailwind.jpeg";
import logo6 from "../assets/reactlogo2.png";
import { motion } from "framer-motion";

function Skill() {
  return (
    <div className="w-[800px] h-[800px] pt-[250px] justify-center items-center m-auto">
      <div className="flex text-white justify-center pb-8 font-medium">
        SKILLS
      </div>
      <div className="items-center">
        <div className="flex gap-4 justify-center">
          <motion.div 
            initial={{
                opacity:0
            }}
            transition={{
                delay:0.1
            }}

            whileInView={{
                opacity:1
            }}
          >
            <img src={logo2} alt="" className="w-20 h-20" />
          </motion.div>

          <motion.div 
          initial={{
            opacity:0
          }}
          transition={{
            delay:0.2
          }}

          whileInView={{
            opacity:1
          }}

          >
          <img src={logo3} alt="" className="w-20 h-20" />
          </motion.div>

          <motion.div
          initial={{
            opacity:0
          }}
          transition={{
            delay:0.3

          }}
          whileInView={{
            opacity:1
          }}


          >
          <img src={logo4} alt="" className="w-20 h-20" />
          </motion.div>

          <motion.div
          initial={{
            opacity:0
          }}

          transition={{
            delay:0.4
          }}

          whileInView={{
            opacity:1
          }}
          
          >
          <img src={logo5} alt="" className="w-20 h-20" />
          </motion.div>

          <motion.div 
          initial={{
            opacity:0
          }}

          transition={{
            delay:0.5
          }}

          whileInView={{
            opacity:1
          }}
          
          >
          <img src={logo6} alt="" className="w-15 h-20" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
