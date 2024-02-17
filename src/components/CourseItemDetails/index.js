import {Component} from 'react'
import TailSpin from 'react-loader-spinner'
import Header from '../Header'
import './index.css'

class CourseItemDetails extends Component {
  state = {isLoading: true, isFailed: false, isSuccess: false, ItemDetails: {}}

  componentDidMount() {
    this.getFetchCourseDetails()
  }

  getFetchCourseDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    const data = await response.json()
    if (response.ok) {
      const updatedData = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }
      this.setState({
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        ItemDetails: updatedData,
      })
    } else {
      this.setState({
        isLoading: false,
        isSuccess: false,
        isFailed: true,
      })
    }
  }

  render() {
    const {isLoading, isSuccess, isFailed, ItemDetails} = this.state
    const {description, name, imageUrl} = ItemDetails

    return (
      <div>
        <Header />
        <div>
          {isLoading && (
            <div data-testid="loader" className="loader-container">
              <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}
          {isSuccess && (
            <div className="itemDetails-container">
              <div>
                <img src={imageUrl} alt={name} className="item-image" />
              </div>
              <div className="item-content">
                <h1 className="item-heading">{name}</h1>
                <p className="item-para">{description}</p>
              </div>
            </div>
          )}
          {isFailed && (
            <div className="failed-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
                alt="failure view"
                className="failed-image"
              />
              <h1 className="failed-heading">Oops! Something Went Wrong</h1>
              <p className="failed-para">
                We cannot seem to find the page you are looking for
              </p>
              <button
                type="button"
                className="failed-button"
                onClick={this.getFetchCourseDetails}
              >
                Retry
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default CourseItemDetails
