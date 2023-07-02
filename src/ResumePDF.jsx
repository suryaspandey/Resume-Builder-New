import React from "react";
import { Page, Document, Text, View, StyleSheet } from "@react-pdf/renderer";
import BasicInfo from "./Components/BasicInfo";
// import ExperienceDetails from "./Components/ExperienceDetails";
// import EducationDetails from "./Components/EducationDetails";
// import ProjectDetails from "./Components/ProjectDetails";
// import Skills from "./Components/Skills";

// Define the styles for the PDF
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: "1cm",
    },
    section: {
        marginBottom: "1cm",
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: "0.5cm",
    },
});

// Define the ResumePDF component
const ResumePDF = ({ theme }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <BasicInfo theme={theme} />
                </View>
                {/* Add other components here */}
            </Page>
        </Document>
    );
};

export default ResumePDF;
