import Nav from "../Nav"
import Footer from "../Footer"
import image1 from "../../../img/junior.JPG";
import image2 from "../../../img/gym.JPG"
import image3 from "../../../img/room.JPG"
import "./Apartment.css"
const Apartment = () => {
    let apartments = [
        { image: image1, title: "lorem ipsum", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod labore voluptatibus nobis tempore mollitia.", id: crypto.randomUUID() },
        { image: image2, title: "lorem ipsum", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod labore voluptatibus nobis tempore mollitia.", id: crypto.randomUUID() },
        { image: image3, title: "lorem ipsum", details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod labore voluptatibus nobis tempore mollitia.", id: crypto.randomUUID() }
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
                                    <button>See More</button>
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