import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useSetTitle from '../../hooks/useSetTitle';
import NewsSummeryCard from '../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const allNews = useLoaderData();
    useSetTitle('Home');
    return (
        <div>
            <h2>this is home component {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;