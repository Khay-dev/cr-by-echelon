
import './Amenities.css'

const Amenities = () => {
    let cards = [
        { name: "Restaurant", icon: "yes" },
        { name: "Fitness Center", icon: "yes" },
        { name: "Store", icon: "yes" },
        { name: "24 Hours Power", icon: "yes" },
        { name: "Security", icon: "yes" },
        { name: "Swimming Pool", icon: "yes" },
        { name: "High Speed Wifi", icon: "yes" },
        { name: "24 Hours Service", icon: "yes" }
    ]


    return (
        <div className="section-3">
            <div className="title">Our Services</div>
            <div className="section-3-a">  {
                cards.map((card) => (

                    <div className="card">
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