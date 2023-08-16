import React from "react";
import { Header } from "antd/es/layout/layout";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import "../Components/home.css";
import { auth } from "../firebase";
import { Link, withRouter } from "react-router-dom";
import Loader from "./Loader";
// import { Avatar, Space } from "antd";

const HeaderComp = () => {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isloading, setIsLoading] = useState(true);

    const { currentUser } = auth;

    // console.log(currentUser);
    // console.log(isLoggedIn);

    useEffect(() => {
        if (currentUser) {
            setIsLoggedIn(true);
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [currentUser]);

    const handleLogout = async () => {
        try {
            setIsLoading(true);
            await auth.signOut();
            history.push("/");
        } catch (error) {
            // console.error("Error during logout:", error);
            alert("Error during logout");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="header-main" style={{ zIndex: 1000 }}>
            {isloading ? (
                <Loader />
            ) : (
                <>
                    <ul className="home-left">
                        <li>
                            <Link className="header-link" to="/">
                                <img
                                    src="/template_previews/Resume_Logo.png"
                                    height={30}
                                    width={30}
                                />
                                <h6 style={{ fontSize: "10px" }}>
                                    MyResumeBuilder
                                </h6>
                            </Link>
                        </li>

                        <li>
                            <Link className="header-link" to="/choose-template">
                                Choose CV Template
                            </Link>
                        </li>
                    </ul>
                    <div className="home-right">
                        <ul>
                            <li>
                                <Link to="/contact-us" className="header-link">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                {currentUser ? (
                                    <Link
                                        to="/"
                                        className="header-link"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                        {/* <Avatar size="large" icon={<UserOutlined />} /> */}
                                    </Link>
                                ) : (
                                    <Link to="/login" className="header-link">
                                        Login
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default withRouter(HeaderComp);
