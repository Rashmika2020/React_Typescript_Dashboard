import React from "react";
import { Typography } from "../../atoms";
import { ActivityGraph, StatisticCard } from "../../molecules";

export interface Statistic{
    id: string;
    title: string;
    number: number;
}

interface StatisticProps{
    statistic:Statistic [];
}

const StatisticList:React.FC<StatisticProps> = ( { statistic}) => {
    return(
        <div className="statistic-list">
            <div>
            <div className="stat-heading">
            <Typography type="h1">Statistics</Typography>
            </div>
            <div className="stat-list-card">
                { statistic.map(statis => (
                    <StatisticCard key={statis.id} stat={statis}/>
                ))}
            </div>
        </div>
        <div className="activity-graph-card">
                <ActivityGraph/>
        </div>
        </div>
    )
}

export default StatisticList;