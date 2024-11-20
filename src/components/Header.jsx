// Import React and Link from react-router-dom
import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

// Define a functional component called header
const header = () => {
  return (
    <nav>
      <h1>Sunny</h1>

      <main>
        
        <HashLink to={"/#home"}>home</HashLink>
        <HashLink to={"/#about"}>about</HashLink>
        <Link to={"/contact"}>contact</Link>
        <HashLink to={"/#brands"}>brands</HashLink>
        <Link to={"/services"}>services</Link>

        
      </main>
    
      
</nav>
  )
}

export default header