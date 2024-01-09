import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="max-w-3xl py-8 px-4 max-[600px]:px-6 m-auto text-white">
    <nav className="flex flex-row justify-between items-center align-center">
      <NavLink
        to="/"
        className="select-none font-semibold text-lg"
        // className="border-green-300 text-xl select-none border-2 rounded px-2 py-2 leading-5 text-center"
      >
        {"<bond />"}
      </NavLink>
      <div className="flex flex-row gap-6">
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `select-none hover:text-green-300 ${
              isActive && "text-green-300"
            } max-[600px]:text-sm`
          }
        >
          Experience
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `select-none hover:text-green-300 ${
              isActive && "text-green-300"
            } max-[600px]:text-sm`
          }
        >
          Projects
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
