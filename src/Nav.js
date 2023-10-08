import React, {useState, useEffect } from 'react'
import "./Nav.css"

const Nav = () => {
  
  const [show, handleShow] = useState(false);
  
  useEffect( () => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll", null);
    }
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
            className='nav__logo'
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
            alt="Netflix Logo" />

        <img
            className='nav__avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="Netflix Logo" />
      
    </div>
  )
}

export default Nav