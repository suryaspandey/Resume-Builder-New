import { useEffect, useState } from "react";
import { preview } from "vite";

const SummaryTemplate2 = () => {
    <h1>Summary</h1>;

    const [summary, setSummary] = useState("");
    const [summaryError, setSummaryError] = useState("");

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
        }
    };

    return (
        <>
            <h1>SUmmary from the component</h1>
            <textarea
                className="summaryTextareaClass"
                name="summary"
                value={summary}
                onChange={handleChange}
                placeholder="What's the one thing that makes you the best candidate for this job?"
            ></textarea>
            <button className="save-btn" type="submit" onClick={handleSubmit}>
                Save
            </button>
            {summaryError && <p>{summaryError}</p>}
        </>
    );
};
export default SummaryTemplate2;
