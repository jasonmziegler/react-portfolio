import React from 'react';
import PROJECTS from '../data/projects';

const Project = props => {
    const { title, image, description, link } = props.project;
    return (
        <div style={{ display: 'inline-block', margin: '10px'}}>
            <h3>{title}</h3>
            <img src={image} alt={title} style={{ width: 200, height: 120}}/>
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    )
}


const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        { PROJECTS.map(project => (
                <Project key={project.id} project={project} />
            ))
        }
    </div>
)
    

export default Projects;