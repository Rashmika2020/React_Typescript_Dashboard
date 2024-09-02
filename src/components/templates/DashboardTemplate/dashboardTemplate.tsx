import { CourseList, PlanningList, SideBar, StatisticList } from "../../organism";
import { Course } from "../../organism/CourseList/courseList";
import { Planning } from "../../organism/PlanningList/planningList";
import { Statistic } from "../../organism/statisticsList/statisticList";

const courses:Course[] = [
    {id:"1", name:"French", lesson:"35 lessons", image:"assets/Courses/Frame1.png", progress: 75,colorClass: "course-card-blue"},
    {id:"2", name:"Portugese", lesson:"30 lessons", image:"assets/Courses/Frame2.png", progress: 50,colorClass: "course-card-orange"},
    {id:"3", name:"Italian", lesson:"20 lessons", image:"assets/Courses/Frame3.png", progress: 25, colorClass: "course-card-green"},
    {id:"4", name:"German", lesson:"40 lessons", image:"assets/Courses/Frame4.png", progress: 75, colorClass: "course-card-yellow"}
]

const plannings:Planning[] = [
    {id:"1", image:"assets/Plans/book1.png", topic:"Reading - Beginner Topic 1", time:"08.00 AM - 10.00 AM"},
    {id:"2", image:"assets/Plans/edit1.png", topic:"Reading - Beginner Topic 1", time:"01.00 PM - 02.00 PM"},
    {id:"3", image:"assets/Plans/headphones1.png", topic:"Listening - Intermediate Topic 1", time:"03.00 PM - 04.00 PM"},
    {id:"4", image:"assets/Plans/volume1.png", topic:"Speaking - Advance Topic 1", time:"07.00 PM - 08.00 PM"},
    {id:"5", image:"assets/Plans/volume2.png", topic:"Speaking - Beginner Topic 1", time:"08.00 AM - 12.00 PM"},
    {id:"6", image:"assets/Plans/headphones2.png", topic:"Listening - Beginner Topic 1", time:"08.00 AM - 12.00 PM"},
    {id:"7", image:"assets/Plans/edit2.png", topic:"Grammar - Intermediate Topic 2", time:"08.00 AM - 12.00 PM"},
    {id:"8", image:"assets/Plans/book2.png", topic:"Reading - Advance Topic 1", time:"08.00 AM - 12.00 PM"}
]

const statistic:Statistic[]=[
    {id:"1", title:"Courses Completed", number:2},
    {id:"1", title:"Total Points Gained", number:250},
    {id:"1", title:"Courses In Progress", number:3},
    {id:"1", title:"Tasks Finished", number:5}
]

const DashboardTemplate = () => {
    return(
        <div className="dashboard-template">
            <SideBar/>
            <div className="content">
                <CourseList courses={courses}/>
                <PlanningList plannings={plannings}/>
            </div>
            <div className="right-bar">
            <StatisticList statistic={statistic}/>
            </div>
        </div>
    )
}

export default DashboardTemplate;