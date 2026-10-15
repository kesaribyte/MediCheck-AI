
import { Link, NavLink } from "react-router-dom";
import { HeartPulse } from "lucide-react";

function Header() {
  return (
    <header className="border-b border-orange-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="rounded-xl bg-orange-600 p-2.5 text-white">
            <HeartPulse size={25} />
          </span>
          <span className="text-xl font-bold text-stone-900">
            MediCheck <span className="text-orange-600">AI</span>
          </span>
        </Link>

        <div className="flex items-center gap-8 font-medium text-stone-600">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-600" : "hover:text-orange-600"}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-600" : "hover:text-orange-600"}>
            About
          </NavLink>
          <Link
            to="/assessment"
            className="rounded-xl bg-orange-600 px-5 py-3 text-white hover:bg-orange-700"
          >
            Start Assessment
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
