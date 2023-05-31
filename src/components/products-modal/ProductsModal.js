
import { doc, getDoc } from "firebase/firestore";
import "./style.css"
import { db } from "../../FireBase";
import { useEffect, useState } from "react";

import logoring from "./../../img/logo-ring.png"

const ProductsModal = ({isShowModal, getShowModalProd, showModalProd}) => {

    const [showInfoAbout, setShowInfoAbout] = useState(null);

    useEffect(() => {
        const getShowInfo = async () => {
            const isData = await getDoc(doc(db, "goods", `${showModalProd}`));
            if(isData.exists()) {
                setShowInfoAbout(isData.data())
            } else {
                setShowInfoAbout(null)
            }
        }
        getShowInfo();
    }, [isShowModal])


    


    return ( 
        <div className={ isShowModal ? "products_modal--open" : "products_modal--close"} >
            {
                showInfoAbout ? <div className="products_modal_content">
                    <div className="products_modal_btn">
                        <button onClick={getShowModalProd}>X</button>
                    </div>
                    <div className="products_modal_inner">
                        <img className="products_modal_img" src={showInfoAbout.imageURL ? showInfoAbout.imageURL : logoring} alt="logo_of_ring"/>
                        <h2>{showInfoAbout.class} {showInfoAbout.name}</h2>
                        <p>Материал изготовки: {showInfoAbout.material}</p>
                        <p>Камень в изделии: {showInfoAbout.rock}</p>
                        <h3 className={showInfoAbout.count ? "products_modal_count--yes" : "products_modal_count--no"}>В налиции: {showInfoAbout.count ? showInfoAbout.count : "Нет в наличии"}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum</p>
                        <div className="products_modal_btns">
                            <button>Добавить в корзину</button>
                        </div>
                    </div>
                </div> : <div className="products_modal_content">Loading..</div>
            }
        </div>
     );
}
 
export default ProductsModal;