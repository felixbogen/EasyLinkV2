import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './header.css'
import Logo from "./Logo"

const Header = ({ siteTitle }) => (
  <header>
    <div className="navbar">
      <Link className="Logo">
        <Logo/>
      </Link>
      <div className='Links'> 
        <Link className="Link">Product</Link>
        <Link className="Link">About Us</Link>
        <Link className="Link">Our Customers</Link>
      </div>
      <div className='LoginBox'><Link to='/login'className='Login'>Login</Link></div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
