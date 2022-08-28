import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export function Login() {

    const navigate = useNavigate()

    function BackNavigate(){
        navigate(-1);
    }

  return (
    <div>
        <Link to="/login/student">Student</Link>
        <Link to="/login/faculty">Faculty</Link>
        <Outlet />
        <button onClick={BackNavigate}>Back</button>
    </div>
  )
}
