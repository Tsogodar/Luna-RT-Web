import {Component} from '@angular/core';
import {SocketIOService} from "../../services/socketIO.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent {

    responseUsersInfo=null;

    constructor(private socketIO: SocketIOService) {
        setInterval(() => {
            this.socketIO.usersInfo();
            this.responseUsersInfo=socketIO.usersInfoResponse;
        }, 1000);
    }

    disconnectUser(id:string){
        this.socketIO.disconnectUser(id);
    }

}
