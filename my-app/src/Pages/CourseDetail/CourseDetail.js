import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaArrowCircleRight } from "react-icons/fa";
import '../CourseDetail/CourseDetail.css';

const CourseDetail = () => {

    const { title, thumbnail_url, duration, assignment, student, price, description, author } = useLoaderData();

    return (
        <Row>
            <Col lg="7">
                <Card className='shadow border-0 p-3'>
                    <Card.Img variant="top" className='image-fit' src={thumbnail_url} />
                    <hr />
                    <div className="card-body">
                        {description}
                    </div>
                </Card>
            </Col>
            <Col lg="5" className='shadow border-0 p-3'>
                <Card className='p-2'>
                    <h6 className='mt-2'>{title}</h6>
                    <div className='card-body'>
                        <li className="list-group-item px-0 d-flex justify-content-between align-items-center">
                            <span className="mb-0">Mentor : <span className='mentor-name'>{author.name}</span></span>
                            <Image className='mentor-avatar' src={author.img}></Image>
                        </li>
                        <hr />
                        <li className="list-group-item px-0 d-flex justify-content-between">
                            <span className="mb-0">Duration :</span>
                            <strong>{duration}</strong>
                        </li>
                        <hr />
                        <li className="list-group-item px-0 d-flex justify-content-between">
                            <span className="mb-0">Assignment :</span>
                            <strong>{assignment}</strong>
                        </li>
                        <hr />
                        <li className="list-group-item px-0 d-flex justify-content-between">
                            <span>
                                <i className="fa fa-graduation-cap text-primary mr-2"></i>Student
                            </span>
                            <strong>{student}</strong>
                        </li>
                        <hr />
                        <li className="list-group-item px-0 d-flex justify-content-between">
                            <span>
                                <i className="fa fa-graduation-cap text-primary mr-2"></i>Price
                            </span>
                            <strong>${price}</strong>
                        </li>
                    </div>
                </Card>
                <div className="d-flex justify-content-center align-items-center mt-4">
                    <Button>Get Premium Access <FaArrowCircleRight></FaArrowCircleRight></Button>
                </div>
            </Col>
        </Row >
    );
};

export default CourseDetail;