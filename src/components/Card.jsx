import "./card.css"


export default function Card(props) {
    return (
    
    <div className="card">
        <img className="cardImg" src= {props.image} alt="card image" />
        
        <div className="rating">
            <i className="fa-solid fa-star"></i>
            <p>{props.rating}</p>
        </div>
        <p className="cardText">{props.title}</p>
        <p className="cardRate">{props.rate}</p>
        
    </div>
    
    )
}