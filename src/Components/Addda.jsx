import React from 'react';
import { useParams } from 'react-router-dom';

const Addda = () => {
    const {id} = useParams()
    return (
        <div>
            hello {id}
        </div>
    );
};

export default Addda;