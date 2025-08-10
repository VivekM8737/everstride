import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaEmail } from "./react-icons/FaFacebook"; 
// import { HiOutlineMail } from "react-icons/hi";
import everestlogo from "../assets/logo/everestridelogo.png"
import {
    Link,
    // eslint-disable-next-line 
} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white/80 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={everestlogo} alt="Logo" className="h-15" />
          <div className="text-xl font-semibold text-gray-800">
            <div>EVERSTRIDE</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-x-8 text-gray-700 font-medium hidden md:flex">
          <Link className="hover:text-blue-700" to="/">Home</Link>
          <Link className="hover:text-blue-700" to="/services">Lineup</Link>
          
          
          <a href="#" className="hover:text-blue-700">About</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-blue-900 text-lg">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
          <FaEmail />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
