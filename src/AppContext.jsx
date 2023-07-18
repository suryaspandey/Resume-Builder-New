import React, { createContext, useState } from "react";

// Create a new context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
    const [themeColor, setThemeColor] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("");
    const [textColor, setTextColor] = useState("#000000");
    const [subheadingColor, setSubheadingColor] = useState("#000000");

    return (
        <AppContext.Provider
            value={{
                themeColor,
                setThemeColor,
                backgroundColor,
                setBackgroundColor,
                textColor,
                setTextColor,
                subheadingColor,
                setSubheadingColor,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
