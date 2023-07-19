import React from "react";
import { Card, Layout, Space } from "antd";

// import ResponsiveAppBar from "../SubComponents/ResponsiveAppBar";
const { Meta } = Card;
const { Header, Footer, Sider, Content } = Layout;
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

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

const Home = () => {
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
                    <Header style={headerStyle}>
                        {/* <ResponsiveAppBar /> */}
                        <img
                            alt="template1"
                            height={50}
                            width={50}
                            src="/template_previews/Resume_Logo.png"
                        />
                        <Avatar icon={<UserOutlined />} />
                    </Header>
                    <Content style={contentStyle}>
                        <>
                            <div className="home-headings">
                                <h1>Choose a template for your CV</h1>
                                <h3>
                                    You can always change your template later.
                                </h3>
                            </div>
                            <div className="home_content">
                                <Card
                                    hoverable
                                    style={{
                                        width: 240,
                                    }}
                                    cover={
                                        <img
                                            alt="template1"
                                            height={400}
                                            src="/template_previews/template_preview1.PNG"
                                        />
                                    }
                                >
                                    {/* <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            /> */}
                                </Card>

                                <Card
                                    hoverable
                                    style={{
                                        width: 240,
                                    }}
                                    cover={
                                        <img
                                            alt="template2"
                                            src="/template_previews/template_preview2.PNG"
                                        />
                                    }
                                >
                                    {/* <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            /> */}
                                </Card>
                            </div>
                        </>
                    </Content>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
            </Space>
        </>
    );
};

export default Home;
