import React from 'react'
import { Card, CardHeader,CardText, CardBody, CardTitle, Button, ButtonDropdown } from 'reactstrap'
import axios from 'axios'

export const CourseCard = ({allCourses,onDelete}) => {
    const {id,title,description} =allCourses
    console.log(allCourses)
    const deleteHandler=()=>{
        const deleteCourse = async (id) => {
            const apiUrl = `http://localhost:3001/courses/${id}`;
          
            try {
              const response = await axios.delete(apiUrl)
              .then(()=>onDelete(id))
              console.log('Object deleted successfully:', response.data);
            } catch (error) {
              console.error('Error deleting object:', error.message);
            }
          };
          deleteCourse(id);
    }
    return (
        <Card
            className="my-2"
            color="info"
            inverse
        >
            <CardHeader>
                <h2>Course Id:{id}</h2>
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5">
                    <h2>{title}</h2>
                </CardTitle>
                <CardText>
                    {description}
                </CardText>
                <Button color='warning'>Update</Button>&nbsp;&nbsp;
                <Button color='danger' onClick={deleteHandler}>Delete</Button>
            </CardBody>
        </Card>
    )
}
