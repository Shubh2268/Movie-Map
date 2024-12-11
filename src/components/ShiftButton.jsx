import React, { useState } from 'react';

const ShiftButton = () => {
    const [activeTab, setActiveTab] = useState('Popular');

    const tabs = ['Popular', 'Upcoming', 'Top Rated'];

    return (
        <div className='flex justify-center items-center'>
            <div className='flex justify-around items-center space-x-0 md:space-x-2 bg-transparent my-12 md:my-20 p-1 rounded-full border border-green-400'>
                {tabs.map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`px-5 md:px-14 py-0.5 md:py-1 rounded-full font-normal md:font-medium text-xs md:text-sm transition-all ${activeTab === tab ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white' : 'bg-transparent text-green-400 hover:text-white hover:bg-green-400'}`}>{tab}</button>
                ))}
            </div>
        </div>
    );
};

export default ShiftButton;
