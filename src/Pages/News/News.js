import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useSetTitle from '../../hooks/useSetTitle';

const News = () => {
    useSetTitle('News Details');
    const news = useLoaderData();

    const { title, details, thumbnail_url, author, category_id } = news;
    return (
        <Card>
            <Card.Img variant="top" src={thumbnail_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details
                    }
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">View All News in This Category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;