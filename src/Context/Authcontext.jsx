import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const API_URL = "https://691f1d74bb52a1db22c085b1.mockapi.io/indeed/usera"; 

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ---------------------------
  // Login (unchanged)
  // ---------------------------
  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}?email=${email}`);
      const found = res.data[0];

      if (found && found.password === password) {
        setUser(found);
        localStorage.setItem("user", JSON.stringify(found));
        return true;
      } else {
        alert("Invalid email or password");
        return false;
      }
    } catch (err) {
      console.log("Login error:", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------
  // SIGNUP - UPDATED FOR PROFESSIONAL FIELDS
  // ---------------------------
  const signup = async (formData) => {
    setLoading(true);
    try {
      const { 
        firstName, 
        lastName, 
        email, 
        password, 
        phone, 
        jobTitle 
      } = formData;

      // Check if user already exists
      const existing = await axios.get(`${API_URL}?email=${email}`);
      if (existing.data.length > 0) {
        alert("User with this email already exists");
        return false;
      }

      // Create new user with all professional fields
      const newUser = {
        firstName: firstName || "",
        lastName: lastName || "",
        email,
        password,
        phone: phone || "",
        jobTitle: jobTitle || "",
        createdAt: new Date().toISOString(),
        isActive: true
      };

      const res = await axios.post(API_URL, newUser);
      
      // Set user data with full profile
      const userData = {
        id: res.data.id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        phone: res.data.phone,
        jobTitle: res.data.jobTitle,
        createdAt: res.data.createdAt
      };

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;

    } catch (err) {
      console.log("Signup error:", err);
      alert("Failed to create account. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------
  // UPDATE PROFILE - NEW FUNCTION
  // ---------------------------
  const updateProfile = async (updatedData) => {
    if (!user) return false;

    try {
      const res = await axios.put(`${API_URL}/${user.id}`, {
        ...user,
        ...updatedData
      });

      const updatedUser = {
        id: res.data.id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        phone: res.data.phone,
        jobTitle: res.data.jobTitle,
        createdAt: res.data.createdAt
      };

      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return true;
    } catch (err) {
      console.log("Profile update error:", err);
      return false;
    }
  };

  // ---------------------------
  // DELETE ACCOUNT - NEW FUNCTION
  // ---------------------------
  const deleteAccount = async () => {
    if (!user) return false;

    try {
      await axios.delete(`${API_URL}/${user.id}`);
      logout();
      return true;
    } catch (err) {
      console.log("Delete account error:", err);
      return false;
    }
  };

  // ---------------------------
  // Logout
  // ---------------------------
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // ---------------------------
  // Load user from localStorage on mount
  // ---------------------------
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (err) {
        console.log("Error parsing saved user:", err);
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      signup, 
      logout,
      updateProfile,
      deleteAccount 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;