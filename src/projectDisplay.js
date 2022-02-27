class ProjectDisplay {
    /*
        <div id="projects-wrapper">
            <h1>Projects</h1>
            <div>
                <h2>Today</h2>
            </div>

        </div>
    */
   constructor(){
       this.title = "Projects"
   }

   diplayProjects() {
       // populate the display to show projects
       const element = document.createElement('div');
       element.id = "projects-wrapper";

       const title = document.createElement('h1');
       title.innerText = this.title;
       element.appendChild(title);
   
       return element;
   }
   
   addProjectToDisplay(project) {
        const projectBlock = document.createElement('div');
        const projectTitle = document.createElement('h2');
        projectTitle.innerText = project.title;
        projectBlock.appendChild(projectTitle);
        
        const wrapper = document.getElementById('projects-wrapper');
        wrapper.appendChild(projectBlock);
        
        return wrapper;
   }
}

export default ProjectDisplay;
