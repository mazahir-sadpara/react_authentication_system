import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="text-sm font-medium text-red-500 border border-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Welcome back 👋
          </h2>
          <p className="text-gray-500 mt-2">
            Here’s an overview of your account.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">
              Profile
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              View and update your personal information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">
              Settings
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Manage security and application preferences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">
              Notifications
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              View recent updates and system alerts.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
