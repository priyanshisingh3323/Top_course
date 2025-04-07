import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify';
import { useState } from 'react';

const Card = (props) => {
    let course = props.course;
    let setLinkedCourses = props.setLinkedCourses;
    let likedCourses = props.likedCourses;

    const [readmore, setReadmore] = useState(false);
    const description = readmore ? course.description : `${course.description.substring(0, 100)}...`;
    // readmore true->info dikhao puri agar false hai to aadhi 200 

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    function clickHandler() {
        if (likedCourses.includes(course.id)) {

            setLinkedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like Removed.")
        }
        else {
            if (likedCourses.length === 0)
                setLinkedCourses([course.id]);
            else
                setLinkedCourses((prev) => [...prev, course.id]);
            toast.success("Liked Successfully.")
        }

    }
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url} />
                <div className='w-10 h-10 absolute right-2 bottom-[-6px] bg-white rounded-full flex items-center justify-center'>
                    <button onclick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ?
                                (<FcLike fontSize="1.75rem" onClick={clickHandler} />) :
                                (<FcLikePlaceholder fontSize="1.75rem" onClick={clickHandler} />)
                        }

                    </button>

                </div>
                </div>
            
            <div>
                <p className='text-white font-semibold text-semibold text-lg leading-6 mt-4'>{course.title} </p>
                {/* <p className='text-white mt-2'>
                    {
                    course.description.length > 100?(course.description.substr(0,100))+"...":(course.description)
                        
                    }
                    </p> */}
                 <p className='text-white mt-2'>
                    {description}
                    <span className="cursor-pointer text-blue-800 font-bold" onClick={readmoreHandler}>
                        {readmore ? `Show less` : `Read more`}
                    </span>
                    </p>


            </div>
            
        </div>
    )
}

export default Card 