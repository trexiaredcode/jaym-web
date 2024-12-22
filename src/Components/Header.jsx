import { NavLink } from 'react-router';

function Header() {
  return (
    <>
      <div className="bg-violet-900 border-solid border-2 border-blue-300 p-4 sticky top-0 text-white flex items-center justify-between">
        
        <div className="flex items-center">
          <img className="h-12 w-auto" src="src/assets/logo.png" alt="Logo" />
        </div>

        <nav className="flex flex-row space-x-10 items-center">
          <NavLink
            to="/"
            className="font-medium font-serif text-lg tracking-widest uppercase hover:text-blue-400 transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className="font-medium font-serif text-lg tracking-widest uppercase hover:text-blue-400 transition duration-300"
          >
            About
          </NavLink>
          <NavLink
            to="blogs"
            className="font-medium font-serif text-lg tracking-widest uppercase hover:text-blue-400 transition duration-300"
          >
            Quotes
          </NavLink>
          <NavLink
            to="users"
            className="font-medium font-serif text-lg tracking-widest uppercase hover:text-blue-400 transition duration-300"
          >
            Recently Visited
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Header;
