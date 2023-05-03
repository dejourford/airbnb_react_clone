import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import Card from "./components/Card"
import "./app.css"
import CardData from "./data.js"


export default function App() {
    console.log(CardData)
    return (
        <div className="container">
            <Navigation />
            <Hero />
            <div className="featureSection">
                
            </div>
            
        </div>
    )
}