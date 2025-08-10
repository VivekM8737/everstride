// NavLinks.tsx
import { Link } from "react-router-dom";

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link onClick={onClick} to="/" className="hover:text-blue-700">Home</Link>
      <Link onClick={onClick} to="/services" className="hover:text-blue-700">Lineup</Link>
      <a onClick={onClick} href="#" className="hover:text-blue-700">About</a>
      <a onClick={onClick} href="#" className="hover:text-blue-700">Contact</a>
    </>
  );
}
