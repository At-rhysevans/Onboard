import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';




export default function DisplayPDF({ file, docTitle }) {

    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    return (
        <div >
            <h4 className="form-title">{ docTitle }</h4>

            <div className="all-page-container">
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))}
                </Document>
            </div>
        </div>
    )
}