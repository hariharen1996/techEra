import {Component} from 'react'
import Loader from 'react-loader-spinner'
import FailureData from '../FailureData'
import './index.css'

const constantTypes = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class CourseItems extends Component {
  state = {courseData: [], apiStatus: constantTypes.initial}

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({apiStatus: constantTypes.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = [data.course_details].map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        imageUrl: item.image_url,
      }))

      this.setState({courseData: updatedData, apiStatus: constantTypes.success})
    } else {
      this.setState({apiStatus: constantTypes.failure})
    }
  }

  renderCourseSuccess = () => {
    const {courseData} = this.state
    return (
      <ul className="course-items">
        {courseData.map(item => (
          <li className="course-lists" key={item.id}>
            <div className="course-card">
              <div className="image-container">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="course-img"
                />
              </div>
              <div className="course-content">
                <h1 className="course-heading">{item.name}</h1>
                <p className="course-description">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  retry = () => {
    this.getCourseDetails()
  }

  renderCourseFailure = () => <FailureData retry={this.retry} />

  renderCourseLoading = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderCourseStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case constantTypes.success:
        return this.renderCourseSuccess()
      case constantTypes.failure:
        return this.renderCourseFailure()
      case constantTypes.loading:
        return this.renderCourseLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="course-details">
        <div className="course-details-card">{this.renderCourseStatus()}</div>
      </div>
    )
  }
}

export default CourseItems
