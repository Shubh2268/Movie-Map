import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Card from './Card';

const RelatedMedia = ({ mediaType, mediaId }) => {
    const { fetchRelatedMedia, relatedMedia, loading, error } = useContext(AppContext);

    useEffect(() => {
        fetchRelatedMedia(mediaType, mediaId);
    }, [mediaType, mediaId, fetchRelatedMedia]);

    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }


    if (loading) return <p className='text-gray-400 text-center'>Loading...</p>;
    if (error) return <p className='text-gray-400 text-center'>{error}</p>;

    return (
        <div className='py-10 mx-10'>
            <h2 className='text-xl font-medium text-gray-800 dark:text-gray-200 mb-4'>
                Related {mediaType === 'movie' ? 'Movies' : 'TV Shows'}
            </h2>
            <div id='slider' className='overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {relatedMedia.length > 0 ? (
                    relatedMedia.map((item) => (
                        <div key={item.id} className='inline-block'>
                            <Card media={item} />
                        </div>
                    ))
                ) : (
                    <p className='text-gray-400'>No related media found.</p>
                )}
            </div>
        </div>
    );
};

export default RelatedMedia;
