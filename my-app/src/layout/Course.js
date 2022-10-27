import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSIdeNav from '../Pages/Shared/LeftSideNav/LeftSIdeNav';

const CourseLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="3">
                        <LeftSIdeNav></LeftSIdeNav>
                    </Col>
                    <Col lg="9">
                        <Outlet>
                        </Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default CourseLayout;