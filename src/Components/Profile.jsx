import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { Helmet } from "react-helmet-async";
import 'animate.css';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/auth/update-profile");
  };

  return (

    <div className="mt-12  ">

    <div className="p-6 mb-6 bg-[#d1eef7]  max-w-4xl mx-auto  rounded-lg  shadow-md text-center ">
      <Helmet>
        <title>Adventure-Profile</title>
      </Helmet>
      <h1 className="text-3xl  font-bold  text-[#3C4858]">
        Welcome, {user?.displayName || "User"}!
      </h1>
      <div className="mt-6 p-4 bg-[#D6F1F9] rounded-lg shadow-sm">
        <img
          src={user?.photoURL
            || "https://via.placeholder.com/150"}
          alt="User Profile"
          className="w-36 h-36 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500"
        />
        <p className="text-lg font-medium text-gray-700">
          <span className="font-semibold text-gray-900">Name:</span>{" "}
          {user?.displayName || "N/A"}
        </p>
        <p className="text-lg font-medium text-gray-700 mt-2">
          <span className="font-semibold text-gray-900">Email:</span>{" "}
          {user?.email || "N/A"}
        </p>
        <p className="text-lg font-medium text-gray-700 mt-2">
          <span className="font-semibold text-gray-900">Verified:</span>{" "}
          {user?.emailVerified?"Verified":"Not verified" || "Not Verified"}
        </p>
        <button
          onClick={handleUpdate}
          className="mt-6 bg-[#007B99] text-white hover:bg-[#005F73] font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300"
        >
          Update Profile
        </button>
      </div>
    </div>
    </div>
  );
};

export default Profile;
