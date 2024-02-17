import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Course extends Component {
  render() {
    const {courseDetails} = this.props
    const {id, logoUrl, name} = courseDetails

    return (
      <Link to={`courses/${id}`} className="link-item">
        <li className="list-item">
          <img src={logoUrl} alt={name} className="course-image" />
          <p className="course-para">{name}</p>
        </li>
      </Link>
    )
  }
}

export default Course
