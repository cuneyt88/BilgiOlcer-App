import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-light p-4">
        <article>
          <Link to="#"><i className="fab fa-facebook-f"/></Link>
          <Link to="#"><i className="fab fa-youtube"/></Link>
          <Link to="#"><i className="fab fa-linkedin"/></Link>
          <Link to="#1"><i className="fab fa-instagram"/></Link>
        </article>
        <article className="p-4 h6"> © Copyright by BilgiÖlçer 2023 </article>
      </footer>
    </div>
  )
}

export default Footer