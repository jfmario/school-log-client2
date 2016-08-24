
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
    selector: 'school-log-edit-student',
    templateUrl: '../static/html/edit-student.component.html'
})
export class EditStudentComponent extends AuthCheckAbstractComponent implements DoCheck {

    public student: Child;

    constructor ( protected authService: AuthService, protected router: Router,
        private editStudentService: EditStudentService,
        private schoolLogService: SchoolLogService )
    {
        super ( authService, router );
    }

    cancel () { this.router.navigate ( ['students'] ); }
    saveStudent ()
    {
        var self = this;
        this.schoolLogService.updateChild ( this.authService.getToken (),
            this.student._id, this.student ).then ( function ()
            {
                self.schoolLogService.getChildren (
                    self.authService.getToken () );
                self.router.navigate ( ['/students'] );
            });
    }

    ngDoCheck ()
    {
        this.student = this.editStudentService.currentStudent;
    }
}
