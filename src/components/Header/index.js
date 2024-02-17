import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div>
          <Link to="/" className="link-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              alt="website logo"
              className="logo-image"
            />
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
