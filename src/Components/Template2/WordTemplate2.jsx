import React from "react";
import { renderToDocx } from "redocx";
import PreviewTemplate2 from "./PreviewTemplate2";
// import PreviewTemplate2 from "./PreviewTemplate2";

const WordTemplate2 = ({
    formData,
    themeColor,
    backgroundColor,
    textColor,
    subheadingColor,
    tempfontSize,
    tempfontStyle,
}) => {
    return (
        <div>
            <PreviewTemplate2
                formData={formData}
                themeColor={themeColor}
                backgroundColor={backgroundColor}
                textColor={textColor}
                subheadingColor={subheadingColor}
                tempfontSize={tempfontSize}
                tempfontStyle={tempfontStyle}
            />
        </div>
    );
};

export default WordTemplate2;
