import { NavLink, useNavigate } from "react-router-dom";
import "./style.css"

import {auth, db} from "./../../FireBase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {

    const [err, setErr] = useState('');
    const navigation = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const email = e.target[0].value
        const password = e.target[1].value

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                email,
            });

            navigation('/')
            
        } catch (error) {
            setErr(error.message)
            setTimeout(() => {
                setErr('')
            }, 5000);
        }

    }


    return ( 
        <div className="login_page">
            <div className="login_page_content">
                <h2 className="register">Register</h2>
                <form className="form_login" onSubmit={handleSubmit}>
                    <input className="email" type="email" placeholder="email"></input>
                    <input className="password" type="password" placeholder="password"></input>
                    <button className="register_btn">Sing Up</button>
                </form>
                <div className="to_login">
                    <p>You have an account?</p>
                    <NavLink to="/login" style={{textDecoration: 'none'}}>
                        <p className="link_relog">Sing In</p>
                    </NavLink>
                </div>
                <div className="login_alert">{err}</div>
            </div>
        </div>
     );
}
 
export default Register;