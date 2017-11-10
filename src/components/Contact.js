import React from 'react';

const Contact = (props) => {
    const emailAddress = "mailto:" + props.email;
    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-md-6 text-center">
                        <div className="image-contact"></div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-md-6">
                        <h2>{props.title}</h2>
                        <p>{props.statement}</p>
                        <p><a href={emailAddress}>{props.email}</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;