import React from "react";
import { Navigate, Outlet } from "react-router-dom";


export const useAuth = (userInput, passInput) => {
  const user = { username:"EMP-123", password:"admin123",loggedIn: false };
  if(userInput == user.username && passInput == user.password){
    user.loggedIn = true;
  }
  localStorage.setItem("isAuth", user.loggedIn);
};

export const ProtectedRoutes = () => {
    const checkAuth = localStorage.getItem("isAuth");
    return checkAuth=="true" ? <Outlet /> : <Navigate to="/login" />;



    // const isAuthenticated = localStorage.getItem("isAuthenticated");
    // const checkAuth = isAuthenticated ? JSON.parse(isAuthenticated).checkAuth : false;

};

