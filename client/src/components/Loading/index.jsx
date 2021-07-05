import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

export const Loading = () => {
    return (
        <div >
            <h1> LOADING <BeatLoader size={30} /></h1>
        </div>
    );
};

export default Loading;