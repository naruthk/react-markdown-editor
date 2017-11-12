import React from 'react';
import PropTypes from 'prop-types';

const PromotionBoxMain = (props) => {
    return (
        <div className="col-sm-6 col-md-6 col-md-6 text-center">
            <div className="margin-t-20"></div>
            <div className="image-statistics"></div>
            <div className="margin-t-20"></div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <div className="margin-t-60"></div>
        </div>
    )
}

PromotionBoxMain.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default PromotionBoxMain;