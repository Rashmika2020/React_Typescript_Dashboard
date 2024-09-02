import React from "react";
import { Image, Typography } from "../../atoms";

interface Planningcard { 
    image: string;
    topic: string;
    time: string;
}

interface PlanningCardProps {
    planningcard: Planningcard
}

const PlanningCard:React.FC<PlanningCardProps> = ({planningcard}) => {
    return (
        <div className="planning-card">
            <div className='planning-card-img'>
            <Image src={planningcard.image} alt={planningcard.topic}/>
            </div>
            <div>
            <Typography className='planning-card-topic' type="h4">{planningcard.topic}</Typography>
            <Typography className='planning-card-time' type="p">{planningcard.time}</Typography>
            </div>
        </div>
    )
}

export default PlanningCard;