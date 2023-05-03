import { NavLink } from "react-router-dom";
import "./style.css"

const AdminPanel = () => {
    return ( 
        <div className="admin_panel">
            <div className="admin_panel_content">
                <h2 className="admin_panel_title">Панель администратора</h2>
                <div className="admin_panel_buttons">
                    <NavLink className="admin_panel_nav" to="/admin-panel-goods">
                        <button className="admin_panel_btn">Товары</button>
                    </NavLink>
                    <button className="admin_panel_btn">Заказы</button>
                </div>
            </div>
        </div>
     );
}
 
export default AdminPanel;