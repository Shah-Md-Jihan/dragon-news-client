import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useSetTitle from '../../hooks/useSetTitle';
import NewsSummeryCard from '../Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    useSetTitle('Category');
    const categoryNews = useLoaderData();

    return (
        <div>
            {
                categoryNews.map(catNews => <NewsSummeryCard key={catNews._id} news={catNews}></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;