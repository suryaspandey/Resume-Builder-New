import { useEffect, useState, useRef } from "react";

import { Input } from "antd";
const { TextArea } = Input;

const SummaryTemplate2 = ({ tempfontSize, tempfontStyle }) => {
    const [summary, setSummary] = useState("");
    const [summaryError, setSummaryError] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    // const [textareaRows, setTextareaRows] = useState(1);
    const textareaRef = useRef(null);

    useEffect(() => {
        const storedData = localStorage.getItem("summarytemp2");
        if (storedData) {
            setSummary(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        adjustTextareaHeight();
    }, [tempfontSize]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const wordCount = value.trim().split(" ").length;
        if (wordCount <= 60) {
            setSummary(value);
        } else {
            setSummary(value);
        }
        setIsEditing(true);
        // adjustTextareaHeight();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;
        setSummaryError("");

        if (summary.trim() === "") {
            setSummaryError("Summary cannot be empty");
            isValid = false;
        }

        if (isValid) {
            localStorage.setItem("summarytemp2", JSON.stringify(summary));
            setIsEditing(false);
        }
    };

    const adjustTextareaHeight = () => {
        const { current: textarea } = textareaRef;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
        // if (textarea.scrollHeight > textarea.offsetHeight) {
        //     textarea.style.height = `${textarea.offsetHeight}px`;
        // }
    };

    return (
        <>
            <TextArea
                // ref={textareaRef}
                className="summaryTextareaClass"
                name="summary"
                value={summary}
                onChange={handleChange}
                onFocus={() => {
                    setIsEditing(true);
                }}
                placeholder="What's the one thing that makes you the best candidate for this job?"
                // autoSize
                autoSize={{ minRows: 5, maxRows: 7 }}
                style={{
                    border: "none",
                    backgroundColor: "transparent",
                    fontFamily: tempfontStyle,
                    fontSize: tempfontSize,
                    // width: "100%",
                }}
                // showCount
                maxLength={300}
            />

            {isEditing && (
                <button
                    className="save-btn"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            )}

            {summaryError && <p>{summaryError}</p>}
        </>
    );
};
export default SummaryTemplate2;
