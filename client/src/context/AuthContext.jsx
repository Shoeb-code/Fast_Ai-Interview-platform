import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
  } from "react";
  import api from "../services/api.js";
  import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
  
  const AuthContext = createContext();
  
  export const AuthProvider = ({ children }) => {

    const navigate=useNavigate()

    const storedToken = localStorage.getItem("token");
  
    const [token, setToken] = useState(storedToken || null);
    const [user, setUser] = useState(null);
  
    const [loading, setLoading] = useState(true);
    const [authLoading, setAuthLoading] = useState(false);
  
    const [error, setError] = useState(null);
  
  // normalize error handling message
    const getErrorMessage = (error) => {
      return (
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong"
      );
    };
  
  
    // logout 
    const logout = useCallback(() => {
        
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
        setError(null);
        toast.success("Logged out successfully");
        navigate('/')
      }, []);
  
    // fetch profile
    const fetchProfile = useCallback(async () => {
      if (!token) {
        setLoading(false);
        return;
      }
  
      try {
        setLoading(true);
        setError(null);
  
        const res = await api.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (res.data?.success) {
          setUser(res.data.user);
        } else {
          logout();
        }
      } catch (error) {
        console.error("Profile fetch failed:", error);
  
        setError(getErrorMessage(error));
        logout();
      } finally {
        setLoading(false);
      }
    }, [token, logout]);
  
    useEffect(() => {
      fetchProfile();
    }, [fetchProfile]);
  
    // Register
    const register = async (formData) => {
        try {
          
          setAuthLoading(true);
          setError(null);
      
          const res = await api.post(
            "/auth/register",
            formData
          );
      
          if (res.data?.success) {
            const newToken = res.data.token;
      
            localStorage.setItem("token", newToken);
      
            setToken(newToken);
            setUser(res.data.user);
      
            toast.success("Account created successfully 🎉");
      
            return res.data;
          } else {
            throw new Error(
              res.data?.message ||
                "Registration failed"
            );
          }
        } catch (error) {
          const message = getErrorMessage(error);
      
          setError(message);
      
          toast.error(message);
      
          throw new Error(message);
        } finally {
          setAuthLoading(false);
        }
      };
  
    // login
    const login = async (formData) => {
        try {
          setAuthLoading(true);
          setError(null);
      
          const res = await api.post(
            "/auth/login",
            formData
          );
      
          if (res.data?.success) {
            const newToken = res.data.token;
      
            localStorage.setItem("token", newToken);
      
            setToken(newToken);
            setUser(res.data.user);
      
            toast.success("Login successful 🚀");
      
            return res.data;
          } else {
            throw new Error(
              res.data?.message ||
                "Login failed"
            );
          }
        } catch (error) {
          const message = getErrorMessage(error);
      
          setError(message);
      
          toast.error(message);
      
          throw new Error(message);
        } finally {
          setAuthLoading(false);
        }
      };
  
   // Provider 
    return (
      <AuthContext.Provider
        value={{
          user,
          token,
          loading,
          authLoading,
          error,
          login,
          register,
          logout,
          fetchProfile,
          clearError: () => setError(null),
          isAuthenticated: !! token,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

 // custom hooks 
  export const useAuth = () => {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error(
        "useAuth must be used inside AuthProvider"
      );
    }
  
    return context;
  };