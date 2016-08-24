import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from
    '@angular/common';
import { AppComponent, environment, appRouterProviders } from './app/';
import { AuthService } from './app/auth/';
import { LoggerService } from './app/shared/';
import { EditEntryService, EditStudentService, SchoolLogService } from
    './app/school-log/';

if (environment.production) {
  enableProdMode();
}

bootstrap( AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    provide ( LocationStrategy, { useClass: HashLocationStrategy} ),
    // { provide: AuthService },
    { provide: EditEntryService },
    { provide: EditStudentService },
    // { provide: SchoolLogService },
    { provide: LoggerService }
]);
