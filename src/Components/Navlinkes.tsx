// NavLinks.tsx
import { NavLink } from "react-router-dom";

export default function NavLinks({ onClick }: { onClick?: () => void }) {

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
      : "text-gray-700 hover:text-blue-600";

  return (
    <>
      <NavLink onClick={onClick}
        to="/"
        className={navLinkClass}
      >
        Home
      </NavLink>

      <NavLink
        onClick={onClick}
        to="/services"
        className={navLinkClass}
      >
        Services
      </NavLink>
      <NavLink onClick={onClick} to="/about" className={navLinkClass}>
        About
      </NavLink>
    </>
  );
}
