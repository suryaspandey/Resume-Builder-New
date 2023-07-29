import React from "react";
import { Header } from "antd/es/layout/layout";
import { Layout, Menu, Space } from "antd";
// import { Link } from "@react-pdf/renderer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import "../Components/home.css";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import Login from "./Login";

const HeaderComp = () => {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const { currentUser } = auth;
    console.log(currentUser);
    console.log(isLoggedIn);

    // When user is null, converting it to a boolean using !!user will result in false, and when user is an object (representing the authenticated user), !!user will be true.
    // auth.onAuthStateChanged((user) => {
    //     setIsLoggedIn(!!user);
    // });

    // useEffect(() => {
    //     // Check if there is a logged-in user
    //     setIsLoggedIn(!!currentUser);
    // }, [currentUser]);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            setIsLoggedIn(false);

            history.push("/");
        } catch (error) {
            console.error("Error during logout:", error);
            alert("Error during logout");
        }
        // <Logout />;

        // setIsLoggedIn(false);
    };

    const contentStyle = {
        height: "160px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
    };
    return (
        <div className="header-main">
            <ul className="home-left">
                <li>
                    <Link className="header-link" to="/">
                        <img
                            src="/template_previews/Resume_Logo.png"
                            height={50}
                            width={50}
                        />
                        <h6>MyResumeBuilder</h6>
                    </Link>
                </li>

                {isLoggedIn ? (
                    <li>
                        <Link className="header-link" to="/choose-template">
                            Choose CV Template
                        </Link>
                    </li>
                ) : null}
            </ul>
            <div className="home-right">
                <ul>
                    <li>
                        <Link to="/contact-us" className="header-link">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        {isLoggedIn ? (
                            <Link to="/" className="header-link">
                                Logout
                            </Link>
                        ) : (
                            <Link
                                to="/login"
                                className="header-link"
                                onClick={handleLogout}
                            >
                                Login
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
        // <Header className="home-navbar">
        //     <div className="home-links">
        //         {/* <Menu
        //             onClick={handleClick}
        //             // selectedKeys={[current]}
        //             mode="horizontal"
        //             selectedKeys={[]}
        //         >
        //             <Menu.Item key="home">
        //                 <Link to="/">
        //                     <img
        //                         alt="template1"
        //                         height={50}
        //                         width={50}
        //                         src="/template_previews/Resume_Logo.png"
        //                     ></img>
        //                 </Link>
        //             </Menu.Item>
        //             {/* <Menu.Item key="about">About Us</Menu.Item>
        //             <Menu.Item key="contact">
        //                 {/* <Link to="/contact">Contact Us</Link> *
        //             </Menu.Item>
        //             {isLoggedIn ? (
        //                 <>
        //                     {console.log(isLoggedIn)};
        //                     <Menu.Item key="create-cv">
        //                         <Link to="/choose-template">
        //                             Choose CV Templates
        //                         </Link>
        //                     </Menu.Item>
        //                     <Menu.Item key="logout" onClick={handleLogout}>
        //                         Logout
        //                     </Menu.Item>
        //                 </>
        //             ) : (
        //                 <Menu.Item key="login">
        //                     <Link to="/login">Login</Link>
        //                 </Menu.Item>
        //             )}
        //         </Menu> */}

        //     </div>
        // </Header>
    );
};

export default HeaderComp;
