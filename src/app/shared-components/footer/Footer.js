import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <div className="Wrapper d-flex justify-content-between align-items-center">
                    <span className="copyright">© 2018 UTE Code Camp - Campathon - Hiến Máu To Win</span>
                </div>
            </footer>
        );
    }
}

export default Footer;