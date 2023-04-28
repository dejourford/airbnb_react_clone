import HeroImg from "../assets/images/house.jpg"
import "./hero.css"
export default function Hero() {
    return (
        <div className="heroSection">
            <img className="houseImg" src={HeroImg} alt="modern house" />

           
            <div className="heroText">
                <h1>Online Experiences</h1>
                <p className="hero-small-text">Join unique interactive activities led by 
                    one-of-a-kind hosts--all without leaving
                    home. 
                </p>
            </div>
           
            
        </div>
    )
}