import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Style from "./modules/Login.module.css";

export function Login() {
  const navigate = useNavigate();

  function BackNavigate() {
    navigate(-1);
  }

  return (
    <div className={Style.login}>
      <div className={Style.content}>
        <Link to="/login/student">Student</Link>
      </div>
      <div className={Style.content}>
        <Link to="/login/faculty">Faculty</Link>
      </div>
      <div className={Style.outlet}>
        <Outlet />
      </div>
      <div className={Style.backbut}>
        <button onClick={BackNavigate}>Back</button>
      </div>
    </div>
  );
}
