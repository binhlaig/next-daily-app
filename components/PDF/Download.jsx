"use client"
import { Font, PDFDownloadLink } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import PDFDocument from "./PDFDocument ";
import { Button, Container } from "@mui/material";


Font.register({
    family: "HackGen35",
    fonts: [
        {
            src: "/fonts/HackGen35-Regular.ttf",
            fontStyle: "normal",
            fontWeight: "normal",
        },
        {
            src: "/fonts/HackGen35-Bold.ttf",
            fontStyle: "normal",
            fontWeight: "bold",
        },
    ],
});

const DynamicPDFViewer = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
    {
        loading: () => <p>Loading...</p>,
        ssr: false,
    }
);


const Download = () => {

    return (
        <>
            <Container sx={{ my: "50px" }}>
                <PDFDownloadLink fileName="pdf test" document={<PDFDocument />}>
                    <Button variant="contained">Download</Button>
                </PDFDownloadLink>

                <DynamicPDFViewer width={"100%"} height={1000}>
                    <PDFDocument />
                </DynamicPDFViewer>

            </Container>

        </>
    )
}

export default Download
