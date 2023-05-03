import "./style.css"

import logo from "./../../img/logo.png"
import userLogoo from "./../../img/user.png"
import triangle from "./../../img/triangle.png"

import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import UserMenu from "../userMenu/UserMenu";
import { AuthContext } from "../../context/AuthContext";





const NavBar = () => {

    const activeLink = "navbar_nav_active";
    const notActiveLink = "navbar_nav_notactive";

    const {currentUser} = useContext(AuthContext);

    const [menuOpen, setMenuOpen] = useState("close");

    const getMenuOpen = () =>{
        setMenuOpen(menuOpen === "close" ? "open" : "close");
        if (menuOpen === "close") {
            document.body.style.overflow = "hidden";
        } else if (menuOpen === "open") {
            document.body.style.overflow = "unset";
        }
    };



    return ( 
        <div className="navbar_inner">
            <NavLink to="/" style={{textDecoration: 'none', color: 'white'}}>
                <div className="navbar_logo">
                    <img className="logo" src={logo} alt=""/>
                    <h2 className="logo_name">ФабриКа</h2>
                </div>
            </NavLink>
            <div className="navbar_navigation">
                <NavLink to="/" className={({isActive}) => isActive ? activeLink : notActiveLink} style={{textDecoration: 'none', color: 'white'}}>
                    <p className="navbar_nav">Домашня сторінка</p>
                </NavLink>
                <NavLink to="/aboutus" className={({isActive}) => isActive ? activeLink : notActiveLink} style={{textDecoration: 'none', color: 'white'}}>
                    <p className="navbar_nav">Про фабрику</p>
                </NavLink>

                <p className="navbar_nav">Сервіси</p>

                <NavLink to="/catalog" className={({isActive}) => isActive ? activeLink : notActiveLink} style={{textDecoration: 'none', color: 'white'}}>
                    <p className="navbar_nav">Каталог</p>
                </NavLink>
            </div>
            <div className="navbar_login">
                {
                    currentUser !== null ? 
                        <div className="user_accaunt" onClick={getMenuOpen}>
                            <p className="user_accaunt_name">{currentUser.email}</p>
                            <img className="user_accaunt_photo" src={userLogoo} alt="userLogo"/>
                            <img className={`user_accaunt_triangle--${menuOpen}`} src={triangle} alt=""/>
                        </div>
                     : <>
                        <NavLink to="/login" >
                            <button className="navbar_btn_login">Log In</button>
                        </NavLink>
                        <NavLink to="/register">
                            <button className="navbar_btn_getstart">Get Started</button>
                        </NavLink>
                    </>
                }   
            </div>
            <div className={`menu_is_${menuOpen}`}>
                <UserMenu menuOpen={menuOpen} getMenuOpen={getMenuOpen} />
            </div>
        </div>
     );
}
 
export default NavBar;