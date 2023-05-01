import "./card.css"
import KobeImage from "../assets/images/kobe.jpeg"

export default function Card() {
    return (
    
    <div className="card">
        <img className="kobeImg" src={KobeImage} alt="kobe bryant image" />
        
        <div className="rating">
            <i className="fa-solid fa-star"></i>
            <p>5.0 (6)-USA</p>
        </div>
        <p className="cardText">Life lessons with Kobe Bryant</p>
        <p className="cardRate">From $136 / person</p>
        
    </div>
    
    )
}