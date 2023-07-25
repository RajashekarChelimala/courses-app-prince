import React, { useState } from 'react'
import { Container, Form, FormGroup, Input, Label } from 'reactstrap'
import { Fragment } from 'react'
import { Button } from 'reactstrap'

export const AddCourse = () => {

    const [course, setCourse] = useState({
        id:'',
        title:'',
        description:''
    })
    const handleForm = () => {
        
    }
    return (
        <Fragment>
            <h1 className="my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="courseId">Course Id</Label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="courseId"
                        id="courseId"
                        onChange={(e) => setCourse({ ...course, id: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type="text" placeholder="Enter title here" id="title"
                        onChange={(e) => setCourse({ ...course, title: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input
                        type="textarea"
                        id="description"
                        placeholder="Enter description here"
                        style={{ height: 150 }}
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                </FormGroup>
                <Container>
                    <Button type='submit' color="success">Add Course</Button>
                    <Button type='reset' color="warning" style={{ marginLeft: 4 }}
                        onClick={() => setCourse({ id: '', title: '', description: '' })}>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}
