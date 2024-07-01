import Menu from "./menu";
import logo from "../assets/logoporto.jpg";

// function Navbar() {
//     return (
//     <div className="flex items-center bg-slate-600 md:bg-black h-14 justify-start p-10 lg:flex-row gap-5">
//         <div className="flex-initial w-3/4">
//             <Menu><img src={logo} alt="" width={100}/></Menu>
//         </div>
//             <div className="flex-initial w-1/4 justify-end flex gap-5 ">
//              <Menu>Home</Menu>
//              <Menu>Profile</Menu>
//              <Menu>Skills</Menu>
//              <Menu>Contact</Menu>
//             </div>
//         </div>
//     )
// }

function Navbar() {
  return (
    <div className="flex justify-between px-10 bg-black items-center">
      <div>
        {/* LOGO */}
        <img src={logo} alt="" className="w-[150px]"/>
      </div>
      <div className="flex gap-1">
        {/* komponen */}
        <Menu>Home</Menu>
        <Menu>About Me</Menu>
        <Menu>Skills</Menu>
        <Menu>Contact</Menu>
      </div>
      <div>
        <p className="text-white">WWCD!!</p>
      </div>
    </div>
  );
}

export default Navbar;
