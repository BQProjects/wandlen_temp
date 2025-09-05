import React from "react";
import { useNavigate } from "react-router-dom";

const ManageVolunteer = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/admin/volunteer-detail");
  };

  const handleEdit = () => {
    navigate("/admin/volunteer-detail");
  };

  const users = [
    {
      firstName: "John",
      lastName: "Lee",
      phone: "+31 6 1234 5678",
      email: "johnlee@gmail.com",
      isVolunteer: false,
    },
    {
      firstName: "Mark",
      lastName: "Ham",
      phone: "+31 6 1234 5678",
      email: "markham@gmail.com",
      isVolunteer: true,
    },
    {
      firstName: "Sandy",
      lastName: "Rue",
      phone: "+31 6 1234 5678",
      email: "sandyrue@gmail.com",
      isVolunteer: false,
    },
    {
      firstName: "Lisa",
      lastName: "Mona",
      phone: "+31 6 1234 5678",
      email: "lisamona@gmail.com",
      isVolunteer: false,
    },
    {
      firstName: "Betty",
      lastName: "Walt",
      phone: "+31 6 1234 5678",
      email: "bettywalt@gmail.com",
      isVolunteer: false,
    },
    {
      firstName: "Tom",
      lastName: "Harris",
      phone: "+31 6 1234 5678",
      email: "tomharris@gmail.com",
      isVolunteer: false,
    },
  ];

  return (
    <div className="flex-1 bg-[#f7f6f4] p-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-medium text-[#381207] font-['Poppins'] mb-4">
          Volunteer list view from form
        </h1>
        <p className="text-xl text-[#381207] font-['Poppins'] max-w-2xl">
          Select and add members from this quote request.
        </p>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto rounded-[0.625rem] bg-[#ede4dc]/[.30]">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#a6a643]/[.2] border-b border-b-[#d9bbaa]">
              <th className="px-6 py-4 text-left text-[#2a341f] font-['Poppins'] text-lg">
                First name
                <svg
                  width={11}
                  height={11}
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline ml-2"
                >
                  <path
                    d="M5.66667 0.832031V10.1654M5.66667 10.1654L10.3333 5.4987M5.66667 10.1654L1 5.4987"
                    stroke="#2A341F"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </th>
              <th className="px-6 py-4 text-left text-[#2a341f] font-['Poppins'] text-lg">
                Last name
                <svg
                  width={11}
                  height={11}
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline ml-2"
                >
                  <path
                    d="M5.66667 0.832031V10.1654M5.66667 10.1654L10.3333 5.4987M5.66667 10.1654L1 5.4987"
                    stroke="#2A341F"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </th>
              <th className="px-6 py-4 text-left text-[#2a341f] font-['Poppins'] text-lg">
                Phone number
                <svg
                  width={11}
                  height={11}
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline ml-2"
                >
                  <path
                    d="M5.66667 0.832031V10.1654M5.66667 10.1654L10.3333 5.4987M5.66667 10.1654L1 5.4987"
                    stroke="#2A341F"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </th>
              <th className="px-6 py-4 text-left text-[#2a341f] font-['Poppins'] text-lg">
                Contact email
                <svg
                  width={11}
                  height={11}
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline ml-2"
                >
                  <path
                    d="M5.66667 0.832031V10.1654M5.66667 10.1654L10.3333 5.4987M5.66667 10.1654L1 5.4987"
                    stroke="#2A341F"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </th>
              <th className="px-6 py-4 text-center text-[#2a341f] font-['Poppins'] text-lg">
                Volunteer
              </th>
              <th className="px-6 py-4 text-center text-[#2a341f] font-['Poppins'] text-lg">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className={`border-b border-b-[#d9bbaa] ${
                  index % 2 === 0 ? "bg-[#ede4dc]" : ""
                }`}
              >
                <td className="px-6 py-4 text-[#381207] font-['Poppins']">
                  {user.firstName}
                </td>
                <td className="px-6 py-4 text-[#381207] font-['Poppins']">
                  {user.lastName}
                </td>
                <td className="px-6 py-4 text-[#381207] font-['Poppins']">
                  {user.phone}
                </td>
                <td className="px-6 py-4 text-[#381207] font-['Poppins']">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-center">
                  <input
                    type="checkbox"
                    checked={user.isVolunteer}
                    readOnly
                    className="w-5 h-5 text-[#dd9219] bg-gray-100 border-gray-300 rounded focus:ring-[#dd9219] focus:ring-2"
                  />
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="px-4 py-2 rounded bg-[#dd9219] text-white font-['Poppins'] hover:bg-[#c4a016] cursor-pointer"
                    onClick={index === 1 ? handleEdit : handleAdd}
                  >
                    {index === 1 ? "Edit" : "Add"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageVolunteer;
