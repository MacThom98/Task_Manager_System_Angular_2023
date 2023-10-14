import { Injectable } from '@angular/core';
import { Task } from 'src/app/interface/task';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http:HttpClient) { }

  url="http://localhost:3000/tasks";

  getAllTasks(): Observable<Task[]>{
    return this._http.get<Task[]>(this.url);
  }

  getTaskByID(id:number): Observable<Task>{
    return this._http.get<Task>(`${this.url}/${id}`);
  }

  createTask(task:Task): Observable<Task>{
    return this._http.post<Task>(this.url, task);
  }

  updateTask(task:Task): Observable<Task>{
    return this._http.put<Task>(`${this.url}/${task.id}`, task);
  }

  deleteTask(id:number): Observable<Task>{
    return this._http.delete<Task>(`${this.url}/${id}`);
  }

  
}
