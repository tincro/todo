// A class to display the projects panel

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
       this.title = 'Projects';
       this.sectionWrapperId = 'project-display-wrapper';
       this.projectsWrapperId = 'projects-wrapper';
   }

   diplayProjects() {
       const element = document.createElement('div');
       element.classList.add('project-display');
       element.id = this.sectionWrapperId;

       const title = document.createElement('h1');
       title.innerText = this.title;
       element.appendChild(title);

       const wrapper = document.createElement('div');
       wrapper.id = this.projectsWrapperId;
       element.appendChild(wrapper);

       return element;
   }
   
   updateDisplay(projectList) {
       const wrapper = document.getElementById(this.projectsWrapperId);
       
        projectList.forEach(project => {
            const projectBlock = document.createElement('div');
            projectBlock.classList.add('project-item');
            const projectTitle = document.createElement('h2');
            projectTitle.innerText = project.title;
            projectBlock.appendChild(projectTitle);
            wrapper.appendChild(projectBlock);
            
        });
        return wrapper;
   }

   formDisplay() {
       const div = document.getElementById(this.sectionWrapperId);
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

   reset() {
       // grab all nodes
       const div = document.getElementById(this.projectsWrapperId);
       div.innerHTML = '';
       return div;
   }
}

export default ProjectDisplay;
