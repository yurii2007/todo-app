import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
