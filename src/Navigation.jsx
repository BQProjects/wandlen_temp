import { Link } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const Navigation = () => {
  const { user, userType, logout, isAuthenticated } = useAuth();

  return (
    <nav className="bg-secondary text-black p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Wandalen
        </Link>

        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-200 transition-colors">
            Home
          </Link>

          {!isAuthenticated ? (
            <>
              <div className="relative group">
                <span className="cursor-pointer hover:text-blue-200 transition-colors">
                  Client
                </span>
                <div className="absolute hidden group-hover:block bg-blue-700 mt-1 rounded shadow-lg">
                  <Link
                    to="/client/login"
                    className="block px-4 py-2 hover:bg-blue-800"
                  >
                    Login
                  </Link>
                  <Link
                    to="/client/profile"
                    className="block px-4 py-2 hover:bg-blue-800"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/client/select-video"
                    className="block px-4 py-2 hover:bg-blue-800"
                  >
                    Select Video
                  </Link>
                  <Link
                    to="/client/subscribe"
                    className="block px-4 py-2 hover:bg-blue-800"
                  >
                    Subscribe
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <span className="cursor-pointer hover:text-blue-200 transition-colors">
                  Organization
                </span>
                <div className="absolute hidden group-hover:block bg-blue-700 mt-1 rounded shadow-lg">
                  <Link
                    to="/organization/login"
                    className="block px-4 py-2 hover:bg-blue-800"
                  >
                    Login
                  </Link>
                  <Link
                    to="/organization/signup"
                    className="block px-4 py-2 hover:bg-blue-800"
                  >
                    Signup
                  </Link>
                  <Link
                    to="/organization/request-quote"
                    className="block px-4 py-2 hover:bg-blue-800"
                  >
                    Request Quote
                  </Link>
                  <Link
                    to="/organization/manage-clients"
                    className="block px-4 py-2 hover:bg-blue-800"
                  >
                    Manage Clients
                  </Link>
                  <Link
                    to="/organization/profile"
                    className="block px-4 py-2 hover:bg-blue-800"
                  >
                    Profile
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <span className="cursor-pointer hover:text-blue-200 transition-colors">
                  Volunteer
                </span>
                <div className="absolute hidden group-hover:block bg-blue-700 mt-1 rounded shadow-lg">
                  <Link
                    to="/volunteer/login"
                    className="block px-4 py-2 hover:bg-blue-800"
                  >
                    Login
                  </Link>
                  <Link
                    to="/volunteer/signup"
                    className="block px-4 py-2 hover:bg-blue-800"
                  >
                    Signup
                  </Link>
                  <Link
                    to="/volunteer/profile"
                    className="block px-4 py-2 hover:bg-blue-800"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/volunteer/create-video"
                    className="block px-4 py-2 hover:bg-blue-800"
                  >
                    Create Video
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-sm">
                Welcome, {user?.name || "User"} ({userType})
              </span>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
