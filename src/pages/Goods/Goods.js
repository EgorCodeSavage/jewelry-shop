import { useEffect, useState } from "react";
import "./style.css"
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../FireBase";


import Modal from "../../components/goods-modal/Modal";

const Goods = () => {

    

    const [showModal, setShowModal] = useState(false);

    const getShow = () => {
        setShowModal(!showModal);
        if (showModal === false) {
            document.body.style.overflow= "hidden";
        } else {
            document.body.style.overflow= "auto";
        }
    };

    return ( 
        <div className="goods">
            <div className="goods_content">
                <Modal showModal={showModal} setShowModal={setShowModal} getShow={getShow}/>
                <div className="goods_content_top">
                    <h2 className="goods_title">Товары</h2>
                    <button className={showModal ? "goods_add_new--active" : 'goods_add_new--notactive'} onClick={getShow}>Добавить новый товар</button>
                </div>
                <div className="goods_items">
                {/* <div key={item.id} className="goods_item">
                        <img className="goods_item_img" src={item.imageURl} alt=""></img>
                        <p className="goods_item_class"><span>Класс:</span> {item.class}</p>
                        <p className="goods_item_name"><span>Название:</span> {item.name}</p>
                        <p className="goods_item_material"><span>Материал:</span> {item.material}</p>
                        <p className="goods_item_rock"><span>Камень:</span> {item.rock}</p>
                    </div> */}
                </div>

            </div>
        </div>
     );
}
 
export default Goods;