import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummeryCard = ({ news }) => {

    const { _id, author, details, image_url, title, total_view, rating } = news;
    return (
        <Card className="mb-5">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <div>
                        <Image src={author.img} style={{ height: '60px' }} className="me-2" roundedCircle />
                    </div>
                    <div>
                        <p className="m-0">{author.name}</p>
                        <p className="m-0">{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaBookmark className="me-2" />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200) + '...'}<Link to={`/news/${_id}`}>Read More</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <FaStar className="me-2 text-warning" />
                    <span>{rating.number}</span>
                </div>
                <div className="d-flex align-items-center">
                    <FaEye className="me-2" />
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummeryCard;