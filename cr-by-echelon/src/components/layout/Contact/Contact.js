import Nav from "../Nav";
import "./Contact.css"

const Contact = () => {


    // implement email.js for the form ......
    return (
        <div>
            <Nav />
            <div className="section-5">

                <div className="main-contact">
                    <div className="contact-text">
                        WE ARE HERE TO HELP <br /> CONTACT US ANYTIME                    </div>
                    <div className="contact-dets">
                        <div className="name">
                            CORPORATE RESIDENCE
                        </div>
                        <div className="address">Lorem ipsum dolor, sit amet consectetur adipisicing elit, Expedita consequatur delectus accusamus quibusdam aliquid.</div>
                        <a href="xxxxxxxx" class="mail">xxxx@xxxx.com</a>
                        <a href="tel:+23400000000" class="call">+2340000000000</a>
                        <div className="name">
                            ECHELON HEIGHTS
                        </div>
                        <div className="address">  No 73 Ken Saro-Wiwa Road, Port Harcourt, Rivers State, Nigeria.</div>
                        <a href=" https://echelonheights.com" target="_blank">  echelonheights.com </a>

                    </div>
                </div>

            </div>
        </div>

    );
}

export default Contact;