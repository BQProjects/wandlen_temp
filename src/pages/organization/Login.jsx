import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend API for organization login
    console.log("Organization Login:", formData);
    // Example: fetch('/api/organization/login', { method: 'POST', body: JSON.stringify(formData) });
  };

  return (
    <div className="min-h-screen bg-[#ede4dc] flex justify-center items-center py-8 px-4">
      <div className="bg-white rounded-2xl p-10 shadow-lg w-full max-w-[500px]">
        <h2 className="text-2xl font-medium text-[#381207] mb-6">
          Organization Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#7a756e] font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
            />
          </div>
          <div>
            <label className="block text-[#7a756e] font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#2a341f] text-white rounded-lg hover:bg-[#1e241a] transition font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
