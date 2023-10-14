import { Component } from '@angular/core';
import { Project } from 'src/app/interface/project';
import { ProjectService } from 'src/app/services/project/project.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-project-progress',
  templateUrl: './project-progress.component.html',
  styleUrls: ['./project-progress.component.css']
})
export class ProjectProgressComponent {
  constructor(private projectService: ProjectService){}

  @Input() projects: Project[] = [];

  ngOnInit(){
  }

}
