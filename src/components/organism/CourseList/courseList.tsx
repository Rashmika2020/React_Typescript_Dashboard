import React from "react";
import { Typography } from "../../atoms";
import { CourseCard, SearchBar } from "../../molecules";

export interface Course {
    colorClass: string;
    id: string;
    name: string;
    lesson: string;
    image: string;  
    progress: number;
}

interface courseProps {
    courses:Course[];
}
const CourseList:React.FC<courseProps> = ({ courses }) => {
    return(
        <div className="course-list">
            <Typography type="h3">Hello BRUNO, welcome back!</Typography>
            <div className="course-list-heading">
                <Typography type="h1">My Courses</Typography>
                <Typography type="p">View All</Typography>
                <SearchBar/>
            </div>
            <div className="course-list-card">
                {courses.map(course=>(
                    <CourseCard key={course.id} coursecard={course}/>
                ))}
                {/* <div className="progress-circle">{courses.progress}%</div> */}
            </div>
        </div>
    )
}

export default CourseList;