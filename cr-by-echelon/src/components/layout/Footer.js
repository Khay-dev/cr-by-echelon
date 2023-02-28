import "./Footer.css"
const Footer = () => {
    let top = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <footer>
            <div className="main-footer">
                <div className="footer-logo">
                    X
                </div>
                <div className="section-5-main">
                    <div className="text"> <span>GET IN</span> <span className="span-2">TOUCH</span>  </div>
                    <div className="details">
                        <div className="address">Lorem ipsum dolor, sit amet consectetur adipisicing elit, Expedita consequatur delectus accusamus quibusdam aliquid.</div>
                        <a href="xxxxxxxx" class="mail">xxxx@xxxx.com</a>
                        <a href="tel:+23400000000" class="call">+2340000000000</a>
                    </div>
                </div>

            </div>
            <div className="final-footer" >
                <div className="copy">Copyright © COOPERATE RESIDENCE by ECHELON 2023 </div>
                <div className="us">WEBSITE BY AUSDAEUR.CO</div>
                <div className="btt" onClick={top} >^</div>

            </div>
        </footer>
    );
}

export default Footer;