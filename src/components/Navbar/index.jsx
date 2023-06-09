import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import useFirebaseUser from "../../hooks/useFirebaseUser";
const Navbar = () => {
  const { user } = useFirebaseUser();
  const handleLogOut = async () => {
    await auth.signOut();
  };
  return (
    <div className="navbar bg-base-100 max-w-[1200px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/toys">All Toys</Link>
            </li>{" "}
            {user && (
              <>
                <li>
                  <Link to="/my-toys">My Toys</Link>
                </li>
                <li>
                  <Link to="/add-toy">Add A Toy</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Toy Marketplace
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/toys">All Toys</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/my-toys">My Toys</Link>
              </li>
              <li>
                <Link to="/add-toy">Add A Toy</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button
              className="btn btn-outline btn-md mr-2"
              onClick={handleLogOut}
            >
              Log Out
            </button>
            <NavLink className="btn btn-md" to="/signup">
              {user?.displayName || user?.email}
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className="btn btn-outline btn-md mr-2" to="/login">
              Login
            </NavLink>
            <NavLink className="btn btn-md" to="/signup">
              SignUp
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
