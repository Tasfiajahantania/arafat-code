import React from 'react';
import { Card, Col, Row, Image, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';
import './Home.css';
import homeBanner from '../../../assets/images/home-banner.svg';
const Home = () => {
    const allCourses = useLoaderData();

    return (
        <div>
            <Container>
                <div className="banner-bg banner-bg-rainbow" data-background="https://weblearnbd.net/tphtml/epora/epora/assets/img/banner/banner-bg-2.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-8">
                                <div className="hero-content hero-content-black">
                                    <h2 className="hero-title-black mb-45">Online Learning Designed For <br /> Real Life</h2>
                                    <div className="hero-btn">
                                        <Link className='btn btn-primary'>All Courses</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="banner-shape d-none d-md-block">
                                    <Image classNameName='b-shape-3' className='img-fluid' src={homeBanner}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;