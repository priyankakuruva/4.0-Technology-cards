// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {className, title, description, imgUrl} = cardDetails
  return (
    <li className={`${className} card-item`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItem
