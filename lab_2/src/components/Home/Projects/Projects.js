import React from 'react';
import './Projects.css';
import {Project01, Project02, Project03} from '../../../assets/images';

const Projects = () => (
    <div className="section projects">
        <div className="section-inner">
            <div className="projects-heading">
                <h2>View our projects</h2>
                <a href="#" className="label-small arrow-link">View More ⟶</a>
            </div>
            <div className="projects-gallery">
                <div className="main-gallery-item">
                    <img src={Project01} alt="Finsweet project"/>
                    <div className="main-gallery-item-info-wrap">
                        <div className="main-gallery-item-info">
                            <h6>Workhub office Webflow Webflow Design</h6>
                            <p className="text-semi-bold">Euismod faucibus turpis eu gravida mi. Pellentesque et
                                velit
                                aliquam</p>
                            <a href="#" className="text-semi-bold arrow-link">View project ⟶</a>
                        </div>
                    </div>
                </div>
                <div className="projects-gallery-secondary">
                    <div className="projects-gallery-item">
                        <img src={Project02} alt="Finsweet project"/>
                        <div className="projects-gallery-item-info-wrap">
                            <div className="projects-gallery-item-info">
                                <h6>Unisaas Website Design</h6>
                                <a href="#" className="text-semi-bold arrow-link">View portfolio ⟶</a>
                            </div>
                        </div>
                    </div>
                    <div className="projects-gallery-item">
                        <img src={Project03} alt="Finsweet project"/>
                        <div className="projects-gallery-item-info-wrap">
                            <div className="projects-gallery-item-info">
                                <h6>Another title</h6>
                                <a href="#" className="text-semi-bold arrow-link">View portfolio ⟶</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Projects;