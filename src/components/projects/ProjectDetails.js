import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return ( 
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - {id}
                    </span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, sunt? Vero commodi eligendi id at velit, molestiae obcaecati accusamus ipsam, cupiditate magnam veritatis? Reiciendis officiis delectus placeat? Recusandae, voluptates! Eius.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by...</div>
                    <div>4 December, 9pm</div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectDetails;