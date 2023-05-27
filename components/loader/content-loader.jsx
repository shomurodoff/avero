import React from 'react';
import ClockLoader from "react-spinners/ClockLoader";
const ContentLoader = () => {
    return (
        <div className={'flex items-center justify-center z-50 absolute top-0 left-0 w-full h-full '}>
            <ClockLoader size={36} color={'#043785'} />
        </div>
    );
};

export default ContentLoader;