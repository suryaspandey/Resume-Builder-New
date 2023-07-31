import React from "react";

export default function PreviewSummaryTemplate2({
    tempfontSize,
    tempfontStyle,
}) {
    const savedSummary = JSON.parse(localStorage.getItem("summarytemp2")) || [];
    return (
        <>
            <div
                className="summaryTextareaClass"
                style={{
                    border: "none",
                    backgroundColor: "transparent",
                    fontFamily: tempfontStyle,
                    fontSize: tempfontSize,
                }}
                // showCount
                // maxLength={300}
            >
                {savedSummary}
            </div>
        </>
    );
}
