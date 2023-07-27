import React from "react";

export default function PreviewSummaryTemplate2({
    tempfontSize,
    tempfontStyle,
}) {
    const savedSummary = JSON.parse(localStorage.getItem("summarytemp2")) || [];
    return (
        <>
            <div
                // ref={textareaRef}
                className="summaryTextareaClass"
                // name="summary"
                // value={summary}
                // onChange={handleChange}
                // onFocus={() => {
                //     setIsEditing(true);
                // }}
                // placeholder="What's the one thing that makes you the best candidate for this job?"
                // // autoSize
                // autoSize={{ minRows: 5, maxRows: 7 }}
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

            {/* {isEditing && (
                <button
                    className="save-btn"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            )}

            {summaryError && <p>{summaryError}</p>} */}
        </>
    );
}
