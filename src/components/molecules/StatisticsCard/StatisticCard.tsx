import React from "react";
import { Typography } from "../../atoms";

interface Stat{
    title: string;
    number: number;
}

interface Statprops{
    stat:Stat
}

const StatisticCard: React.FC<Statprops> = ({ stat }) => {
    return(
        <div className="statistic-card">
            <Typography type="h4">{stat.title}</Typography>
            <Typography type="h1">{stat.number}</Typography>
        </div>
    )
}

export default StatisticCard;