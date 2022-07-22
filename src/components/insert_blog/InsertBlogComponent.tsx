import { useState } from "react";
import "./InsertStyle.css"
import {
    Link
} from "react-router-dom";

export default function InsertBlogComponent() {
    // const [markdownText, setMarkdownText] = useState("");

    // const contextValue = {
    //     markdownText,
    //     setMarkdownText
    // };
    return (
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="grid grid-cols-2 divide-x">
                <div>01</div>
                <div>02</div>
            </div>
        </div>
    )
}