
import ring1 from "./../../img/ring1.png"
import ring2 from "./../../img/ring2.png"
import ring3 from "./../../img/ring3.png"
import ring4 from "./../../img/ring4.png"
import ring5 from "./../../img/ring5.png"
import ring6 from "./../../img/ring6.png"
import ring7 from "./../../img/ring7.png"
import twitter from "./../../img/twitter.png"
import vector from "./../../img/Vector.png"
import linkedin from "./../../img/linkedin.png"
import facebook from "./../../img/facebook.png"

import "./style.css"
import { NavLink } from "react-router-dom"

const Home = () => {

    

    return ( 
        <div className="home_inner">
            <div className="home_first">
                <div className="home_first_title">
                    <h1 className="home_first_title_text">Discover The<br /> Exceptional Jewellery<br /> With Us</h1>
                    <p className="home_fisrt_text">Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et<br /> sint laboriosam sed ipsa sin</p>
                    <NavLink to="/register">
                        <button className="home_first_title_btn">GET STARTED</button>
                    </NavLink>  
                </div>
                <div className="home_first_item">
                    <img className="home_ring1" src={ring1} alt=""/>
                </div>
                <div className="home_first_icons">
                    <img className="logos" src={twitter} alt="twitter logo"/>
                    <img className="logos" src={vector} alt="vector logo"/>
                    <img className="logos" src={linkedin} alt="linked in logo"/>
                    <img className="logos" src={facebook} alt="facebook logo"/>
                </div>
            </div>
            <div className="home_second">
                <div className="home_second_img">
                    <img className="home_ring2" src={ring2} alt=""/>
                </div>
                <div className="home_secondt_info">
                    <h2 className="home_Second_title">Pikup Silver Sterling<br /> Designer Ring </h2>
                    <p className="home_second_text">Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas. Vel vitae temporibus sit nulla consequatur in illo galisum eo

</p>
                    <div className="home_second_btns">
                        <button className="home_second_btn">ADD TO CART</button>
                        <p className="home_second_price">$ 549.29</p>
                    </div>
                </div>
            </div>
            <div className="our_story">
                <img className="story_img" src={ring3} alt=""/>
                <div className="story_inner">
                    <div className="story_title">Our Story</div>
                    <div className="story_text">modern jewelry is made of gold, silver, or platinum, often with precious or semiprecious stones, it evolved from shells, animal teeth, and other items used as body decoration in prehistoric times.</div>
                    
                </div>
            </div>
            <div className="home_third">
                <div className="home_third_content">
                    <h2 className="home_third_title">Silver Round Designer<br /> Bracelet For Women </h2>
                    <p className="home_third_text">Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas. Vel vitae temporibus sit nulla consequatur in illo galisum eo</p>
                    <div className="home_third_size">
                        <h2 className="size">Size</h2>
                        <div className="size_btns">
                            <button className="size_btn--active">S</button>
                            <button className="size_btn--">M</button>
                            <button className="size_btn--">L</button>
                        </div>
                        <div className="home_third_prices">
                            <button className="home_third_btn">ADD TO CART</button>
                            <p className="home_third_price">$ 549.29</p>
                        </div>
                    </div>
                </div>
                <div className="home_third_img">
                    <img className="ring4" src={ring4} alt=""></img>
                </div>
            </div>
            <div className="home_fourth">
                <div className="home_fourth_img">
                    <img className="ring5" src={ring5} alt="" />
                </div>
                <div className="home_fourth_content">
                    <h2 className="home_fourth_title">An Exquisite Diamond<br /> Jewellery  </h2>
                    <p className="home_fourth_text">Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas. Vel vitae temporibus sit nulla consequatur in illo galisum eo</p>
                    <div className="home_fourth_viewmore">
                        <button className="view_more">VIEW MORE</button>
                        <p className="home_fourth_price">$ 647.59</p>
                    </div>
                </div>
            </div>
            <div className="home_fifth">
                <div className="home_fifth_content">
                    <h2 lassName="home_fifth_title">Jewell Best Collection For You All</h2>
                    <p className="home_fifth_text">Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas. Vel vitae temporibus sit nulla consequatur in illo galisum eo</p>
                    <button className="home_fifth_btn">VIEW MORE</button>
                </div>
                <div className="home_fifth_img">
                    <img className="ring6" src={ring6}  alt="ring6"/>
                </div>
            </div>
            <div className="home_six">
                <div className="home_six_img">
                    <img className="ring7" src={ring7} alt=""/>
                </div>
                <div className="home_six_content">
                    <h2 className="home_six_title">We Have Everything Which Trendy</h2>
                    <p className="home_six_text">Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas. Vel vitae temporibus sit nulla consequatur in illo galisum eo</p>
                    <button className="home_six_btn">VIEW MORE</button>
                </div>
            </div>
        </div>
     );
}
 
export default Home;