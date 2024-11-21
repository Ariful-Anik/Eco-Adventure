import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";

import { toast } from "react-toastify";
import { auth } from "../firebase.init";

const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const prefilledEmail = params.get("email");
        if (prefilledEmail) {
            setEmail(prefilledEmail);
        }
    }, [location]);

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter your email!", {
                position: "top-center",
                autoClose: 2000,
            });
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent! Redirecting to Gmail...", {
                    position: "top-right",
                    autoClose: 2000,
                });
                setTimeout(() => {
                    window.location.href = "https://mail.google.com";
                }, 2000);
            })
            .catch((error) => {
                toast.error(`Error: ${error.message}`, {
                    position: "top-center",
                    autoClose: 2000,
                });
            });
    };

    return (
        <div className="flex justify-center py-28">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-center text-2xl pt-8 font-bold">Reset Your Password</h1>
                <div className="divider px-8 mb-0"></div>
                <form onSubmit={handleResetPassword} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email address</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#007B99] text-white hover:bg-[#005F73]">Reset Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
