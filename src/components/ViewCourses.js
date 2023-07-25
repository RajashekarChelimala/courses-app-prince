import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CourseCard } from './CourseCard'

export const ViewCourses = () => {
    const [allCourses, setAllCourses] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/courses')
            .then(response => setAllCourses(response.data))
            .catch(error => console.log("Error Loading Data::", error))
    }, [])
    const handleDeleteCourse = (deletedCourseId) => {
        setAllCourses(allCourses.filter(course => course.id !== deletedCourseId));
    };

    return (
        <div>
            {allCourses.length > 0 ? allCourses.map(course => (
                <CourseCard
                    key={course.id}
                    allCourses={course}
                    onDelete={handleDeleteCourse} // Pass the onDelete callback to the CourseCard
                />
            )) : <h1>No courses</h1>}
        </div>
    );
}
