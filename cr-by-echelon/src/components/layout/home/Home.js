import Nav from "../Nav";
import Room from '../Room/Room';
import Amenities from '../Amenities/Amenities';
import Slider from '../Slider/Slider';
import About from "../About/About"
import Footer from "../Footer"
import "./home.css"


const Hero = () => {

    return (
        <div className="home">
            <div className="hero">
                <Nav />
                <div className="main-home">
                    <div className="home-img">
                        <h2>Corporate Residence <br /> Upscaling Luxury  <br /> Limitless Style </h2>
                    </div>
                </div>


            </div>
            <About />
            <Room />
            <Amenities />
            <Slider />
            <Footer />
        </div>
    );
}

export default Hero;