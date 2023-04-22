import { NavLink, useNavigate } from "react-router-dom";
import "./style.css"
import { signOut } from "firebase/auth";
import { auth } from "../../FireBase";

const UserMenu = ({menuOpen, getMenuOpen}) => {

    const navigation = useNavigate();

    const getOut = () => {
        signOut(auth);

        navigation("/")
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
                    <p>Корзина</p>
                    <p>Выбрать Местоположение</p>
                    <button onClick={() => getOut()} className="user_menu_logOut">Log Out</button>
                </div>
            </div>
        </div>
     );
}
 
export default UserMenu;