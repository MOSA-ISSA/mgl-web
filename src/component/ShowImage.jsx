import React from 'react';

const ShowImage = ({sorce,style}) => {
    // console.log(sorce);
    // console.log(style);
    return (
        <div >
           <img
                // key={sorce}
                src={sorce|| null}
                style={style}
            /> 
        </div>
    );
}

export default ShowImage;
