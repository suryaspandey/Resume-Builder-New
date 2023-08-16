import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ChooseTemplate from "./Components/ChooseTemplate";
import MainContent from "./Components/MainContent";
import App from "./App";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import { Container } from "react-bootstrap";
import Home from "./Components/Home";
import { AuthProvider } from "./Contexts/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";
import { auth } from "./firebase";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import PageNotFound from "./Components/PageNotFound";
import ContactUs from "./Components/ContactUs";
// import Login_test from "./Components/login_test";
import DownloadPreviewTemplate2 from "./Components/Template2/DownloadPreviewTemplate2";
import WOrdTemplateTest from "./Components/Template2/WOrdTemplateTest";
import DownloadPreviewTemplate1 from "./Components/Template1/DownloadPreviewTemplate1";
import ComingSoon from "./Components/ComingSoon";
import DownloadPreviewTemplate3 from "./Components/Template3/DownloadPreviewTemplate3";

const RouterMain = () => {
    const [themeColor, setThemeColor] = useState("black");
    const [backgroundColor, setBackgroundColor] = useState("");
    const [textColor, setTextColor] = useState("#000000");
    const [subheadingColor, setSubheadingColor] = useState("#000000");
    const [tempfontSize, setTempFontSize] = useState("");
    const [tempfontStyle, setTempFontStyle] = useState("");

    // useEffect(() => {
    //     const shouldShowLoading =
    //         location.pathname === "/" || // Home page
    //         location.pathname === "/login" || // User logs in
    //         location.pathname === "/register" || // User registers
    //         location.pathname === "/choose-template"; // Choose-template page

    //     setIsLoading(shouldShowLoading);
    // }, [location]);

    useEffect(() => {
        const storedFontSize = localStorage.getItem("tempfontSize");
        if (storedFontSize) {
            setTempFontSize(Number(storedFontSize));
        }

        const storedFontStyle = localStorage.getItem("tempfontStyle");
        if (storedFontStyle) {
            setTempFontStyle(storedFontStyle);
        }
    }, []);

    const handleFontSizeChange = (size) => {
        setTempFontSize(size);
        localStorage.setItem("tempfontSize", size.toString());
    };

    const handleFontStyleChange = (style) => {
        setTempFontStyle(style);
        localStorage.setItem("tempfontStyle", style);
    };

    const handleThemeColorChange = (color) => {
        setThemeColor(color);
    };

    const handleBackgroundColorChange = (color) => {
        setBackgroundColor(color);
    };

    const handleTextColorChange = (color) => {
        setTextColor(color);
    };

    const handleSubheadingColorChange = (color) => {
        setSubheadingColor(color);
    };

    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleTemplateSelect = (templateName) => {
        setSelectedTemplate(templateName);
    };

    const history = useHistory();
    const { currentUser } = auth;
    console.log(currentUser);

    const bg_img =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtCh17cCUl3OeiiqnqYb72OPfHLLRVte3sg5Lz5duGg&s";

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/login">
                    <div
                        className="login-container-main"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2,1fr)",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            // alignItems: "center",
                            width: "100%",
                            height: "100vh",
                        }}
                    >
                        <div className="login-img"></div>
                        <div className="w-100">
                            <Login />
                        </div>
                    </div>
                </Route>

                <Route path="/register">
                    {/* <Container
                        className="d-flex align-items-center justify-content-center"
                        style={{ minHeight: "100vh" }}
                    >
                        <div className="w-100" style={{ maxWidth: "300px" }}>
                            <Registration />
                        </div>
                    </Container> */}

                    <div
                        className="login-container-main"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2,1fr)",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            // alignItems: "center",
                            width: "100%",
                            height: "100vh",
                        }}
                    >
                        <div className="register-img"></div>
                        <div className="w-100">
                            <Registration />
                        </div>
                    </div>
                </Route>
                {/* <Route
                    path="/choose-template"
                    element={
                        <ChooseTemplate
                            handleTemplateSelect={handleTemplateSelect}
                        />
                        // </PrivateRoute>
                    }
                ></Route> */}

                {/* <Route
                    path="/choose-template"
                    render={() =>
                        currentUser ? (
                            <ChooseTemplate
                                handleTemplateSelect={handleTemplateSelect}
                            />
                        ) : (
                            <Redirect to="/login" />
                        )
                    }
                /> */}
                <PrivateRoute path="/choose-template">
                    <ChooseTemplate
                        handleTemplateSelect={handleTemplateSelect}
                    />
                </PrivateRoute>

                <PrivateRoute path="/download-template3">
                    <DownloadPreviewTemplate3
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        subheadingColor={subheadingColor}
                        tempfontSize={tempfontSize}
                        tempfontStyle={tempfontStyle}
                        // handleTemplateSelect={handleTemplateSelect}
                        // formData={formData}
                        // showProfilePhoto={showProfilePhoto}
                    />
                </PrivateRoute>

                <PrivateRoute path="/download-template2">
                    <DownloadPreviewTemplate2
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        subheadingColor={subheadingColor}
                        tempfontSize={tempfontSize}
                        tempfontStyle={tempfontStyle}
                        // handleTemplateSelect={handleTemplateSelect}
                        // formData={formData}
                        // showProfilePhoto={showProfilePhoto}
                    />
                </PrivateRoute>

                <PrivateRoute path="/download-template1">
                    <DownloadPreviewTemplate1
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        subheadingColor={subheadingColor}
                        tempfontSize={tempfontSize}
                        tempfontStyle={tempfontStyle}
                        // handleTemplateSelect={handleTemplateSelect}
                        // formData={formData}
                        // showProfilePhoto={showProfilePhoto}
                    />
                </PrivateRoute>

                <Route path="/contact-us">
                    <ContactUs />
                </Route>

                <Route path="/download">
                    <WOrdTemplateTest />
                </Route>

                <Route path="/preview">
                    <MainContent
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        subheadingColor={subheadingColor}
                        tempfontSize={tempfontSize}
                        tempfontStyle={tempfontStyle}
                    />
                </Route>

                <Route path="/home/:templateName">
                    <App
                        handleTemplateSelect={handleTemplateSelect}
                        handleThemeColorChange={handleThemeColorChange}
                        handleBackgroundColorChange={
                            handleBackgroundColorChange
                        }
                        handleTextColorChange={handleTextColorChange}
                        handleSubheadingColorChange={
                            handleSubheadingColorChange
                        }
                        themeColor={themeColor}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        subheadingColor={subheadingColor}
                        tempfontSize={tempfontSize}
                        tempfontStyle={tempfontStyle}
                        handleFontSizeChange={handleFontSizeChange}
                        handleFontStyleChange={handleFontStyleChange}
                    />
                </Route>
                <Route path="/coming-soon">
                    <ComingSoon />
                </Route>
                {/* Handle the case when no routes match */}
                <Route render={() => <PageNotFound />} />
            </Switch>
        </Router>
    );
};

export default RouterMain;
