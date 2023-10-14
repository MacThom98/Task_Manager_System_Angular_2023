import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { FooterComponent } from './components/footer/footer.component'
import { AsideComponent } from './components/aside/aside.component'
import { ProjectComponent } from './components/project/project.component'
import { ProjectDetailComponent } from './components/project-detail/project-detail.component'
import { ProjectProgressComponent } from './components/project-progress/project-progress.component'
import { TaskComponent } from './components/task/task.component'
import { UserComponent } from './components/user/user.component'
import { UserDetailComponent } from './components/user-detail/user-detail.component'
import { ReportComponent } from './components/report/report.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ProjectAddComponent } from './components/project-add/project-add.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AsideComponent,
    ProjectComponent,
    ProjectDetailComponent,
    ProjectProgressComponent,
    TaskComponent,
    UserComponent,
    UserDetailComponent,
    ReportComponent,
    ProjectEditComponent,
    ProjectAddComponent,
    DashboardComponent,
    UserEditComponent,
    UserAddComponent,
    TaskEditComponent,
    TaskAddComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
