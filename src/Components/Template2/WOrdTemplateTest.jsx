import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

import React from "react";
import { useState } from "react";

export default function WOrdTemplateTest() {
    const [showWordFile, setShowWordFile] = useState(false);

    const toggleShowWordFile = () => {
        setShowWordFile((prevShowWordFile) => !prevShowWordFile);
    };

    const docs = [
        {
            uri: "http://localhost:5173/download-template2",
            fileType: "docx",
            fineName: "demores.docx",
        },

        // { uri: require("./example-files/pdf.pdf") }, // Local File
    ];
    return (
        <div>
            <DocViewer
                documents={docs}
                pluginRenderers={DocViewerRenderers}
                style={{ height: "1000" }}
            ></DocViewer>
        </div>
    );
}
