import React from "react";

interface IconProps{
    src:string
    alt:string
}

const Icon:React.FC<IconProps> =({ src, alt}) => {
    return(
        <img className="icon" src={src} alt={alt}/>
    )
}

export default Icon;
