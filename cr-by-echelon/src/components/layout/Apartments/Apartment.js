import Nav from "../Nav"
import Footer from "../Footer"
import image1 from "../../../img/junior.JPG";
import image2 from "../../../img/gym.JPG"
import image3 from "../../../img/room.JPG"
import image4 from "../../../img/home.jpg"
import { Link } from "react-router-dom";

import "./Apartment.css"
const Apartment = () => {
    let apartments = [
        { image: image1, title: "Junior Suite", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod labore voluptatibus nobis tempore mollitia.", id: crypto.randomUUID(), link: "/Junior" },
        { image: image2, title: "Imperial Suite", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod labore voluptatibus nobis tempore mollitia.", id: crypto.randomUUID(), link: "/Imperial" },
        { image: image3, title: "Executive Suite", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod labore voluptatibus nobis tempore mollitia.", id: crypto.randomUUID(), link: "/Executive" },
        { image: image4, title: "Orthodox Suite", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod labore voluptatibus nobis tempore mollitia.", id: crypto.randomUUID(), link: "/Orthodox" },
        { image: image1, title: "Presidential Suite", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod labore voluptatibus nobis tempore mollitia.", id: crypto.randomUUID(), link: "/Presidential" }
    ]

    return (
        <div className="section-6">
            <div className="apartment-title">
                <Nav />
                <h2> OUR APARTMENTS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis nisi delectus facere dolor asperiores officiis eveniet harum architecto quasi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, porro.</p>
            </div>
            <div id="apartment">
                <div className="apartment-card">
                    {
                        apartments.map((apartment) => (
                            <div className="room-card" key={apartment.id}>
                                <div className="room-img">
                                    <img src={apartment.image} alt="Room" />
                                </div>
                                <div className="room-details">
                                    <div className="room-name">{apartment.title}</div>
                                    <div className="main-dets">{apartment.details}</div>
                                    <Link to={apartment.link}> <button class="custom-btn btn-11">View Room</button></Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Apartment;