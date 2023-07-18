import { useEffect, useState } from "react";

import { Input } from "antd";
const { TextArea } = Input;

const SummaryTemplate2 = ({ tempfontSize, tempfontStyle }) => {
    // <h1>Summary</h1>;

    const [summary, setSummary] = useState("");
    const [summaryError, setSummaryError] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const storedData = localStorage.getItem("summarytemp2");
        if (storedData) {
            setSummary(JSON.parse(storedData));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const wordCount = value.trim().split(" ").length;
        if (wordCount <= 60) {
            setSummary(value);
        } else {
            setSummary(value);
        }
        setIsEditing(true);
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

    return (
        <>
            <TextArea
                className="summaryTextareaClass"
                name="summary"
                value={summary}
                onChange={handleChange}
                onFocus={() => {
                    setIsEditing(true);
                }}
                placeholder="What's the one thing that makes you the best candidate for this job?"
                autoSize
                style={{
                    border: "none",
                    backgroundColor: "transparent",
                    fontFamily: tempfontStyle,
                    fontSize: tempfontSize,
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
