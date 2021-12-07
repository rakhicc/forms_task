import React from 'react';

const Notes = ({firstname}) => {
    return (
        <div className="notes">
           <p>{firstname}</p> 
        </div>
    );
};

export default Notes;