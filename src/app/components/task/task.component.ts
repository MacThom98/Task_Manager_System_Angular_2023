import { Component } from '@angular/core';
import { Task } from 'src/app/interface/task';
import { TaskService } from 'src/app/services/task/task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  constructor(private navigation:Router,private taskServices: TaskService){}

  tasks: Task[] = [];

  ngOnInit(): void {
    this.taskServices.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;

    });
  }

  deleteConfirm(id:number){
    const res = confirm("Are you sure you want to delete?");
    if(res){
      this.taskServices.deleteTask(id).subscribe(() => {
        this.ngOnInit();
        this.navigation.navigate(['task']);
      });
    }
  }
}
