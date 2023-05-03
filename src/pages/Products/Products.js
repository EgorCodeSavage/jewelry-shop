import "./style.css"
import ring3 from "./../../img/ring3.png"
import filter from "./../../img/filter.png"
import { useEffect, useState } from "react"
import { collection, getDocs} from "firebase/firestore"
import { db } from "../../FireBase"

const Products = () => {

    const [rings, setRings] = useState([]);

    useEffect(() => {
        async function getAllItems() {
            const documents = await getDocs(collection(db, "rings"));
            const documentData = documents.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setRings(documentData);
        }
        getAllItems();
    }, []);

    return ( 
        <div className="products">
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
                        rings.map((items) => <div className="products_item">
                                                <h2 className="product_item_name">{items.class +" "+ items.name}</h2>
                                                <img src={ring3} alt="product_item_img"/>
                                                <div className="product_item_info">
                                                    <p className="product_item_material">{items.material}</p>
                                                    <p className="product_itme_rock">{items.rock}</p>
                                                </div>
                                            </div>)
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Products;