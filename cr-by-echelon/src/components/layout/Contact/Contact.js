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
                        IF YOU HAVE ANY QUESTION DON'T HESITATE TO CONTACT OR VISIT US
                    </div>
                    <div className="contact-dets">
                        <div className="address">Lorem ipsum dolor, sit amet consectetur adipisicing elit, Expedita consequatur delectus accusamus quibusdam aliquid.</div>
                        <a href="xxxxxxxx" class="mail">xxxx@xxxx.com</a>
                        <a href="tel:+23400000000" class="call">+2340000000000</a>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Contact;