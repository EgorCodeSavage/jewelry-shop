import "./style.css"

import facebook from "./img/facebook.png"
import twitter from "./img/twetter.png"
import linkedin from "./img/linkedin.png"

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer_content">
                <div className="footer_product">
                    <h3>Product</h3>
                    <p>Email Row</p>
                    <p>Free Tools</p>
                    <p>Agents</p>
                    <p>Blog</p>
                </div>
                <div className="footer_resources">
                    <h3>Resources</h3>
                    <p>Our Agents</p>
                    <p>Member Stories</p>
                    <p>Video</p>
                    <p>Free Trail</p>
                </div>
                <div className="footer_company">
                    <h3>Company</h3>  
                    <p>Partnership</p>
                    <p>Terms of use</p>
                    <p>Privacy</p>
                    <p>Sitemap</p>
                </div>
                <div className="footer_gettouch">
                    <h3>Get in touch</h3>
                    <p>You'll find your next Marketing value you prefer.</p>
                    <div className="footer_sotialmedias">
                        <img src={facebook} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={linkedin} alt=""/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;