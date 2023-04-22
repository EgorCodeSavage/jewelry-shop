import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBase";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {

    const [err, setErr] = useState('');
    const navigation = useNavigate();

    const handleSubmit= async (e) => {
        
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);

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
                <h2 className="register">Login</h2>
                <form className="form_login" onSubmit={handleSubmit}>
                    <input className="email" type="email" placeholder="email"></input>
                    <input className="password" type="password" placeholder="password"></input>
                    <button className="register_btn">Sing In</button>
                </form>
                <div className="to_login">
                    <p>You don't have an account?</p>
                    <NavLink to="/register" style={{textDecoration: 'none'}}>
                        <p className="link_relog">Sing Up</p>
                    </NavLink>
                </div>
                <div className="login_alert">{err}</div>
            </div>
        </div>
     );
}
 
export default Login;