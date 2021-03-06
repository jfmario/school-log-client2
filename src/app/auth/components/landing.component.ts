
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../lib/auth.service';
import { AuthCheckAbstractComponent } from '../abstract/auth-check.abstract-component';
import { SchoolLogService } from '../../school-log/';

@Component ({
    moduleId: module.id,
    selector: 'auth-landing',
    templateUrl: '../static/html/landing.component.html'
})
export class LandingComponent extends AuthCheckAbstractComponent {

    constructor ( protected authService: AuthService, protected router: Router,
        private schoolLogService: SchoolLogService )
    {
        super ( authService, router );
    }

    ngOnInit ()
    {
        var self = this;
        this.schoolLogService.getChildren ( this.authService.getToken () )
            .then ( function ( data: any )
            {
                if ( self.schoolLogService.children.length == 0 )
                    self.router.navigate ( ['/students'] );
                else self.router.navigate ( [ '/query' ] );
            }).catch ( console.error );
    }
}
