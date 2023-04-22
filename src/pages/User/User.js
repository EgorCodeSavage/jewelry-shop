import user from "./../../img/user.png"
import "./style.css"

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../FireBase";
import { updateEmail, updateProfile } from "firebase/auth";

const User = () => {

    const {currentUser} = useContext(AuthContext);
    console.log(currentUser);
   
    const [currentName, setCurrentName] = useState(false);
    const getCurrentName = () => {
        setCurrentName(!currentName);
        setCurrentEmail(false);
        setCurrentAdres(false);
        setCurrentNumber(false);
    }
    const [currentEmail, setCurrentEmail] = useState(false);
    const getCurrentEmail = () => {
        setCurrentEmail(!currentEmail);
        setCurrentName(false);
        setCurrentAdres(false);
        setCurrentNumber(false);
    }
    const [currentAdres, setCurrentAdres] = useState(false);
    const getCurrentAdres = () => {
        setCurrentAdres(!currentAdres);
        setCurrentEmail(false);
        setCurrentName(false);
        setCurrentNumber(false);
    }
    const [currentNumber, setCurrentNumber] = useState(false);
    const getCurrentNumber = () => {
        setCurrentNumber(!currentNumber);
        setCurrentAdres(false);
        setCurrentEmail(false);
        setCurrentName(false);
    }

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
            doc.exists() && setUserInfo(doc.data())
        });

        return () => {
            unSub();
        };
    },[]);

    const [err, setErr] = useState('');
    const [success, setSuccess] = useState('');

    const addDisplayName = async (e) => {
        
        e.preventDefault();
        const name = e.target[0].value

        try {
            await updateDoc(doc(db, "users", currentUser.uid), {
                displayName: name, 
            });
            const user = currentUser;

            updateProfile(user, {
                displayName: name
            })
                .then(() => {
                    setSuccess('Имя успешно измененно!')
                    setTimeout(() => {
                        setSuccess('')
                    }, 5000);
                })
                .catch((error) => {
                    setErr(error.message)
                    setTimeout(() => {
                        setErr('')
                    }, 5000);
                })

            
        } catch (error) {
            setErr(error.message)
            setTimeout(() => {
                setErr('')
            }, 5000);
        };
    };
    const addEmail = async (e) => {

        e.preventDefault();
        const newEmail = e.target[0].value

        try {
            await updateDoc(doc(db, "users", currentUser.uid),{
                email: newEmail,
            });

            const user = currentUser;

            updateEmail(user, newEmail)
                .then(() => {
                    setSuccess('Почта успешно измененна!')
                    setTimeout(() => {
                        setSuccess('')
                    }, 5000);
                }).catch((error) => {
                    setErr(error.message)
                    setTimeout(() => {
                        setErr('')
                    }, 5000);
                });
            
        } catch (error) {
            setErr(error.message);
            setTimeout(() => {
                setErr('');
            }, 5000);
        };

    }
    const addAdres = async (e) => {

        e.preventDefault();
        const newAdres = e.target[0].value;

        try {
            await updateDoc(doc(db, "users", currentUser.uid), {
                adres: newAdres
            });
            setSuccess('Ваш адрес успешно измененно!')
                    setTimeout(() => {
                        setSuccess('')
                    }, 5000);
        } catch (error) {
            setErr(error.message);
            setTimeout(() => {
                setErr('');
            }, 5000);
        }
    }
    const addNumber = async (e) => {
        e.preventDefault();
        const newNumber = e.target[0].value;

        try {
            await updateDoc(doc(db, "users", currentUser.uid), {
                phoneNumber: newNumber
            })
            setSuccess('Номер телефона успешно изменен!')
                setTimeout(() => {
                    setSuccess('')
                }, 5000);
        } catch (error) {
            setErr(error.message)
                setTimeout(() => {
                    setErr('')
                }, 5000);
        }
    } 

    const getSettings = () => {
        if (currentName !== false) {
            return (
                <div className="user_page_setting">
                    <p className="setting_name">Имя и Фамилия</p>
                    <p className="current_value">{userInfo.displayName}</p>
                    <form className="setting_form" onSubmit={addDisplayName}>
                        <input className="setting_input" type="text" placeholder="Изменить данные"></input>
                        <button className="setting_cunfirm">Подтвердить изменения</button>
                    </form>
                    <p className="user_page_success">{success}</p>
                    <p className="user_page_error">{err}</p>
                </div>
            )
        } else if (currentEmail !== false) {
            return (
                <div className="user_page_setting">
                    <p className="setting_name">Почта</p>
                    <p className="current_value">{userInfo.email}</p>
                    <form className="setting_form" onSubmit={addEmail}>
                        <input className="setting_input" type="email" placeholder="Изменить данные"></input>
                        <button className="setting_cunfirm">Подтвердить изменения</button>
                    </form>
                    <p className="user_page_success">{success}</p>
                    <p className="user_page_error">{err}</p>
                </div>
            )
        } else if (currentAdres !== false) {
            return (
                <div className="user_page_setting">
                    <p className="setting_name">Адрес Доставки</p>
                    <p className="current_value">{userInfo.adres}</p>
                    <form className="setting_form" onSubmit={addAdres}>
                        <input className="setting_input" type="text" placeholder="Изменить данные"></input>
                        <button className="setting_cunfirm">Подтвердить изменения</button>
                    </form>
                </div>
            )
        } else if (currentNumber !== false) {
            return (
                <div className="user_page_setting">
                    <p className="setting_name">Телефон</p>
                    <p className="current_value">{userInfo.phone}</p>
                    <form className="setting_form" onSubmit={addNumber}>
                        <input className="setting_input" type="text" placeholder="Изменить данные"></input>
                        <button className="setting_cunfirm">Подтвердить изменения</button>
                    </form>
                </div>
            )
        }
    };

    return ( 
        <div className="user_page">
            <div className="user_page_content">
                <div className="user_page_left">
                    <img className="user_page_logo" src={user} alt="user_logo"/>
                    <div className="user_page_infouser">
                        <p onClick={getCurrentName} className="user_page_displayName">Имя:{userInfo.displayName}</p>
                        <p onClick={getCurrentEmail} className="user_page_email">Почта: {userInfo.email}</p>
                        <p onClick={getCurrentAdres} className="user_page_adres">Адрес: {userInfo.adres}</p>
                        <p onClick={getCurrentNumber} className="user_page_number">Телефон: {userInfo.phoneNumber}</p>
                    </div>
                    {
                        getSettings()
                    }
                </div>
            </div>
        </div>
     );
}
 
export default User;