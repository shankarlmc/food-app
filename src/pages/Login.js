import React, {useState} from 'react';
import './Login.css';
import {
    FaAngleLeft,
    FaEnvelope,
    FaExclamationCircle,
    FaLock
} from 'react-icons/fa';
import {useHistory} from "react-router-dom";

function Login(){
    const [state, setState] = useState({ errors: {} });
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    }


    const handleValidation = () => {
        let errors = {};
        let formIsValid = true;
        if (email !== "") {
            if (!email.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)) {
                formIsValid = false;
                errors["email"] = "Please Enter the valid email address.";
            }
        } else {
            formIsValid = false;
            errors["email"] = "Email should not be empty.";
        }

        if (password === "") {
            formIsValid = false;
            errors["password"] = "Password should not be empty.";
        }

        setState({ errors: errors });
        return formIsValid;
    };
    const handleLogin = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            // dispatch(login(email, password));
            alert("ok")
        }
    }
    return (
        <div className="login-container">
        <div className="wrapper">
            <header>
                Login Form
            </header>
            <form onSubmit={handleLogin}>
                <div className={`field email ${state.errors["email"] ? "has-error error" : ""}`}>
                    <div className="input-area">
                        <input
                            type="text"
                            placeholder="Enter Email.."
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="icon"><FaEnvelope /></span>
                        <span className="error error-icon"><FaExclamationCircle /></span>
                    </div>
                    <div className="error error-text">{state.errors["email"] ? state.errors["email"] : ""}</div>
                </div>
                <div className={`field password ${state.errors["password"] ? "has-error error" : ""}`}>
                    <div className="input-area">
                        <input
                            type="password"
                            placeholder="Enter Password.."
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="icon"><FaLock /></span>
                        <span className="error error-icon"><FaExclamationCircle /></span>
                    </div>
                    <div className="error error-text">{state.errors["password"] ? state.errors["password"] : ""}</div>
                </div>
                <div className="pass-link">
                    <a href="#" className="forget-password">Forget Password?</a>
                </div>
                <input type="submit" value="Login" className="submit-btn"/>
            </form>
            <div className="signup-link">
                Not yet registered? <a href="#" className="signup-now">Signup now</a>
            </div>
            <div className="go-back" onClick={handleGoBack}>
                <span className="go-back-icon"><FaAngleLeft /></span>
                Go Back
            </div>

        </div>
        </div>
    );
}
export default Login;