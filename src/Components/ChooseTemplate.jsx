import { React, useEffect, useState } from "react";
import { Card, Layout, Space } from "antd";
import { useHistory } from "react-router-dom";

import { auth } from "../firebase";

const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import BasicInfoTemplate1 from "./Template1/BasicInfoTemplate1";
import BasicInfoTemplate2 from "./Template2/BasicInfoTemplate2";
import HeaderComp from "./HeaderComp";
import "../Components/home.css";
import { withRouter } from "react-router-dom/cjs/react-router-dom";

// import templateImage from "../template_previews/template_preview1.PNG";
const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    // textAlign: "justify",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#006370",
    paddingTop: "15px",
};
const contentStyle = {
    textAlign: "center",
    minHeight: 100,
    // lineHeight: "120px",
    // color: "#fff",
    // backgroundColor: "#f2fafb",
};
const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#3ba0e9",
};
const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
};

const ChooseTemplate = ({ handleTemplateSelect }) => {
    const history = useHistory();
    const { currentUser } = auth;

    useEffect(() => {
        if (!currentUser) {
            history.push("/login");
        }
    }, [currentUser, history]);

    const handleCardClick = (templateName) => {
        handleTemplateSelect(templateName);
        history.push(`/home/${templateName}`);
    };

    return (
        <>
            <Space
                direction="vertical"
                style={{
                    width: "100%",
                }}
                size={[0, 48]}
            >
                <Layout>
                    <HeaderComp />

                    <Content style={contentStyle}>
                        <>
                            <>
                                <div className="home-headings">
                                    <h1>Choose a template for your CV</h1>
                                    <h3>
                                        You can always change your template
                                        later.
                                    </h3>
                                </div>
                                <div className="home_content">
                                    <Card
                                        hoverable
                                        style={{
                                            width: 240,
                                            height: 400,
                                        }}
                                        cover={
                                            <img
                                                alt="template1"
                                                height={400}
                                                src="/template_previews/template_preview1.PNG"
                                            />
                                        }
                                        onClick={() =>
                                            handleCardClick("template1")
                                        }
                                    ></Card>
                                    <Card
                                        hoverable
                                        style={{
                                            width: 240,
                                            height: 400,
                                        }}
                                        cover={
                                            <img
                                                height={400}
                                                alt="template2"
                                                src="/template_previews/template_preview2.PNG"
                                            />
                                        }
                                        onClick={() =>
                                            handleCardClick("template2")
                                        }
                                    ></Card>
                                </div>
                            </>
                            {/* // )} */}
                        </>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Space>
        </>
    );
};
export default withRouter(ChooseTemplate);
