import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    let courses=props.courses;
    let category=props.category;
    const [likedCourses, setLinkedCourses] = useState([])
    let allCourses = [];

    
    const getCourses = () => {
        if(category==="All"){
                   // returns you a list of all courses recieved from the api response
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((coursedata) => {
                allCourses.push(coursedata);
            })
        })
        return allCourses;
        }
        else{
            // only specific category data or array will pass
            return courses[category];
        }
 
    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                    return <Card key={course.id}
                        course={course}
                        likedCourses={likedCourses}
                        setLinkedCourses={setLinkedCourses} 
                        />
                })
            }
        </div>
    )
}

export default Cards