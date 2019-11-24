import React from 'react';
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const imageChangeOnMouseOver = () => {

    return(
        <div>
            <ImageToggleOnMouseOver primaryImage="/static/speakers/bw/Speaker-187.jpg"
                                    secundaryImage="/static/speakers/Speaker-187.jpg"
                                    alt="" />
            <br/>
            <ImageToggleOnMouseOver primaryImage="/static/speakers/bw/Speaker-1124.jpg"
                                    secundaryImage="/static/speakers/Speaker-1124.jpg"
                                    alt="" />
        </div>
    );

};

export default imageChangeOnMouseOver