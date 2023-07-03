import "./Card.css"
import Button from "../button/Button"

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
          <Button btnText={btnText}></Button>
        </div>
      </div>
    </div>
  )
}

export default Card
