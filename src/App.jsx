import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import Card from "./components/Card"
import "./app.css"
import CardData from "./data.js"


export default function App() {
    const cardElement = CardData.map(cardItem => {
        return ( 
            <Card
                image={cardItem.image}
                rating={cardItem.rating}
                title={cardItem.title}
                rate={cardItem.rate}
            />
        )
    } )
    return (
        <div className="container">
            <Navigation />
            <Hero />
            <div className="featureSection">
                {cardElement}
            </div>
            
        </div>
    )
}