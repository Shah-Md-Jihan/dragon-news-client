import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const news = useLoaderData();
    return (
        <div>
            <h5>This is Category{news.length}</h5>
        </div>
    );
};

export default Category;