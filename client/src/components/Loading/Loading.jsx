import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
    return (
        <div >
            <PropagateLoader size={30} />
        </div>
    );
};

export default Loading;