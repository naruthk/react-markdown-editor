import React from 'react';
import PropTypes from 'prop-types';

const PromotionBoxMinor = (props) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-6">
            <p className="focus">{props.title}</p>
            <p className="content">{props.content}</p>
        </div>
    )
}

PromotionBoxMinor.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default PromotionBoxMinor;