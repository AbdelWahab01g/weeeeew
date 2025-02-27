import React, { useState } from "react";
import { Link } from "react-router-dom";
import stylesigninp from "./Loginpage1.module.css";
import Fireobject from "../components/Fireobject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Loginpage1 = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={stylesigninp.body}>
            <div className={stylesigninp.containerall}>

                <div className={stylesigninp.container}>
                    <h2 className={stylesigninp.feutdfort}>Feut de foret</h2>
                    <div className={stylesigninp.firelogo}>
                        <Fireobject />
                    </div>

                    <div className={stylesigninp.bgform}>
                        <h1 className={stylesigninp.title1}>Log In</h1>
                        <form onSubmit={handleSubmit} className={stylesigninp.form}>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                                className={stylesigninp.input}
                                required
                            />

                            <div className={stylesigninp.inputWrapper}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={stylesigninp.input}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className={stylesigninp.toggleButton}
                                >
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </button>
                            </div>

                            <button type="submit" className={stylesigninp.button}>Log in</button>

                            <div className={stylesigninp.loglink}>
                                <span className={stylesigninp.grayText}>Don't have an account? </span>
                                <Link to="/signup" className={stylesigninp.link1}>
                                    <span className={stylesigninp.redText}>Sign up</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loginpage1;