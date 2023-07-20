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
import Home from "./Components/Home";
import MainContent from "./Components/MainContent";
import App from "./App";

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

    // const handleTemplateSelect = (templateName) => {
    //     const newPath = `/home/${templateName}`;
    //     if (history.location.pathname !== newPath) {
    //         history.push(newPath);
    //     }
    // };

    return (
        <Router>
            <Switch>
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
                        // selectedTemplate={selectedTemplate}
                    />
                </Route>
                <Route path="/home">
                    <Home
                        handleTemplateSelect={handleTemplateSelect}
                        // history={history}
                    />
                </Route>

                <Route path="/">
                    <Login />
                </Route>

                <Route path="/register">
                    <Registration />
                </Route>
            </Switch>
        </Router>
    );
};

export default RouterMain;
