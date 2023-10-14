import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/interface/project';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private _projectService: ProjectService){}

projects: Project[] = [];

ngOnInit(){
  this._projectService.getAllProjects().subscribe(projects => {
    this.projects = projects;
  });
}

}
