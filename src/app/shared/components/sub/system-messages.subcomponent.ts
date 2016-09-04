
import { Component, DoCheck } from '@angular/core';
import { SystemMessagesService } from '../../lib/system-messages.service';
import { SystemMessage } from '../../models/system-message.model';

@Component({
    moduleId: module.id,
    selector: 'sub-shared-system-messages',
    templateUrl: '../../static/html/sub/system-messages.subcomponent.html'
})
export class SystemMessagesSubcomponent implements DoCheck {

    public message: SystemMessage = null;

    constructor ( private systemMessagesService: SystemMessagesService ) {}

    ngDoCheck ()
    {
        this.message = this.systemMessagesService.lastMessage;
    }
}
