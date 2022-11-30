import {Component} from 'react'
import Loader from 'react-loader-spinner'
import FailureData from '../FailureData'
import './index.css'
import Courses from '../Courses'

const constantTypes = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class TechEra extends Component {
  state = {data: [], apiStatus: constantTypes.initial}

  componentDidMount() {
    this.getTechData()
  }

  getTechData = async () => {
    this.setState({apiStatus: constantTypes.loading})
    const response = await fetch('https://apis.ccbp.in/te/courses')
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.courses.map(item => ({
        id: item.id,
        logoUrl: item.logo_url,
        name: item.name,
      }))
      this.setState({data: updatedData, apiStatus: constantTypes.success})
    } else {
      this.setState({apiStatus: constantTypes.failure})
    }
  }

  renderTechSuccess = () => {
    const {data} = this.state
    return (
      <ul className="tech-items">
        {data.map(item => (
          <Courses item={item} key={item.id} />
        ))}
      </ul>
    )
  }

  retry = () => {
    this.getTechData()
  }

  renderTechFailure = () => <FailureData retry={this.retry} />

  renderTechLoading = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderTechStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case constantTypes.success:
        return this.renderTechSuccess()
      case constantTypes.failure:
        return this.renderTechFailure()
      case constantTypes.loading:
        return this.renderTechLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Courses</h1>
        <div className="tech-data">{this.renderTechStatus()}</div>
      </div>
    )
  }
}

export default TechEra
