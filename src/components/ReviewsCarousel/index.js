// Write your code here
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props

    this.setState(prevState => ({
      index:
        prevState.index < reviewsList.length - 1 ? prevState.index + 1 : prevState.index,
    }))
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const src = reviewsList[index].imgUrl
    const name = reviewsList[index].username
    const companyName = reviewsList[index].companyName
    const desc = reviewsList[index].description

    // const lengthReviewsList = reviewsList.length

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">Reviews</h1>
          <img src={src} alt={name} className="profile-img" />
          <div className="arrow-name-container">
            <button data-testid="leftArrow" className="btn" onClick={this.onClickLeftArrow}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="left-arrow"
              />
            </button>
            <p className="name">{name}</p>
            <button data-testid="rightArrow" className="btn" onClick={this.onClickRightArrow}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="right-arrow"
              />
            </button>
          </div>
          <p className="company-name">{companyName}</p>
          <p className="desc">{desc}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

// onClick={index < lengthReviewsList? this.onClickRightArrow : ''}
