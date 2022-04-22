import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Author from "./author/Author";
import Button from "./button/Button";
import Tag from "./tag/Tag";
import { exportComponentAsPNG } from "react-component-export-image";

function Quote() {
    const [quote, setQuote] = useState("");
    const quoteComponent = useRef();
    const getQuote = () => {
        axios
            .get("https://api.quotable.io/random")
            .then((res) => {
                setQuote(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const saveQuote = () => {
        exportComponentAsPNG(quoteComponent);
    };
    useEffect(() => {
        getQuote();
    }, []);
    return (
        <>
            {quote && (
                <>
                    <div className="quote" ref={quoteComponent}>
                        <p className="quote-body">"{quote.content}"</p>
                        <Author author={quote.author} />
                        <div className="tags-list">
                            {quote.tags?.map((tag, index) => (
                                <Tag tag={tag} key={index} />
                            ))}
                        </div>
                    </div>
                    <div className="menu">
                        <Button
                            src="assets/save.svg"
                            alt="save"
                            onClick={saveQuote}
                        />
                        <Button
                            src="assets/refresh.svg"
                            alt="refresh"
                            onClick={getQuote}
                        />
                    </div>
                </>
            )}
        </>
    );
}

export default Quote;
