import "./style.css"

import filter from "./../../img/filter.png"
import logoring from "./../../img/logo-ring.png"

import { useEffect, useState } from "react"
import { collection, getDocs} from "firebase/firestore"
import { db } from "../../FireBase"
import ProductsModal from "../../components/products-modal/ProductsModal"

const Products = () => {

    const [goods, setGoods] = useState([]);

    useEffect(() => {
        async function getAllItems() {
            const documents = await getDocs(collection(db, "goods"));
            const documentData = documents.docs.map((doc) => ({ ...doc.data() }))
            setGoods(documentData);
        }
        getAllItems();
    }, [goods]);


    const [showModalProd, setShowModalProd] = useState('');
    const [isShowModal, setIsShowModal] = useState(false);
    
    const getShowModalProd = () => {
        setIsShowModal(!isShowModal);

        if (isShowModal === false) {
            document.body.style.overflow= "hidden";
        } else {
            document.body.style.overflow= "auto";
        }
    }

    

    
    return ( 
        <div className="products">
            <ProductsModal isShowModal={isShowModal} getShowModalProd={getShowModalProd} showModalProd={showModalProd} />
            <div className="products_contents">
                <div className="products_navbar">
                    <h2 className="products_title">Наши изделия</h2>
                    <div className="products_settings">
                        <input type="text" className="search" placeholder="Что вас интересует ?"></input>
                        <img className="products_filter_img" src={filter} alt="filter_button"/>
                    </div>
                </div>
                <div className="products_items">
                    {
                        goods.map((elem) => <div key={elem.id} className="products_item" onClick={() => getShowModalProd(setShowModalProd(elem.id))}>
                                        <h2 className="product_item_name">{elem.class} {elem.name}</h2>
                                        <img className={elem.imageURL ? "product_item_img" : "product_item_img--with_out_img"} src={elem.imageURL ? elem.imageURL : logoring} alt="product_item_img"/>
                                        <div className="product_item_info">
                                            <p className="product_item_material">{elem.material}</p>
                                            <p className="product_item_rock">{elem.rock}</p>
                                            <p className={elem.count > 0 ? "product_item_count--yes" : "product_item_count--no"}>{elem.count > 0 ? "Есть в наличии" : "Нет в наличии"}</p>
                                        </div>
                                    </div>)
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Products;