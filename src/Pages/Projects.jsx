import React from 'react';
import Project from '../Components/Project';


function Projects () {
    return (
        <div>
            <h1>My Projects</h1>
            <div class="project-container">
                <Project 
                    title={"Project 1"}
                    image={'./gabi-repaska-9OGBjr3fo7E-unsplash.jpg'}
                />
                <Project 
                    title={"Project 2"}
                    image={"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
                />
                <Project 
                    title={"Project 3"}
                    image={"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
                />
            </div>
        </div>
    )
}

export default Projects;