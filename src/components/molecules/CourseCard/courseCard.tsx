import React from "react";
import { Image, Typography } from "../../atoms";

interface Coursecard{
    colorClass: string;
    name: string;
    lesson: string;
    image: string;
    progress: number;
}

interface coursecardProps{
    coursecard:Coursecard
}

const CourseCard: React.FC<coursecardProps> = ({coursecard}) => {
    return (
        <div className={`course-card ${coursecard.colorClass}`}>
            <Typography type="h2">{coursecard.name}</Typography>
            <Typography type="p">{coursecard.lesson}</Typography>
              <div className='course-card-img'>
                 <Image src={coursecard.image} alt={coursecard.name}/>
              </div>
        </div>
    )
}

export default CourseCard;