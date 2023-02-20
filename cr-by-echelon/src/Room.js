import './Room.css'
import image1 from "../src/img/room.JPG";
import image2 from "../src/img/junior.JPG";
import image3 from "../src/img/orthdox.JPG";
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
                <div className="room-header">Rooms</div>
                <p className="room-text">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                <div className="room-list">
                    <div className="room-a" onClick={changeC} >Presidential Suite</div>
                    <div className="room-b" onClick={changeB} >Orthodox Suite</div>
                    <div className="room-c" onClick={changeA
                    }> Junior Suite</div>
                </div>
                <button>See more</button>
            </div>
        </div>
    );
}

export default Room;