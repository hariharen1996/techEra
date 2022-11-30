import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Courses extends Component {
  render() {
    const {item} = this.props
    const {id, name, logoUrl} = item
    return (
      <li className="tech-lists">
        <Link to={`courses/${id}`}>
          <div className="tech-card">
            <img src={logoUrl} alt={name} className="tech-img" />
            <p className="tech-name">{name}</p>
          </div>
        </Link>
      </li>
    )
  }
}

export default Courses
