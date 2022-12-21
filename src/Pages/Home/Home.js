import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCard from './ShowCard';

const Home = () => {
    const allShow = useLoaderData();
    return (
       <div className='container'>
         <div className="row gap-3 justify-content-center">
            <h5 className='text-center mt-5'>Welcome To </h5>
            <h1 className='text-center'>CINEMAGIC</h1>
            <p className='text-center mx-5'>If you are looking for a website to see recently released tv shows and wanna book them then this is the correct place for you. Make sure to check and chose your favorite one.</p>
           {
            allShow.map(show => <ShowCard
            key={show.id}
            show={show}
            ></ShowCard>)
           }
        </div>
       </div>
    );
};

export default Home;
