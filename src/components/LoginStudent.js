import React from "react";

import Style from "./modules/LoginStudent.module.css";
import { useFormik } from "formik";

export function LoginStudent() {
  const formik = useFormik({
    initialValues: {
      usrname: "Unpaid",
      usrpassword: "balbal",
    },
  });

  return (
    <div className="login" id="login">
      <div className="header">
        <a>Student</a>
      </div>
      <div className="form">
        <form>
          <div>
            <label htmlFor="usrname">UserName</label>
            <input
              type="text"
              required
              placeholder="Enter username"
              name="usrname"
              onChange={formik.handleChange}
              value={formik.values.usrname}
            />
          </div>

          <div>
            <label htmlFor="usrpassword">UserPassword</label>
            <input
              type="password"
              required
              placeholder="Enter password"
              name="usrpassword"
              onChange={formik.handleChange}
              value={formik.values.usrpassword}
            />
          </div>

          <div>
            <button type="submit">Login</button>
            <label htmlFor="remember">Remember me</label>
            <input type="checkbox" defaultChecked name="remember" />
          </div>

          <div>
            <button
              type="button"
              onClick={() => {
                document.getElementById("login").style.display = "none";
              }}
            >
              Cancel
            </button>
            <button type="button">Forgot Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}
