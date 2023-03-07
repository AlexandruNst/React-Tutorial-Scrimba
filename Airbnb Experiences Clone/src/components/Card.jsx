import cardImage from "../assets/katie-zaferes.png"
import starImage from "../assets/star.png"

export default function Card() {
    return (
        <div className="card">
            <span className="card--status">SOLD OUT</span>
            <img src={cardImage} alt="Card Image" className="card--image" />
            <div className="card--rating">
                <img src={starImage} alt="Star" className="card--rating--star" />
                <span>5.0</span>
                <span className="card--rating--gray">(6) •</span>
                <span className="card--rating--gray">USA</span>
            </div>
            <p className="card--description">Life lessons from Katie Zaferes</p>
            <p className="card--price">
                <span>From $136</span> / person
            </p>
        </div>
    )
}