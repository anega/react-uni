import React from 'react';
import {data} from '../../../data/projectsData';
import Project from "./Project";
import './Projects.css';

const Projects = () => (
    <div className="section projects">
        <div className="section-inner">
            <div className="projects-heading">
                <h2>View our projects</h2>
                <a href="/#" className="label-small arrow-link">View More ⟶</a>
            </div>
            <div className="projects-gallery">
                {data.map((project) => (
                    <Project key={project.id} project={project}/>
                ))}
            </div>
        </div>
    </div>
);

export default Projects;