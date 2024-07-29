import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form } from "react-bootstrap";
import { getUser } from "../utils/ApiFuctions";

const Profile = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [user, setUser] = useState("");

  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const userData = await getUser(userId, token);
        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [userId]);
  return <div></div>;
};

export default Profile;
