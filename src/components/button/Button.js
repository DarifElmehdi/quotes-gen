import React from "react";

function Button({ src, alt, onClick }) {
    return (
        <>
            <img
                className="button"
                src={src}
                alt={alt}
                onClick={() => onClick()}
            />
        </>
    );
}

export default Button;
