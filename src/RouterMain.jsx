// import App from "./App";
// import MainContent from "./Components/MainContent";
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// import Home from "./Components/Home";

// function RouterMain() {
//     const [themeColor, setThemeColor] = useState("black");
//     const [backgroundColor, setBackgroundColor] = useState("");
//     const [textColor, setTextColor] = useState("#000000");
//     const [subheadingColor, setSubheadingColor] = useState("#000000");

//     const [tempfontSize, setTempFontSize] = useState(10);
//     const [tempfontStyle, setTempFontStyle] = useState("Times New Roman");

//     const [displayUserName, setDisplayUserName] = useState("");
//     const [emailPDF, setEmailPDF] = useState("");
//     const [downloadPDF, setDownloadPDF] = useState("");

//     let history = useHistory();

//     useEffect(() => {
//         const storedFontSize = localStorage.getItem("tempfontSize");
//         if (storedFontSize) {
//             setTempFontSize(Number(storedFontSize));
//         }

//         const storedFontStyle = localStorage.getItem("tempfontStyle");
//         if (storedFontStyle) {
//             setTempFontSize(Number(storedFontStyle));
//         }
//     }, []);

//     const handleFontSizeChange = (size) => {
//         setTempFontSize(size);
//         localStorage.setItem("tempfontSize", size.toString());
//     };

//     const handleFontStyleChange = (style) => {
//         setTempFontStyle(style);
//         localStorage.setItem("tempfontStyle", style.toString());
//     };

//     // --------------------------

//     const handleThemeColorChange = (color, templateName) => {
//         setThemeColor(color);
//         history.push(`/home/${templateName}`);
//     };

//     const handleBackgroundColorChange = (color) => {
//         setBackgroundColor(color);
//     };

//     const handleTextColorChange = (color) => {
//         setTextColor(color);
//     };

//     const handleSubheadingColorChange = (color) => {
//         setSubheadingColor(color);
//     };

//     //  -----------------------
//     const handleEmailPDF = (emailPDF) => {
//         setEmailPDF(emailPDF);
//     };

//     const handleDownloadPDF = (downloadPDF) => {
//         setDownloadPDF(downloadPDF);
//     };

//     const handleDisplayUserName = (displayUserName) => {
//         setDisplayUserName(displayUserName);
//     };

//     return (
//         <Router>
//             <Switch>
//                 <Route path="/preview">
//                     <MainContent
//                         themeColor={themeColor}
//                         backgroundColor={backgroundColor}
//                         textColor={textColor}
//                         subheadingColor={subheadingColor}
//                         // -------------
//                         tempfontSize={tempfontSize}
//                         tempfontStyle={tempfontStyle}
//                     />
//                 </Route>
//                 <Route path="/home/: templateName">
//                     <App
//                         handleThemeColorChange={handleThemeColorChange}
//                         handleBackgroundColorChange={
//                             handleBackgroundColorChange
//                         }
//                         handleTextColorChange={handleTextColorChange}
//                         handleSubheadingColorChange={
//                             handleSubheadingColorChange
//                         }
//                         themeColor={themeColor}
//                         backgroundColor={backgroundColor}
//                         textColor={textColor}
//                         subheadingColor={subheadingColor}
//                         // -----------------
//                         tempfontSize={tempfontSize}
//                         tempfontStyle={tempfontStyle}
//                         handleFontSizeChange={handleFontSizeChange}
//                         handleFontStyleChange={handleFontStyleChange}
//                     />
//                 </Route>
//                 <Route path="/">
//                     <Home />
//                 </Route>
//             </Switch>
//         </Router>
//     );
// }

// export default RouterMain;

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

const RouterMain = () => {
    const [themeColor, setThemeColor] = useState("black");
    const [backgroundColor, setBackgroundColor] = useState("");
    const [textColor, setTextColor] = useState("#000000");
    const [subheadingColor, setSubheadingColor] = useState("#000000");
    const [tempfontSize, setTempFontSize] = useState("");
    const [tempfontStyle, setTempFontStyle] = useState("");

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

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/login">
                    <Container
                        className="d-flex align-items-center justify-content-center"
                        style={{ minHeight: "100vh" }}
                    >
                        <div className="w-100" style={{ maxWidth: "300px" }}>
                            <Login />
                        </div>
                    </Container>
                </Route>

                <Route path="/register">
                    <Container
                        className="d-flex align-items-center justify-content-center"
                        style={{ minHeight: "100vh" }}
                    >
                        <div className="w-100" style={{ maxWidth: "300px" }}>
                            <Registration />
                        </div>
                    </Container>
                </Route>

                <Route
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
                />
                <Route path="/choose-template">
                    <ChooseTemplate
                        handleTemplateSelect={handleTemplateSelect}
                    />
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
                {/* Handle the case when no routes match */}
                <Route render={() => <PageNotFound />} />
            </Switch>
        </Router>
    );
};

export default RouterMain;
