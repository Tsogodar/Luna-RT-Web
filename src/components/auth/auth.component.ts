import {Component} from '@angular/core';
import {SocketIOService} from "../../services/socketIO.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {

    loginInput: string;
    passwordInput: string;
    message: string = '';

    constructor(
        private socketIO: SocketIOService,
        private route: ActivatedRoute) {

        this.route.queryParams.subscribe(params => {
            switch (params.logout) {
                case 'true':
                    this.message = 'Pomyślnie wylogowano';
                    break;
                case 'restart':
                    this.message = 'Zrestartowano serwer';
                    break;
                case 'shutdown':
                    this.message = 'Wyłączono serwer';
                    break;
            }
        })

    }

    login() {
        let creds = {
            login: this.loginInput,
            password: this.passwordInput
        };
        this.socketIO.login(creds);
    }
}
