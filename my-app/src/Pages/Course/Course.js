import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Course = () => {

    const courses = useLoaderData();

    return (
        <div>
            <Row>
                {
                    courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }

            </Row>
        </div>
    );
};

export default Course;