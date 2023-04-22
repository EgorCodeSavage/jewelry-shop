import "./style.css"

const Catalog = () => {
    return ( 
        <div className="catalog_content">
            <div className="catalog_components">
                <div className="catalog_component">Аксессуары</div>
                <div className="catalog_component">Браслеты</div>
                <div className="catalog_component">Броши</div>
                <div className="catalog_component">Колье</div>
                <div className="catalog_component">Кольца</div>
                <div className="catalog_component">Подвески</div>
                <div className="catalog_component">Серьги</div>
                <div className="catalog_component">Цепи</div>
            </div>
            <div className="catalog_undergroup">
                
            </div>
            <div className="catalog_products"></div>
        </div>
     );
}
 
export default Catalog;