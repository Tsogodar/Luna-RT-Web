import {Component} from '@angular/core';
import {SocketIOService} from "../../services/socketIO.service";
import {MatDialog, MatDialogRef} from "@angular/material";
import {MessageComponent} from "./Message/message.component";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent {

    responseUsersInfo=null;
    messageDeliveryInfo=null;
    reservationsDialogRef: MatDialogRef<MessageComponent>;

    constructor(private socketIO: SocketIOService,
                private dialog: MatDialog) {
        setInterval(() => {
            this.socketIO.usersInfo();
            this.responseUsersInfo=socketIO.usersInfoResponse;
        }, 1000);
    }

    disconnectUserForce(id:string){
        this.socketIO.disconnectUserForce(id);
    }

    sendPW(id:string) {
        this.reservationsDialogRef = this.dialog.open(MessageComponent,{
            data:{
                userId:id,
                delivery:this.messageDeliveryInfo
            }
        });
    }

}
