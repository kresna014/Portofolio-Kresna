import logo from "../assets/logo3.jpg";
import { TypeAnimation } from "react-type-animation";
import Motion from "../components/motion";

function Page() {
  return (
    <div className="flex justify-between px-[150px] bg-black pt-20 pb-20 items-center">
      <div>
        <h1 className="text-violet-300 text-[20px]">
          <span className="font-bold">Hey Bro</span> my name
        </h1>
        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-[50px]">
          {" "}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Kresna",
              500,
              "Wibisono",
              500,
            ]}
            speed={40}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          
          />{" "}
        </h2>
        <Motion pos="kiri">
        <h3 className="text-white text-[30px] pb-4">
          I am a Full Stack Developer and I Will Rich
        </h3>
        </Motion>
        <div className="flex gap-5">
          <button className="text-black bg-white hover:bg-violet-900 rounded-full px-2">
            Download CV
          </button>
          <button className="text-black bg-white hover:bg-violet-900 rounded-full px-2">
            Explore
          </button>
        </div>
      </div>
      <div>
        <Motion pos="kanan">
        <img src={logo} alt="" className="w-[400px] w-18 rounded-full" />          
        </Motion>
      </div>
    </div>
  );
}
export default Page;
