import React from "react";
import { Header } from "antd/es/layout/layout";
// import { Link } from "@react-pdf/renderer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import "../Components/home.css";
import { auth } from "../firebase";
import { Link, withRouter } from "react-router-dom";
// import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const HeaderComp = () => {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const { currentUser } = auth;
    console.log(currentUser);
    console.log(isLoggedIn);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            history.push("/");
        } catch (error) {
            console.error("Error during logout:", error);
            alert("Error during logout");
        }
    };

    const [varLinksList, setVarLinksList] = useState({
        chooseTemplateUrl: (
            <Link className="header-link" to="/choose-template">
                Choose CV Template
            </Link>
        ),

        authUrl: (
            <>
                {currentUser ? (
                    <Link to="/" className="header-link" onClick={handleLogout}>
                        Logout
                        {/* <Avatar size={64} icon={<UserOutlined />} /> */}
                    </Link>
                ) : (
                    <Link to="/login" className="header-link">
                        Login
                        {/* <Avatar size={64} icon={<UserOutlined />} /> */}
                    </Link>
                )}
            </>
        ),
    });

    const [fixedlinksList, setFixedLinksList] = useState({
        contactUrl: (
            <Link to="/contact-us" className="header-link active">
                Contact Us
            </Link>
        ),

        HomeUrl: (
            <Link to="/">
                <img
                    src="/template_previews/Resume_Logo.png"
                    height={50}
                    width={50}
                />
                <h6>MyResumeBuilder</h6>
            </Link>
        ),
    });

    // return (
    //     <div className="header-main">
    //         <ul className="home-left">
    //             <li>
    //                 {/* {fixedlinksList.contactUrl} */}
    //                 {fixedlinksList.HomeUrl}
    //                 {setFixedLinksList(true)}
    //             </li>

    //             <li>{varLinksList.chooseTemplateUrl}</li>
    //         </ul>
    //         <div className="home-right">
    //             <ul>
    //                 <li>
    //                     {/* <Link to="/contact-us" className="header-link">
    //                         Contact Us
    //                     </Link> */}
    //                     {fixedlinksList.contactUrl}
    //                     {setFixedLinksList(true)}
    //                     {setVarLinksList(true)}
    //                 </li>
    //                 <li>
    //                     {varLinksList.authUrl}
    //                     {setFixedLinksList(true)}
    //                     {setVarLinksList(false)}
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // );

    return (
        <div className="header-main" style={{ zIndex: 1000 }}>
            <ul className="home-left">
                <li>
                    {/* {fixedlinksList.contactUrl} */}
                    {/* {fixedlinksList.HomeUrl} */}
                    <Link className="header-link" to="/">
                        <img
                            src="/template_previews/Resume_Logo.png"
                            height={30}
                            width={30}
                        />
                        <h6 style={{ fontSize: "10px" }}>MyResumeBuilder</h6>
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
        </div>
    );
};

export default withRouter(HeaderComp);
