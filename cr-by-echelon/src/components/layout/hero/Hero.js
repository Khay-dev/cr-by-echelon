import Nav from "../Nav";
import Room from '../Room/Room';
import Amenities from '../Amenities/Amenities';
import Slider from '../Slider/Slider';
import Contact from '../Contact/Contact';
import About from "../About/About"
import "./hero.css"


const Hero = () => {
    return (
        <div className="home">
            <div className="hero">
                <Nav />
                <h2> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            </div>
<About/>
            <Room />
            <Amenities />
            <Slider />
            <Contact />
        </div>
    );
}

export default Hero;