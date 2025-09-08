// SocialIcons.tsx
import {FaInstagram, FaLinkedinIn, FaTwitter, FaEmail } from "./react-icons/SocialLinks"; 
// import { HiOutlineMail } from "react-icons/hi";

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex space-x-4 text-blue-900 text-lg ${className}`}>
      <FaInstagram />
      <FaTwitter />
      <FaLinkedinIn />
      <FaEmail />
      {/* <HiOutlineMail /> */}
    </div>
  );
}
