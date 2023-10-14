import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app/interface/project';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http:HttpClient) { }

  url="http://localhost:3000/projects";

  getAllProjects(): Observable<Project[]>{
    return this._http.get<Project[]>(this.url);
  }

  getProjectByID(id:number): Observable<Project>{
    return this._http.get<Project>(`${this.url}/${id}`);
  }

  createProject(project:Project): Observable<Project>{
    return this._http.post<Project>(this.url, project);
  }

  updateProject(project:Project): Observable<Project>{
    return this._http.put<Project>(`${this.url}/${project.id}`, project);
  }

  deleteProject(id:number): Observable<Project>{
    return this._http.delete<Project>(`${this.url}/${id}`);
  }
}
