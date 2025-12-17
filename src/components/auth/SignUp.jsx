import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    navigate("/verify-otp", { state: { email: formData.email } });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0B0F1A] p-4 font-sans">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -mr-64 -mt-64"></div>
      
      <div className="relative w-full max-w-lg bg-[#161B26] border border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-white tracking-tight">Create account</h2>
          <p className="text-slate-400 mt-2 font-medium">Join us and start your journey today.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Full Name Field */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300 ml-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full bg-[#1F2633] border border-slate-700 text-white px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-slate-600"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-[#1F2633] border border-slate-700 text-white px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-slate-600"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Grid (Two columns on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full bg-[#1F2633] border border-slate-700 text-white px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-slate-600"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Confirm</label>
              <input
                type="password"
                name="confirmPassword"
                required
                className="w-full bg-[#1F2633] border border-slate-700 text-white px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-slate-600"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-purple-600/20 active:scale-[0.98] mt-4 text-lg">
            Create Account
          </button>
        </form>

        {/* Footer Navigation */}
        <div className="mt-10 text-center border-t border-slate-800/50 pt-8">
          <p className="text-slate-400 font-medium">
            Already have an account?{" "}
            <Link to="/" className="text-white font-bold hover:text-purple-400 transition underline underline-offset-8">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;