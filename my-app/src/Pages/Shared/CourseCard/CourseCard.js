import { Col, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../CourseCard/CourseCard.css";
function CourseCard({ course }) {
    const {
        _id,
        title,
        thumbnail_url,
        author,
        duration,
        student,
        price,
        assignment,
    } = course;
    return (
        <div className="col-12 col-md-4 mb-4">
            <Card className="shadow p-2 border-0">
                <Card.Img variant="top" src={thumbnail_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <ul class="list-group mb-3 list-group-flush">
                            <li className="list-group-item px-0 border-top-0 d-flex justify-content-between align-items-center">
                                <span className="mb-0 text-muted">{author.name}</span>
                                <Image className="author-avatar" src={author.img}></Image>
                            </li>
                            {/* <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Duration :</span>
                                <strong>{duration}</strong>
                            </li>
                            <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Assignment :</span>
                                <strong>{assignment}</strong>
                            </li>
                            <li className="list-group-item px-0 d-flex justify-content-between">
                                <span>
                                    <i className="fa fa-graduation-cap text-primary mr-2"></i>Student
                                </span>
                                <strong>{student}</strong>
                            </li> */}
                            <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="mb-0">Price :</span>
                                <strong>${price}</strong>
                            </li>
                        </ul>
                    </Card.Text>
                    <Link to={`/course/detail/${_id}`}>
                        {" "}
                        <Button className="btn fw-600 primary-custom py-2">
                            Get Course <FaArrowRight className="right-arrow"></FaArrowRight>
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CourseCard;
