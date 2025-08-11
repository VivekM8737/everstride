// NavLinks.tsx
import { NavLink, Link } from "react-router-dom";

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link onClick={onClick} to="/" className="hover:text-blue-700"> <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600"
            : "text-gray-700 hover:text-blue-600"
        }
      >
        Home
      </NavLink></Link>
      <Link onClick={onClick} to="/services" className="hover:text-blue-700">
        <NavLink
          to="/lineup"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold border-b-2 border-blue-600"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Lineup
        </NavLink></Link>
      <a onClick={onClick} href="#" className="hover:text-blue-700">About</a>
    </>
  );
}
