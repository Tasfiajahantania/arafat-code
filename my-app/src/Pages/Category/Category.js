import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Category = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div>
            {/* <div>
                <h6 className='mb-4'>Our course</h6>
            </div> */}
            <Row>
                {
                    allCourses.map(course => <CourseCard
                        key={course._id}
                        course={course}
                    ></CourseCard>)
                }
            </Row>
        </div>
    );
};

export default Category;