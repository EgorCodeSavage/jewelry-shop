import { useEffect, useState } from "react";
import "./style.css"
import { collection, deleteDoc, doc, getDocs, } from "firebase/firestore";
import { db } from "../../FireBase";

import logoring from "./../../img/logo-ring.png"
import Modal from "../../components/goods-modal/Modal";

const Goods = () => {

    const [items, setItems] = useState([]);

    
    useEffect(() => {
        async function getAllItems() {
            const documents = await getDocs(collection(db, "goods"));
            const documentData = documents.docs.map((doc) => ({ ...doc.data() }))
            setItems(documentData);
        }
        getAllItems()
    }, [items])

    const [showModal, setShowModal] = useState(false);

    const getShow = () => {
        setShowModal(!showModal);
        if (showModal === false) {
            document.body.style.overflow= "hidden";
        } else {
            document.body.style.overflow= "auto";
        }
    };

    

    const deleteItem = async (e) => {
        await deleteDoc(doc(db, "goods", e.target.value))
    }

    return ( 
        <div className="goods">
            <div className="goods_content">
                <Modal showModal={showModal} setShowModal={setShowModal} getShow={getShow}/>
                <div className="goods_content_top">
                    <h2 className="goods_title">Товары</h2>
                    <button className={showModal ? "goods_add_new--active" : 'goods_add_new--notactive'} onClick={getShow}>Добавить новый товар</button>
                </div>
                <div className="goods_items">
                {
                    items === undefined ? <div></div> : items.map((item, index) => <div key={index} className="goods_item">
                    <div className="goods_item_left">
                        <img className="goods_item_img" src={item.imageURL ? item.imageURL : logoring} alt=""></img>
                        <p className="goods_item_class"><span>Класс:</span> {item.class}</p>
                        <p className="goods_item_name"><span>Название:</span> {item.name}</p>
                        <p className="goods_item_material"><span>Материал:</span> {item.material}</p>
                        <p className="goods_item_rock"><span>Камень:</span> {item.rock}</p>
                        <p className="goods_item_count"><span>Колличество:</span> {item.count}</p>
                    </div>
                    <button className="goods_item_delete_btn" value={item.id} onClick={deleteItem}>Удалить</button> 
                </div>)
                }
                </div>
            </div>
        </div>
     );
}
 
export default Goods;