// import React from "react";
// import "../Components/home.css";
// const Home = () => {
//     return (
//         <>
//             <div className="navbar-container">
//                 <div className="navbar">
//                     <ul className="home-links">
//                         <li>Logo</li>
//                         <li>About Us</li>
//                         <li>Contact Us</li>
//                         <li>Login</li>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;

import React, { useState } from "react";
import {
    AppstoreOutlined,
    SettingOutlined,
    MailOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Space } from "antd";
import { useHistory, Link } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../Components/home.css";
import { Header } from "antd/es/layout/layout";
import Logout from "./Logout";
import { auth } from "../firebase";
import { Carousel } from "antd";

const Home = () => {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            setIsLoggedIn(false);
            // Redirect user to the Home page after logout
            history.push("/");
        } catch (error) {
            console.error("Error during logout:", error);
            alert("Error during logout");
        }
        // <Logout />;

        setIsLoggedIn(false);
    };

    // Handle click on navigation menu items
    const handleClick = (e) => {
        const key = e.key;
        if (key == "home") {
            history.push("/");
        }

        if (key === "logout") {
            handleLogout();
        } else if (key === "create-cv") {
            history.push("/choose-template");
            // return <Link to="/choose-template" />;
        } else {
            console.log("click ", key);
        }
    };

    const menuItems = [
        { label: "Home", key: "home" },
        // { label: "About Us", key: "about" },
        { label: "Contact Us", key: "contact" },
        {
            label: (
                <a href="#logout" onClick={handleLogout}>
                    {/* <Avatar icon={<UserOutlined />} /> */}
                    Logout
                </a>
            ),
            key: "logout",
        },
    ];

    const contentStyle = {
        height: "160px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
    };

    return (
        <>
            <Header className="home-navbar">
                <div className="home-links">
                    <Menu
                        onClick={handleClick}
                        // selectedKeys={[current]}
                        mode="horizontal"
                        selectedKeys={[]}
                    >
                        <Menu.Item key="home">
                            <Link to="/">
                                <img
                                    alt="template1"
                                    height={50}
                                    width={50}
                                    src="/template_previews/Resume_Logo.png"
                                ></img>
                            </Link>
                        </Menu.Item>
                        {/* <Menu.Item key="about">About Us</Menu.Item> */}
                        <Menu.Item key="contact">
                            {/* <Link to="/contact">Contact Us</Link> */}
                        </Menu.Item>
                        {isLoggedIn ? (
                            <>
                                {console.log(isLoggedIn)};
                                <Menu.Item key="create-cv">
                                    <Link to="/choose-template">
                                        Choose CV Templates
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="logout" onClick={handleLogout}>
                                    Logout
                                </Menu.Item>
                            </>
                        ) : (
                            <Menu.Item key="login">
                                <Link to="/login">Login</Link>
                            </Menu.Item>
                        )}
                    </Menu>
                </div>
            </Header>
            <div className="home-container">
                <h1>HOME PAGE</h1>

                <h4>Four simple steps to make your CV </h4>

                {/* <Carousel autoplay>
                    <div className="home_Carousel">
                        <div className=" carousel_text" style={{ flex: 1 }}>
                            <h3 style={contentStyle}>
                                Step 1: Pick a Template Don't sabotage your job
                                search before it has even begun. Choose from our
                                ATS-friendly, hand-crafted resume templates
                            </h3>
                        </div>

                        
                        <div className="carousel_img" style={{ flex: 1 }}>
                            <img
                                src="/template_previews/step1.PNG"
                                alt="step1"
                                height={100}
                                width={100}
                            />
                        </div>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel> */}
            </div>
            <div className="steps_img_text">
                <div className="steps_text">
                    <div className="steps">1</div>
                    <div className="steps_texts">Pick a Template</div>
                </div>
                <div className="steps_img">
                    <img
                        src="/template_previews/step1.PNG"
                        alt="step1"
                        height={150}
                        width={150}
                        style={{ borderRadius: "10%" }}
                    />
                </div>
            </div>
            <hr style={{ width: "50%", margin: "0 auto" }} />

            <div className="steps_img_text">
                <div className="steps_img">
                    <img
                        src="/template_previews/step2.PNG"
                        alt="step1"
                        height={150}
                        width={150}
                        style={{ borderRadius: "10%" }}
                    />
                </div>
                <div className="steps_text">
                    <div className="steps">2</div>
                    <div className="steps_texts">Customize Your Layout</div>
                </div>
            </div>
            <hr style={{ width: "50%", margin: "0 auto" }} />

            <div className="steps_img_text">
                <div className="steps_text">
                    <div className="steps">3</div>
                    <div className="steps_texts">Fill in the Blanks</div>
                </div>
                <div className="steps_img">
                    <img
                        src="/template_previews/step3.PNG"
                        alt="step1"
                        height={150}
                        width={150}
                        style={{ borderRadius: "10%" }}
                    />
                </div>
            </div>
            <hr style={{ width: "50%", margin: "0 auto" }} />

            <div className="steps_img_text">
                <div className="steps_img">
                    <img
                        src="/template_previews/step4.PNG"
                        alt="step1"
                        height={150}
                        width={150}
                        style={{ borderRadius: "10%" }}
                    />
                </div>
                <div className="steps_text">
                    <div className="steps">4</div>
                    <div className="steps_texts">Hit 'Download!'</div>
                </div>
            </div>
        </>
    );
};
export default Home;
