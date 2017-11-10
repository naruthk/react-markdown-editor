import React from 'react';

class Projects extends React.Component {
    render(props) {
        return (
            <div id="projects">
                <div class="container">
                    <h2>{this.props.title}</h2>
                </div>
            </div>
        )
    }
}

export default Projects;