import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Homepage from "../../pages/homepages/homepage";

function HomePageAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If token doesn't exist, navigate to login page
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const token = localStorage.getItem("token");

  // Render Homepage only if token exists
  return token ? <Homepage /> : null;
}

export default HomePageAuth;
