import "./style.css"
import { catalogList } from "../../helpers/CatalogHelper";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Catalog = () => {

    const [Items, setItems] = useState(false);
    const [ItemsId, setItemsId] = useState('');
    const showItems = (e) => {
        setItems(!Items);
        setItemsId(e.target.id);
    }
    const getItems = () => {
        if(Items !== false) {
            return (
                <div className="catalog_undergroup" style={{color: "#ffffff"}}>
                    {
                        catalogList[ItemsId].underGroup.map((item) => <div className="catalog_undergroup_item">{item}</div>)
                    }
                </div>
                );
        } else {
            return <div style={{display: "hidden"}}></div>
        }
    }

    return ( 
        <div className="catalog_content">
            <div className="catalog_components">
                <NavLink className="catalog_component" to="/products" style={{textDecoration: "none", color: "#ffffff"}}>
                    <div>Все</div>
                </NavLink>
                <div id="0" onClick={showItems} className="catalog_component">{catalogList[0].name}</div>
                <div id="1" onClick={showItems} className="catalog_component">{catalogList[1].name}</div>
                <div id="2" onClick={showItems} className="catalog_component">{catalogList[2].name}</div>
                <div className="catalog_component">Колье</div>
                <div className="catalog_component">Кольца</div>
                <div className="catalog_component">Подвески</div>
                <div className="catalog_component">Серьги</div>
                <div className="catalog_component">Цепи</div>
            </div>
            <div className="catalog_undergroups">
                {getItems()}
            </div>
            <div className="catalog_products"></div>
        </div>
     );
}
 
export default Catalog;