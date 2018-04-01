import {Component} from '@angular/core';
import {SocketIOService} from "../../services/socketIO.service";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {

    responseServerInfo=null;

    constructor(private socketIO: SocketIOService) {
        setInterval(()=>{
            this.socketIO.serverInfo();
            this.responseServerInfo=socketIO.serverInfoResponse;
        },1000)
    }

    restartServer(){
        this.socketIO.restartServer();
    }

    shutdownServer(){
        this.socketIO.shutdownServer();
    }

}
