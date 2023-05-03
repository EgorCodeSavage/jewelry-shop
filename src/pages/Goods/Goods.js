import { useEffect, useState } from "react";
import "./style.css"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FireBase";

import ring3 from "./../../img/ring3.png"

const Goods = () => {

    const [goods, setGoods] = useState([]);

    useEffect(() => {
        async function getAllGoods() {
            const documents = await getDocs(collection(db, "rings"));
            const documentsData = documents.docs.map((doc) => ({id:doc.id, ...doc.data() }));
            setGoods(documentsData);
        }
        getAllGoods();
    }, []);

    return ( 
        <div className="goods">
            <div className="goods_content">
                <h2 className="goods_title">Товары</h2>
                <div className="goods_items">
                    {
                        goods.map((good) => <div key={good.id} className="goods_item">
                            <img className="goods_item_img" src={ring3} alt=""></img>
                            <p className="goods_item_class"><span>Класс:</span> {good.class}</p>
                            <p className="goods_item_name"><span>Название:</span> {good.name}</p>
                            <p className="goods_item_material"><span>Материал:</span> {good.material}</p>
                            <p className="goods_item_rock"><span>Камень:</span> {good.rock}</p>
                        </div>)
                    }
                </div>

            </div>
        </div>
     );
}
 
export default Goods;