import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/interface/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  constructor(private _projectService: ProjectService, private route:Router){}

  projects: Project[] = [];

  ngOnInit(): void {
    this._projectService.getAllProjects().subscribe(projects => this.projects = projects);
    console.log(this.projects);
  }

  deleteConfirm(id:number){
    const res = confirm('Are you sure you want to delete this project?');
    console.log(res);
    if(res){
    this._projectService.deleteProject(id).subscribe(() => this.ngOnInit());
    this.route.navigate(['project']);
    window.location.reload();
  }else{
      return;
    }
  }
}
