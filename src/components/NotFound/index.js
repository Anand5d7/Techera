import {Component} from 'react'
import Header from '../Header'

import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="notFound-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
            alt="not found"
            className="notFound-image"
          />
          <h1 className="notFound-heading">Page Not Found</h1>
          <p className="notFound-para">
            We are sorry, the page you requested could not be found.
          </p>
        </div>
      </div>
    )
  }
}
export default NotFound
