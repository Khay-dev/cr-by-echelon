import image1 from "../../../img/hero.JPG";
import image2 from "../../../img/junior.JPG";
import image3 from "../../../img/gym.JPG"
import image4 from "../../../img/room.JPG"
import Footer from "../Footer"
import Nav from "../Nav";
import "./Gallery.css"


const Gallery = () => {
    let cards = [
        { image: image1, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image2, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image3, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image4, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image1, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image2, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image3, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image4, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image1, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image2, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image3, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image4, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image1, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image2, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image3, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image4, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image1, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image2, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image3, title: " Lorem ipsum", id: crypto.randomUUID() },
        { image: image4, title: " Lorem ipsum", id: crypto.randomUUID() }

    ]

    return (<div className="section-4">
        <div className="gallery-title">
            <Nav />
            <h2> OUR GALLERY</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis nisi delectus facere dolor asperiores officiis eveniet harum architecto quasi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, porro.</p>
        </div>
        <div className="gallery">
            <div className="gallery-main">
                {
                    cards.map((card) => (
                        <div className="gallery-card" key={card.id}>
                            <div className="card-img">
                                <img src={card.image} alt="our hotel" />
                            </div>
                            <div className="card-text">{card.title}</div>
                        </div>
                    ))}
            </div>
        </div>
        <Footer />
    </div>
    );
}

export default Gallery;