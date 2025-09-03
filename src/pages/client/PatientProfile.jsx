import React, { useState } from "react";

const PatientProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "John Smith",
    organizationName: "Sunrise Wellness Center",
    contactEmail: "john.smith@wellnesscenter.nl",
    phone: "+31 612 345 678",
    address: "123 Green Street, Amsterdam, NL",
    accountEmail: "johnsmith.vw@gmail.com",
    password: "*************",
    currentPlan: "Home Subscription (€12.99/month)",
    validUntil: "Sept 21, 2025",
  });

  const handleInputChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // TODO: Integrate with backend API
    console.log("Saving patient profile:", profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset to original values if needed
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#ede4dc]">
      {/* Header Section */}
      <div className="relative h-96 bg-gradient-to-r from-[#2a341f] to-[#3a452f]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-between h-full px-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
              <svg width={32} height={32} viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="#381207"
                  strokeWidth="2"
                />
                <path
                  d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
                  stroke="#381207"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-medium text-white mb-2">
                John Smith
              </h1>
              <button className="px-4 py-2 border border-white/30 rounded-lg text-white text-sm hover:bg-white/10 transition">
                Remove Image
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              <a
                href="#"
                className="text-white text-lg font-medium hover:text-gray-200 transition"
              >
                Welcome
              </a>
            </nav>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Settings Dropdown */}
        <div className="absolute top-4 right-4">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <button className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 rounded">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"
                  stroke="#381207"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#381207"
                  strokeWidth="2"
                />
              </svg>
              <span className="text-sm font-medium">Account Settings</span>
            </button>
            <button className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 rounded">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V16"
                  stroke="#381207"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 8L18 12L14 16"
                  stroke="#381207"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 12H18"
                  stroke="#381207"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-medium">Log Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Account Info Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-medium text-[#381207] mb-6">
            Account Info
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#7a756e] font-medium mb-2">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="fullName"
                    value={profileData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
                  />
                ) : (
                  <div className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg text-[#381207]">
                    {profileData.fullName}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-[#7a756e] font-medium mb-2">
                  Organization Name/Family Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="organizationName"
                    value={profileData.organizationName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
                  />
                ) : (
                  <div className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg text-[#381207]">
                    {profileData.organizationName}
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#7a756e] font-medium mb-2">
                  Contact Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="contactEmail"
                    value={profileData.contactEmail}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
                  />
                ) : (
                  <div className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg text-[#381207]">
                    {profileData.contactEmail}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-[#7a756e] font-medium mb-2">
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
                  />
                ) : (
                  <div className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg text-[#381207]">
                    {profileData.phone}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="block text-[#7a756e] font-medium mb-2">
                Address
              </label>
              {isEditing ? (
                <textarea
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
                />
              ) : (
                <div className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg text-[#381207] min-h-[3rem]">
                  {profileData.address}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Login Info Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-medium text-[#381207] mb-6">
            Login Info
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#7a756e] font-medium mb-2">
                Account Email
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="accountEmail"
                  value={profileData.accountEmail}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a341f]"
                />
              ) : (
                <div className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg text-[#381207]">
                  {profileData.accountEmail}
                </div>
              )}
            </div>
            <div>
              <label className="block text-[#7a756e] font-medium mb-2">
                Password
              </label>
              <div className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg text-[#381207]">
                {profileData.password}
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Info Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-medium text-[#381207] mb-6">
            Subscription Info
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-[#7a756e] font-medium mb-2">
                Current Plan
              </label>
              <div className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg text-[#381207]">
                {profileData.currentPlan}
              </div>
            </div>
            <div>
              <label className="block text-[#7a756e] font-medium mb-2">
                Valid Until
              </label>
              <div className="w-full p-3 border border-[#b3b1ac] bg-[#f7f6f4] rounded-lg text-[#381207]">
                {profileData.validUntil}
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button className="px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50 transition">
              Upgrade Plan
            </button>
            <button className="px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50 transition">
              Cancel Subscription
            </button>
          </div>
        </div>

        {/* Close Account Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-medium text-[#381207] mb-6">
            Close Your Account
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[#7a756e] flex-1">
              To close your account, first move any remaining sites to Trash. If
              your site has any Premium Plans or domains connected, you'll need
              to cancel or transfer them first.
            </p>
            <button className="px-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50 transition whitespace-nowrap">
              Close Your Account
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="px-6 py-3 bg-[#2a341f] text-white rounded-lg hover:bg-[#1e241a] transition font-medium"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-3 bg-[#2a341f] text-white rounded-lg hover:bg-[#1e241a] transition font-medium"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
