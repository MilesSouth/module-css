import React from "react"
import "./Card.css"
const Card = ({ title, img, btnText }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="button">
          <button>{btnText}</button>
        </div>
      </div>
    </div>
  )
}

export default Card
