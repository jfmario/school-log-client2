
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCheckAbstractComponent } from '../../auth/abstract/auth-check.abstract-component';
import { AuthService } from '../../auth/lib/auth.service';

@Component({
    moduleId: module.id,
    selector: 'school-log-about',
    templateUrl: '../static/html/about.component.html'
})
export class AboutComponent extends AuthCheckAbstractComponent {
    constructor ( protected authService: AuthService, protected router: Router )
    {
        super ( authService, router );
    }
};
