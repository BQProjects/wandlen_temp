import React, { useState } from "react";
import WebsiteHeader from "../../components/WebsiteHeader";
import { LineChart } from "lucide-react";
import { Link } from "react-router-dom";

const VolunteerSignup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactEmail: "",
    phone: "",
    address: "",
    accountEmail: "",
    password: "",
    confirmPassword: "",
  });
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend API
    console.log("Volunteer Signup:", formData);
    // Simulate successful signup
    setIsSignedUp(true);
    // Example: fetch('/api/volunteer/signup', { method: 'POST', body: JSON.stringify(formData) })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.success) {
    //       setIsSignedUp(true);
    //     }
    //   });
  };

  return (
    <div className="min-h-screen bg-[#ede4dc]">
      <WebsiteHeader />
      <div className="flex justify-center items-center py-8 px-4 min-h-screen">
        <div className="bg-white rounded-2xl p-10 shadow-lg w-full max-w-[1080px]">
          <h2 className="text-2xl font-medium text-[#381207] mb-6 text-center">
            Volunteer Signup
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#7a756e] font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
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
                className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
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
              Sign Up as Volunteer
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-[#7a756e]">
              Already have an account?{" "}
              <Link
                to="/volunteer/login"
                className="text-[#2a341f] font-medium hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerSignup;
