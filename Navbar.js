import React, { useState } from "react";
import { FaCoins, FaRegistered } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import "./Navbar.css";

const Navbar = ({ user, setUser }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div>
        {/* <Buttons /> */}
        {/* <Buttons>Signup</Buttons> */}
      </div>
      <Link to="/">
        <div className="navbar">
          <FaCoins className="icon" />
          <h1>
            {" "}
            Crypto <span className="purple">Verse</span>
          </h1>

          {user ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                localStorage.removeItem("user");
                setUser(null);
                navigate("/signup");
              }}
            >
              Logout
            </button>
          ) : (
              <div className="linkdiv">
                <Link to="/signup">
                <button className="btn btn-primary bt">Signup</button>
              </Link>
              &nbsp;&nbsp;&nbsp;
              <Link to="/login">
                <button className="btn btn-primary bt">Signin</button>
              </Link>{" "}
              </div>
          )}
        </div>
        {/*  */}
        
      </Link>
      {/* {user ? <button className='btn btn-primary' onClick={() => {
          localStorage.removeItem('user');
          setUser(null)
          navigate('/signup')
        }}>Logout</button>
        
      :<>
        <Link to="/signup">
        <button className='btn btn-primary bt' >Signup</button>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/login">
        <button className='btn btn-primary bt'>Signin</button>
        </Link> </>} */}
    </>
  );
};

export default Navbar;
