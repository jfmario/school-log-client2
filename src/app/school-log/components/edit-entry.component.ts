
import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { AuthCheckAbstractComponent } from '../../auth/abstract/auth-check.abstract-component';
import { AuthService } from '../../auth/lib/auth.service';
import { EditEntryService } from '../lib/edit-entry.service';
import { SchoolLogService } from '../lib/school-log.service';
import { Child } from '../models/child.model';
import { Entry } from '../models/entry.model';

@Component ({
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES],
    selector: 'school-log-edit-entry',
    templateUrl: '../static/html/edit-entry.component.html'
})
export class EditEntryComponent extends AuthCheckAbstractComponent implements DoCheck {

    public entry: Entry;
    public students: Child[] = [];

    constructor ( protected authService: AuthService, protected router: Router,
        private editEntryService: EditEntryService,
        private schoolLogService: SchoolLogService )
    {
        super ( authService, router );
    }

    cancel () { this.router.navigate ( ['/query'] ); }
    saveEntry ()
    {
        var self = this;
        this.schoolLogService.updateEntry ( this.authService.getToken (),
            this.entry._id, this.entry ).then ( function ()
            {
                self.router.navigate ( ['/query'] );
            });
    }

    ngDoCheck ()
    {
        this.entry = this.editEntryService.currentEntry;
        this.students = this.schoolLogService.children;
    }
}
