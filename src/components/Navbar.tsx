import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = (isActive: { isActive: boolean }): string =>
    isActive.isActive ? 'text-blue-500' : 'text-black';

  return (
    <header className="header flex items-center justify-between p-4 shadow-md">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
      >
        <p className="blue-gradient_text">HB</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
