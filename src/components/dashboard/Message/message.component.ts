import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SocketIOService} from "../../../services/socketIO.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent {

    userId: string;
    message:string;
    delivery:string

    constructor(
        private socketIO: SocketIOService,
        public dialogRef: MatDialogRef<MessageComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.userId = data.userId;
    }

    send(){
        this.delivery='';
        this.socketIO.sendMessage(this.userId,this.message);
        this.delivery=this.socketIO.messageDeliveryResponse;
    }

}
