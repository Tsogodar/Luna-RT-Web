import { Component } from '@angular/core';
import {SocketIOService} from "../../../services/socketIO.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private socketIO:SocketIOService){}

  logout(){
    this.socketIO.logout();
  }
}
