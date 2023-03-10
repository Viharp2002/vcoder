import React from 'react';
import {Link} from "react-router-dom"

const Navbar = (props) => {
    const handleLogout = ()=>{
        localStorage.removeItem("sanket");
        props.setCookie(null);
    }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
             <Link className="navbar-brand" to="">Vcoder </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                         <Link className="nav-link" aria-current="page" to="/">Home </Link>
                    </li>
                    <li className="nav-item">
                         <Link className="nav-link" to="/about">About </Link>
                    </li>
                    <li className="nav-item">
                         <Link className="nav-link" to="/contact">Contact </Link>
                    </li>
                    {
                    !props.cookie
                    ?(
                     <li className="nav-item">
                         <Link className="nav-link" to="/login">Admin Login</Link>
                     </li>
                    ):
                    (
                        <li className="nav-item">
                         <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                        </li>
                    )
                    }
                    {
                        props.cookie && (<li className="nav-item">
                        <Link className="nav-link" to="/add">Add</Link>
                       </li>)
                    }
                     {
                        props.cookie && (<li className="nav-item">
                        <Link className="nav-link" to="/del">Delete</Link>
                       </li>)
                    }
                </ul>
            </div>
        </div>
    </nav> 
    </>
  )
}

export default Navbar
