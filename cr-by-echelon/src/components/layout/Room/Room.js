import './Room.css'
import image1 from "../../../img/room.JPG";
import image2 from "../../../img/junior.JPG";
import image3 from "../../../img/orthdox.JPG";
import { Link } from 'react-router-dom';
import { useState } from "react"

const Room = () => {
    const [img, setImg] = useState(image1)
    let changeC = () => {
        setImg(image1)
    }
    let changeA = () => {
        setImg(image2)
    }
    let changeB = () => {
        setImg(image3)
    }
    return (
        <div className="section-2">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="room-det">
                <div className="room-header">Our Apartments</div>
                <p className="room-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim ea perspiciatis cumque.</p>
                <div className="room-list">
                    <div className="room-a room" onClick={changeC} >Presidential Suite</div>
                    <div className="room-b room" onClick={changeB} >Orthodox Suite</div>
                    <div className="room-c room" onClick={changeA
                    }> Junior Suite</div>
                </div>
                <Link to={"/Apartment"}><button> More Details</button></Link>
            </div>
        </div>
    );
}

export default Room;