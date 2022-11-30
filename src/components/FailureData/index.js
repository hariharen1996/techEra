import './index.css'

const FailureData = props => {
  const {retry} = props
  return (
    <div className="tech-failure">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-text">
        We cannot seem to find the page you are looking for.
      </p>
      <button type="button" className="failure-btn" onClick={retry}>
        Retry
      </button>
    </div>
  )
}

export default FailureData
