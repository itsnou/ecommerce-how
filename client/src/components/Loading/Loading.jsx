import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

export const Loading = () => {
    return (
        <div >
            <PropagateLoader size={30} />
        </div>
    );
};

export default Loading;