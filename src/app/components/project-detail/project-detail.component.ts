import { Component } from '@angular/core';
import { Project } from 'src/app/interface/project';
import { ProjectService } from 'src/app/services/project/project.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
constructor(private projectService: ProjectService, private route:ActivatedRoute, private navigation:Router){}

project = <Project>{};

  ngOnInit() {
    const idProject:number = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getProjectByID(idProject).subscribe(project => {
      this.project = project;
    });
  }


}
