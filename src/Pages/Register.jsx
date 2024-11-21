import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { Helmet } from "react-helmet";


const Register = () => {
  const { register, googleLogin,updateUserProfile,setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "name should be more then 5 character" });
      return;
    }
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    if (password.length < 6 || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      alert("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
      return;
    }

    console.log(name,photo)
    register(email, password)
      .then((result) => {
        const user = result.user;
        
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
          setUser(user);
      })
      .catch((err) => {
        console.log(err);
        // ..
      });



    // try {
    //   const result = await register(email, password);
    //   navigate("/");
    // } catch (error) {
    //   alert("Registration failed. Please check your credentials.");
    // }
  };

 

  return (
    <div className="flex my-6 justify-center items-center">
      <Helmet>
        <title>Adventure-Register</title>
      </Helmet>
    <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
      <h2 className="text-2xl font-semibold text-center">
        Register your account
      </h2>
      <form onSubmit={handleSubmit} className="card-body">
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
        {error.name && (
          <label className="label text-sx text-red-500">{error.name}</label>
        )}

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
        {/* email input  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        {error.register && <label className="label">{error.register}</label>}

        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Register</button>
        </div>
      </form>
      <p className="text-center font-semibold">
        Allready Have An Account ?{" "}
        <Link className="text-red-500" to="/auth/login">
          Login
        </Link>
      </p>
    </div>
  </div>
  );
};

export default Register;
