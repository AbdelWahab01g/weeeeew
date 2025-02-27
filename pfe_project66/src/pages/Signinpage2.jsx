import React, { useState } from "react";
import { Link } from "react-router-dom";
import stylesigninp from "./Signinpage2.module.css"; 
import Fireobject from "../components/Fireobject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; 

const Signinpage2 = () => {  
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
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
                        <h1 className={stylesigninp.title1}>Create Account</h1>
                        <form onSubmit={handleSubmit} className={stylesigninp.form}>

                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={stylesigninp.input} 
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
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

                            <div className={stylesigninp.inputWrapper}>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={stylesigninp.input} 
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className={stylesigninp.toggleButton}
                                >
                                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                                </button>
                            </div>

                            <button type="submit" className={stylesigninp.button}>Sign Up</button>

                            <div className={stylesigninp.loglink}>
                                <span className={stylesigninp.grayText}>Already have an account ? </span>
                                <Link to="/" className={stylesigninp.link1}>
                                    <span className={stylesigninp.redText}> Log In</span>
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            </div>
        
    );
};

export default Signinpage2;
