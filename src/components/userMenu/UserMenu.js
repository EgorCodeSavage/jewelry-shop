import { NavLink, useNavigate } from "react-router-dom";
import "./style.css"
import { signOut } from "firebase/auth";
import { auth } from "../../FireBase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const UserMenu = ({menuOpen, getMenuOpen}) => {


    const navigation = useNavigate();

    const getOut = () => {
        signOut(auth);

        navigation("/")
    }

    const {currentUser} = useContext(AuthContext);

    const adminCheck = () => {
        if (currentUser) {
            if (currentUser.email === "admin@gmail.com") {
                return (
                    <NavLink to="/admin-panel">
                        <button className="admin_btn">Панель администратора</button>
                    </NavLink>
                )
            } else {
                return (
                    <>
                        <p>Корзина</p>
                        <p>История заказов</p>
                    </>
                )
            }
        }  
    }

    return ( 
        <div className="user_menu">
            <div className="user_menu_context">
                <div className="user_menu_header">
                    <h2 className="user_menu_name">Menu</h2>
                    <button onClick={getMenuOpen} className={`user_menu_${menuOpen}`}>X</button>
                </div>
                <div className="user_menu_info">
                    <NavLink to="/user" style={{textDecoration: 'none', color: '#000000'}}>
                        <p onClick={getMenuOpen}>Информация о Профиле</p>
                    </NavLink>
                    {adminCheck()}
                </div>
                <button onClick={() => getOut()} className="user_menu_logOut">Log Out</button>
            </div>
        </div>
     );
}
 
export default UserMenu;