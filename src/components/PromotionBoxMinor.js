import React from 'react';

const PromotionBoxMinor = (props) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-6">
            <p className="focus">{props.title}</p>
            <p className="content">{props.content}</p>
        </div>
    )
}

export default PromotionBoxMinor;