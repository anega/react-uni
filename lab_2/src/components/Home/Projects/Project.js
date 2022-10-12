import React from 'react';
import './Project.css';

const Project = ({project}) => (
    <div className={`gallery-item ${project.isLeading ? 'main-gallery-item' : ''}`}>
        <img src={project.image} alt={`Finsweet ${project.name}`}/>
        <div className="info-wrap">
            <div className="info-item">
                <h6>{project.name}</h6>
                {project.description ? <p className="text-semi-bold">{project.description}</p> : ''}
                <a href={project.link.href} className="text-semi-bold arrow-link">{project.link.title}</a>
            </div>
        </div>
    </div>
);

export default Project;