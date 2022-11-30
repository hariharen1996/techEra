import {Component} from 'react'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          alt="not found"
          className="notfound-img"
        />
        <h1 className="not-found-heading">Page Not Found</h1>
        <p className="notfound-text">
          We are sorry, the page you requested could not be found
        </p>
      </div>
    )
  }
}

export default NotFound
