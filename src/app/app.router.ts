
import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent, LandingComponent, LoginComponent, LogoutComponent,
     RegisterComponent }
    from './auth/';
/* import { AboutComponent, EditEntryComponent, EditStudentComponent,
    ManageStudentsComponent, NewStudentComponent, QueryComponent }
    from './school-log/'; */
    import { AboutComponent } from './school-log/components/about.component';
    import { EditEntryComponent } from './school-log/components/edit-entry.component';
    import { EditStudentComponent } from './school-log/components/edit-student.component';
    import { ManageStudentsComponent } from './school-log/components/manage-students.component';
    import { NewStudentComponent } from './school-log/components/new-student.component';
    import { QueryComponent } from './school-log/components/query.component';

const routes: RouterConfig = [
    {
        component: AuthComponent,
        path: ''
    },
    // main application
    // the main path is where all logins will be redirected
    {
        component: LandingComponent,
        path: 'main'
    },
    {
        component: ManageStudentsComponent,
        path: 'students'
    },
    {
        component: EditStudentComponent,
        path: 'edit-student'
    },
    {
        component: NewStudentComponent,
        path: 'newstudent'
    },
    {
        component: QueryComponent,
        path: 'query'
    },
    {
        component: EditEntryComponent,
        path: 'edit-entry'
    },
    {
        component: AboutComponent,
        path: 'about'
    },
    // authentication
    {
        component: AuthComponent,
        path: 'auth'
    },
    {
        component: LoginComponent,
        path: 'login'
    },
    {
        component: LogoutComponent,
        path: 'logout'
    },
    {
        component: RegisterComponent,
        path: 'register'
    }
];

export const appRouterProviders = [
    provideRouter ( routes )
];
