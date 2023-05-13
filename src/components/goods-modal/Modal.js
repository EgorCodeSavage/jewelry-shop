import "./style.css"
import logoring from "./../../img/logo-ring.png"
import addimg from "./../../img/add-image.png"
import { doc, setDoc, updateDoc, getDoc} from "firebase/firestore"
import {db, storage} from "./../../FireBase"
import { useEffect, useState } from "react"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
 
const Modal = ({showModal, getShow, setShowModal}) => {

    const [goodUid, setGoodUid] = useState('');

    const [goodClass, setGoodClass] = useState('');
    const [goodName, setGoodName] = useState('');
    const [goodMaterial, setGoodMaterial] = useState('');
    const [goodRock, setGoodRock] = useState('');
    const [goodCount, setGoodCount] = useState('');
    const [Img, setImg] = useState(null);

    const getGooodUid = () => {
        setGoodUid(goodClass.charAt(0) + goodName.charAt(0) + goodMaterial.charAt(0) + goodRock.charAt(0));
    };
    
    useEffect(() => {
        getGooodUid();
    });

    const handleSubmit = async(e) => {
        
        e.preventDefault();

        try {
            const docRef = doc(db, "goods", goodClass);
            const docSnap = await getDoc(docRef);

            if (Img) {
                const storageRef = ref(storage, goodUid);
                const uploadTask = uploadBytesResumable(storageRef, Img);

                uploadTask.on(
                    
                    (error) => {
                        console.log(error.message);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                            if (docSnap.exists()) {
                                await updateDoc(doc(db, "goods", goodClass), {
                                    [goodUid]: {
                                        class: goodClass,
                                        name: goodName,
                                        material: goodMaterial,
                                        rock: goodRock,
                                        count: goodCount,
                                        imageURL: downloadURL
                                    }
                                }); 
                            } else {
                                await setDoc(doc(db, "goods", goodClass), {
                                    [goodUid]: {
                                        class: goodClass,
                                        name: goodName,
                                        material: goodMaterial,
                                        rock: goodRock,
                                        count: goodCount,
                                        imageURL: downloadURL
                                    }
                                });
                            };

                        });
                        
                    }

                )
            } else {
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
            }
        };
            
            

            setShowModal(!showModal);
            document.body.style.overflow= "unset"
            setGoodClass('');
            setGoodCount('');
            setGoodMaterial('');
            setGoodName('');
            setGoodRock('');
            setGoodUid('');
        } catch (error) {
            console.log(error.message);
        }
    };
    
    return ( 
        <div className={showModal ? "goods_modal--active" : "goods_modal--notactive"}>
            <div className="goods_modal_title">
                <button className="goods_modal_btn" onClick={getShow}>X</button>
            </div>
            <div className="goods_modal_content">
                <div className="goods_modal_image">
                    <img className="goods_modal_img" src={Img ? Img : logoring} alt="logo ring"/>
                </div>
                <form className="goods_modal_form" onSubmit={handleSubmit}>
                    <p>Введите класс товара:</p>
                    <input className="class" type="text" placeholder="Введите класс.." value={goodClass} onChange={(e) => setGoodClass(e.target.value)}></input>
                    <p>Введите название товара:</p>
                    <input className="name" type="text" placeholder="Введите название.." value={goodName} onChange={(e) => setGoodName(e.target.value)}></input>
                    <p>Введите материал товара:</p>
                    <input className="material" type="text" placeholder="Введите материал.." value={goodMaterial} onChange={(e) => setGoodMaterial(e.target.value)}></input>
                    <p>Введите вид камня:</p>
                    <input className="rock" type="text" placeholder="Введите вид камня.." value={goodRock} onChange={(e) => setGoodRock(e.target.value)}></input>
                    <p>Количество:</p>
                    <input className="count" type="number" placeholder="0" value={goodCount} onChange={(e) => setGoodCount(e.target.value)}></input>
                    <div className="goods_modal_btns">
                        <input id="addfile" type="file" style={{display: "none"}} onChange={(e) => setImg(e.target.files[0])}></input>
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