import React from "react";
import { Typography } from "../../atoms";
import { PlanningCard } from '../../molecules'

export interface Planning {
    id: string;
    image: string;
    topic: string;
    time: string;
}

interface PlanningProps{
    plannings:Planning[];
}

const PlanningList:React.FC<PlanningProps> = ( {plannings}) => {
    return(
        <div className="planning-list">
            <div className="planning-heading">
                <Typography type="h1">Planning</Typography>
                <Typography type="p">View All</Typography>
            </div>
            <div className="planning-list-card">
                {plannings.map(plan => (
                    <PlanningCard key={plan.id} planningcard={plan}/>
                ))}
            </div>
        </div>
    )
}

export default PlanningList;