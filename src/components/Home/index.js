import {Component} from 'react'
import TailSpin from 'react-loader-spinner'
import Header from '../Header'
import Course from '../Course'
import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    isFailed: false,
    isSuccess: false,
    coursesList: [],
  }

  componentDidMount() {
    this.getFetchApiDetails()
  }

  getFetchApiDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.courses.map(each => ({
        id: each.id,
        logoUrl: each.logo_url,
        name: each.name,
      }))
      this.setState({
        isLoading: false,
        isFailed: false,
        isSuccess: true,
        coursesList: updatedData,
      })
    } else {
      this.setState({
        isLoading: false,
        isFailed: true,
        isSuccess: false,
      })
    }
  }

  render() {
    const {isLoading, isSuccess, isFailed, coursesList} = this.state

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
            <div className="courses-container">
              <h1 className="heading">Courses</h1>
              <ul className="list-container">
                {coursesList.map(each => (
                  <Course key={each.id} courseDetails={each} />
                ))}
              </ul>
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
                onClick={this.getFetchApiDetails}
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

export default Home
