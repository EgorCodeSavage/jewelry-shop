import "./style.css"
import logoring from "./../../img/logo-ring.png"
import addimg from "./../../img/add-image.png"
import { doc, setDoc, updateDoc, getDoc} from "firebase/firestore"
import {db} from "./../../FireBase"
import { useState } from "react"
 
const Modal = ({showModal, getShow}) => {

    const [goodUid, setGoodUid] = useState('');

    const handleSubmit = async(e) => {
        
        e.preventDefault();
        const goodClass = e.target[0].value
        const goodName = e.target[1].value
        const goodMaterial = e.target[2].value
        const goodRock = e.target[3].value
        const goodCount = e.target[4].value
        const file = e.target[5].files[0]

        setGoodUid(goodClass.charAt(0) + goodName.charAt(0) + goodMaterial.charAt(0) + goodRock.charAt(0));
        
        try {
            
            const docRef = doc(db, "goods", goodClass);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                await updateDoc(doc(db, "goods", goodClass), {
                    [goodUid]: {
                        class: goodClass,
                        name: goodName,
                        material: goodMaterial,
                        rock: goodRock,
                        count: goodCount
                    }
                }); 
            } else {
                await setDoc(doc(db, "goods", goodClass), {
                    [goodUid]: {
                        class: goodClass,
                        name: goodName,
                        material: goodMaterial,
                        rock: goodRock,
                        count: goodCount
                    }
                });
            };

            
        } catch (error) {
            console.log(error);
        }
    };
    
    return ( 
        <div className={showModal ? "goods_modal--active" : "goods_modal--notactive"}>
            <div className="goods_modal_title">
                <button className="goods_modal_btn" onClick={getShow}>X</button>
            </div>
            <div className="goods_modal_content">
                <div className="goods_modal_image">
                    <img className="goods_modal_img" src={logoring} alt="logo ring"/>
                </div>
                <form className="goods_modal_form" onSubmit={handleSubmit}>
                    <p>Введите класс товара:</p>
                    <input className="class" type="text" placeholder="Введите класс.."></input>
                    <p>Введите название товара:</p>
                    <input className="name" type="text" placeholder="Введите название.."></input>
                    <p>Введите материал товара:</p>
                    <input className="material" type="text" placeholder="Введите материал.."></input>
                    <p>Введите вид камня:</p>
                    <input className="rock" type="text" placeholder="Введите вид камня.."></input>
                    <p>Количество:</p>
                    <input className="count" type="number" placeholder="0"></input>
                    <div className="goods_modal_btns">
                        <input id="addfile" type="file" style={{display: "none"}}></input>
                        <label htmlFor="addfile">
                            <img className="addfile" src={addimg} alt=""/>
                        </label>
                        <button className="goods_modal_acept">Добавить товар</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Modal;