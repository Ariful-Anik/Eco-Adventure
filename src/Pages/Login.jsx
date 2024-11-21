import { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";


const Login = () => {
  const { login,googleLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const [email, setEmail] = useState(""); // Track entered email
  const navigate = useNavigate();
  // console.log(location);
  const user = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });

    login(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(location?.state ? location.state : "/");
        toast.success("Login Successful!");
        setUser(user);
        console.log('navigator');
        
        
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
      
  };

  const handleGoogleLogin =() =>{
    googleLogin()
    
    navigate(location?.state ? location.state : "/");
    toast.success("Login Successful!");
    
  }
  return (
    <div className=" my-6 flex justify-center items-center">
      <Helmet>
        <title>Adventure-Login</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
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
              onChange={(e) => setEmail(e.target.value)} // Update email state
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
            {error.login && (
              <label className="label text-sm text-red-600">
                {error.login}
              </label>
            )}
            <label className="label">
              <Link to={`/auth/forgot-password?email=${email}`} className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
          
        </form>
        <div className="w-10/12 mx-auto mb-3">
            <button onClick={handleGoogleLogin} className="btn w-full btn-neutral rounded-none">Login with Google <FcGoogle /></button>
          </div>
        <p className="text-center font-semibold">
          Dont’t Have An Account ?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
