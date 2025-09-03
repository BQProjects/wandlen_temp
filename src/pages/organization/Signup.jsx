import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactEmail: "",
    phone: "",
    address: "",
    accountEmail: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend API for organization signup
    console.log("Organization Signup:", formData);
    // Example: fetch('/api/organization/signup', { method: 'POST', body: JSON.stringify(formData) });
  };

  return (
    <div className="min-h-screen bg-[#ede4dc] flex justify-center items-center py-8 px-4">
      <div className="bg-white rounded-2xl p-10 shadow-lg w-full max-w-[1080px]">
        <h2 className="text-2xl font-medium text-[#381207] mb-6">
          Organization Signup
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#7a756e] font-medium mb-2">
                Organization Name
              </label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                placeholder="E.g., Sunrise Wellness Center"
                required
                className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
              />
            </div>
            <div>
              <label className="block text-[#7a756e] font-medium mb-2">
                Contact Email
              </label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                placeholder="E.g. info@wellnesscenter.nl"
                required
                className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#7a756e] font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+31"
                className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
              />
            </div>
            <div>
              <label className="block text-[#7a756e] font-medium mb-2">
                Account Email
              </label>
              <input
                type="email"
                name="accountEmail"
                value={formData.accountEmail}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
              />
            </div>
          </div>
          <div>
            <label className="block text-[#7a756e] font-medium mb-2">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Street, building number, Postal Code, City"
              className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div>
              <label className="block text-[#7a756e] font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#2a341f] text-white rounded-lg hover:bg-[#1e241a] transition font-medium"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
