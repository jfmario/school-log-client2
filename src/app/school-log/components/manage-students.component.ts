
import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { AuthCheckAbstractComponent } from '../../auth/abstract/auth-check.abstract-component';
import { AuthService } from '../../auth/lib/auth.service';
import { EditStudentService } from '../lib/edit-student.service';
import { SchoolLogService } from '../lib/school-log.service';
import { Child } from '../models/child.model';

@Component ({
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES],
    selector: 'school-log-manage-students',
    templateUrl: '../static/html/manage-students.component.html'
})
export class ManageStudentsComponent extends AuthCheckAbstractComponent implements DoCheck {

    public children: Child[] = [];

    constructor ( protected authService: AuthService, protected router: Router,
        private editStudentService: EditStudentService,
        private schoolLogService: SchoolLogService )
    {
        super ( authService, router );
    }

    edit ( student: Child )
    {
        this.editStudentService.currentStudent = student;
        this.router.navigate ( ['/edit-student'] );
    }

    delete ( studentName: String, studentId: String )
    {
        var verify = confirm ( "Delete " + studentName + '?' );
        if ( verify )
            this.schoolLogService.deleteChild (
                this.authService.getToken (), studentId );
        else {}
    }

    ngOnInit ()
    {
        console.log ( 'init' );
        var self = this;
        this.schoolLogService.getChildren ( this.authService.getToken () )
            .then ( function ( data: any )
            {
            }).catch ( console.error );
    }
    ngDoCheck ()
    {
        this.children = this.schoolLogService.children;
    }
}
