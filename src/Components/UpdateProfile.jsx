import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {

    const [error, setError] = useState({});
    const {user, updateUserProfile,setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile = e =>{

        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        if (name.length < 5) {
          setError({ ...error, name: "name should be more then 5 character" });
          return;
        }

        const photo = form.get("photo");
        updateUserProfile({ displayName: name, photoURL: photo })
        .then(() => {
            
          navigate("/auth/profile");
        })
        .catch((err) => {
          console.log(err);
        });
    }

  return (
    <div className=" flex justify-center items-center mt-6 mb-6 ">
        <Helmet>
        <title>Adventure-Update-Profile</title>
      </Helmet>
      <div className="card  w-full max-w-lg shrink-0 rounded-none p-10 bg-[#CBF1F5]">
        <h2 className="text-2xl font-semibold text-center">
          Update your Profile
        </h2>
        <form onSubmit={handleUpdateProfile} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="photo-url"
            className="input input-bordered"
            required
          />
        </div>
            <div className="form-control mt-6">
          <button className="btn btn-neutral border-none rounded-none bg-[#007B99] text-white hover:bg-[#005F73]">Update Profile</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
