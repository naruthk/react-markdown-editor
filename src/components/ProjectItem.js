import React from 'react';

const ProjectItem = (props) => {
    const secondSpan = props.span2;
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-4">
            <a href={props.url} title={props.title} target="_blank">
                <div className="tile">
                    <img className="img-responsive" src={props.img} alt={props.title} />
                    <p className="title">{props.title} <span className={props.span1}>{props.span1}</span>{secondSpan.length > 0 && 
                    <span className={props.span2}>{props.span2}</span>}</p>
                    <p>{props.description}</p>
                </div>
            </a>
        </div>
    )
}

export default ProjectItem;