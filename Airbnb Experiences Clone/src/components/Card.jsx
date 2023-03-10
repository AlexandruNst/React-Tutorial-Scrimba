// import cardImageRoot from "../assets/katie-zaferes.png"
import * as images from "../assets/Media"
import starImage from "../assets/star.png"

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) badgeText = "SOLD OUT"
    else if (props.location === "Online") badgeText = "ONLINE"

    return (
        <div className="card">
            {badgeText && <span className="card--status">{badgeText}</span>}
            <img src={images[props.coverImg]} alt="Card Image" className="card--image" />
            <div className="card--rating">
                <img src={starImage} alt="Star" className="card--rating--star" />
                <span>{props.stats.rating}</span>
                <span className="card--rating--gray">({props.stats.reviewCount}) •</span>
                <span className="card--rating--gray">{props.location}</span>
            </div>
            <p className="card--description">{props.title}</p>
            <p className="card--price">
                <span>From ${props.price}</span> / person
            </p>
        </div>
    )
}