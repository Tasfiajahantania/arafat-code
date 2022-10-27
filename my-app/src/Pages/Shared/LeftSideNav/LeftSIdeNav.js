import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function LeftSIdeNav() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course/category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <ListGroup as="ol" numbered className='shadow border-0 mb-4'>
            <div className='p-2 mt-2'>
                <h6>Category</h6>
            </div>
            {
                categories.map(category => <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold"><Link className='text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link></div>
                    </div>
                    {/* <Badge bg="primary" pill>
                        14
                    </Badge> */}
                </ListGroup.Item>)
            }
        </ListGroup>
    );
}

export default LeftSIdeNav;