import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/userActions"; // Import your logout action

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button onClick={handleLogout} className="text-sm font-bold">
      Logout
    </button>
  );
};

export default Logout;
