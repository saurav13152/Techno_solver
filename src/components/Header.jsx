import React from 'react';
import { HashLink} from "react-router-hash-link"
const Header = () => {
  return (
    <>
      <nav>
        <h1>Techno Solver</h1>

        <main>

            <HashLink to={"/"} >Home</HashLink>
            <HashLink to={"/#about"}  >About</HashLink>
            <HashLink to={"/#brands"}  >Brands</HashLink>
            <HashLink to={"/contact"}  >Contact</HashLink>
            <HashLink to={"/services"}    >Services</HashLink>

        </main>
      </nav>
    </>
  )
}

export default Header
