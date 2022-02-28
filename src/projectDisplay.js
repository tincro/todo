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
       this.title = 'Projects'
   }

   diplayProjects() {
       const element = document.createElement('div');
       element.classList.add('project-display');
       element.id = 'projects-wrapper';

       const title = document.createElement('h1');
       title.innerText = this.title;
       element.appendChild(title);
   
       return element;
   }
   
   updateDisplay(projectList) {
       const wrapper = document.getElementById('projects-wrapper');
       
        projectList.forEach(project => {
            const projectBlock = document.createElement('div');
            const projectTitle = document.createElement('h2');
            projectTitle.innerText = project.title;
            projectBlock.appendChild(projectTitle);
            wrapper.appendChild(projectBlock);
            
        });
        return wrapper;
   }

   formDisplay() {
       const div = document.getElementById('projects-wrapper');
       const field = document.createElement('fieldset');
       const input = document.createElement('input');
       input.id = "project-input";
       field.appendChild(input);
       const btn = document.createElement('input');
       btn.type = 'button';
       btn.value = "New Project";
       btn.id = "project-btn";
       field.appendChild(btn);
       div.appendChild(field);
       return div;
   }
}

export default ProjectDisplay;
