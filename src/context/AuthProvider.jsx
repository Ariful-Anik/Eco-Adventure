import React, { createContext, useState, useEffect } from "react";
import {
  
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.init";
import { toast } from "react-toastify";
 // Firebase configuration

// Create context
export const AuthContext = createContext();




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);
  
    // Listen for user authentication changes
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    // // Logout function
    const logout = async () => {
      setLoading(true);
      await signOut(auth);
      toast.success("Logout Successful!");
    };
  
    // // Login function
    const login =  (email, password) => {
      setLoading(true);
      return  signInWithEmailAndPassword(auth, email, password);
    };
  
    // // Register function
    const register = async (email, password) => {
      setLoading(true);
      return await createUserWithEmailAndPassword(auth, email, password);
    };
  
    // // Google Login function
    const googleLogin = async () => {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      return await signInWithPopup(auth, provider);
      
    };

    const updateUserProfile = (updatedData) => {
      return updateProfile(auth.currentUser, updatedData);
    };
  
    const item = {
      user,
      loading,
      login,
      register,
      googleLogin,
      logout,
      updateUserProfile,
    };
  
    return (
      <AuthContext.Provider value={item}>
       {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;