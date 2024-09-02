import React from "react";
import { Typography } from "../../atoms";

interface DateProps{
    date:string;
}

const Calandar:React.FC<DateProps> = ({ date }) => {
    return(
        <div className="date-calandar">
            <img src="assets/Calandar/calandar.png" alt="calandar"/>
            <Typography type="p">{ date }</Typography>
        </div>
    )
}

export default Calandar;