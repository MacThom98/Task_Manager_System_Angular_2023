import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectAddComponent } from './components/project-add/project-add.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TaskComponent } from './components/task/task.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'', component: DashboardComponent},

  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},


  { path: 'project', component: ProjectComponent },
  { path: 'project/add', component: ProjectAddComponent},
  { path: 'project/detail/:id', component: ProjectDetailComponent },
  { path: 'project/edit/:id', component: ProjectEditComponent },
  
  { path: 'user', component: UserComponent },
  { path: 'user/add', component: UserAddComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'user/edit/:id', component: UserEditComponent },

  {path:'task', component: TaskComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
