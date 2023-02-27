
import './Amenities.css'

const Amenities = () => {
    let cards = [
        { name: "Restaurant", icon: "yes", id: crypto.randomUUID() },
        { name: "Fitness Center", icon: "yes", id: crypto.randomUUID() },
        { name: "Store", icon: "yes", id: crypto.randomUUID() },
        { name: "24 Hours Power", icon: "yes", id: crypto.randomUUID() },
        { name: "Security", icon: "yes", id: crypto.randomUUID() },
        { name: "Swimming Pool", icon: "yes", id: crypto.randomUUID() },
        { name: "High Speed Wifi", icon: "yes", id: crypto.randomUUID() },
        { name: "24 Hours Service", icon: "yes", id: crypto.randomUUID() }
    ]


    return (
        <div className="section-3">
            <div className="title">Our Services</div>
            <div className="section-3-a">  {
                cards.map((card) => (

                    <div className="card" key={card.id}>
                        <div className="icon">
                            {card.icon}
                        </div>
                        <div className="text">
                            {card.name}
                        </div>
                    </div>
                ))
            }</div>

        </div>
    );
}

export default Amenities;