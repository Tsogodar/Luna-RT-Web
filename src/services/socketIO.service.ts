import {Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as socketIO from 'socket.io-client';

@Injectable()
export class SocketIOService implements OnInit {

    // url: string = 'http://192.168.10.7:3000';
    url: string = 'http://localhost:3000';
    conn=null;
    serverInfoResponse=null;
    usersInfoResponse=null;
    loginResponse=null;
    messageDeliveryResponse=null;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.conn = socketIO(this.url);
    }

    login(creds) {
        this.ngOnInit();
        this.conn.emit('login', creds);
        this.conn.on('loginStatus', (status) => {
            if (status.user) {
                this.router.navigate(['/dashboard/server']);
            } else{
                this.loginResponse=status.message;
            }
        });
    }

    logout() {
        this.conn.emit('logout');
        this.conn.on('logoutOk', (logout) => {
            this.router.navigate(['/'],{ queryParams: { logout: 'true'}});
        })
    }

    serverInfo(){
        this.conn.emit('serverInfo');
        this.conn.on('serverInfoStatus', (info) => {
            this.serverInfoResponse=info;
        })
    }

    restartServer(){
        this.conn.emit('serverRestart');
        this.conn.on('serverRestartStatus', (info) => {
            this.router.navigate(['/'],{ queryParams: { logout: 'restart'}});
        })
    }

    shutdownServer(){
        this.conn.emit('serverShutdown');
        this.conn.on('serverShutdownStatus', (info) => {
            this.router.navigate(['/'],{ queryParams: { logout: 'shutdown'}});
        })
    }

    usersInfo(){
        this.conn.emit('usersInfo');
        this.conn.on('usersInfoStatus', (info) => {
            this.usersInfoResponse=info;
        })
    }

    disconnectUserForce(id:string){
        this.conn.emit('userForceDisconnect',id);
    }

    sendMessage(id:string,message:string){
        this.conn.emit('message',id,message)
        this.conn.emit('messageDelivered');
        this.conn.on('messageDeliveredStatus', (info) => {
            this.messageDeliveryResponse=info.info;
        });
    }

}
