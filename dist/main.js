(()=>{"use strict";const t=new class{constructor(){this.projectList=[],this.currentProject=null}addProject(t){this.projectList.push(t)}setCurrentProject(t){this.currentProject=t}getCurrentProject(){return this.currentProject}},e=new class{constructor(t){this.title=t,this.taskList=[]}addTask(t){this.taskList.push(t)}getTaskList(){return this.taskList}}("Today");t.addProject(e),t.setCurrentProject(e);const s=new class{constructor(t,e,s){this.title=t,this.description=e,this.priority=s}changePriority(t){this.priority=t}}("Coffee","Get some coffee for the day",3);e.addTask(s);const r=document.getElementById("content"),n=new class{constructor(){this.title="CurrentProject"}show(){const t=document.createElement("div"),e=document.createElement("h1");e.innerText=this.title,t.appendChild(e);const s=document.createElement("ul");return s.id="taskList",t.appendChild(s),t}populateTasks(t){const e=document.getElementById("taskList");return t.forEach((t=>{let s=document.createElement("li");s.innerText=t.title,e.appendChild(s)})),e}setCurrentProjectTitle(t){this.title=t.title}};n.setCurrentProjectTitle(t.getCurrentProject()),r.appendChild(n.show()),n.populateTasks(e.taskList)})();