import React from "react";

interface ImageProps{
    src: string;
    alt: string;
    className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className}) => {
    return(
        <img className="image" src={src} alt={alt}/>
        )
}

export default Image;
