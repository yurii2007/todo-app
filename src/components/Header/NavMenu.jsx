import { NavLink } from "react-router-dom";

import navLinks from "../../constants/navLinks";

const NavMenu = () => {
  return (
    <nav>
      <ul className="flex gap-2 md:gap-4">
        {navLinks.map((link) => (
          <li key={link.name} className="group">
            <NavLink
              className="secondary-text aria-[current=page]:text-font-header group-hover:text-font-header transition-colors"
              to={link.path}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
