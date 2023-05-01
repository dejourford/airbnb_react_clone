import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import Card from "./components/Card"
import "./app.css"
export default function App() {
    return (
        <div className="container">
            <Navigation />
            <Hero />
            <div className="featureSection">
                <Card />
            </div>
            
        </div>
    )
}