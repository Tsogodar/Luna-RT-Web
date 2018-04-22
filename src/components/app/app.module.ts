import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";

//Material components
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule, MatDialogModule, MatTableModule} from "@angular/material";

//UI components
import {NavbarComponent} from "../ui/navbar/navbar.component";
import {SidebarComponent} from "../ui/sidebar/sidebar.component";

import {AppComponent} from './app.component';
import {AuthComponent} from "../auth/auth.component";
import {ServerComponent} from "../dashboard/server.component";
import {MessageComponent} from "../dashboard/Message/message.component";

//Services
import {SocketIOService} from "../../services/socketIO.service";
import {UsersComponent} from "../dashboard/users.component";


const appRoutes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'dashboard/server', component: ServerComponent },
    { path: 'dashboard/users', component: UsersComponent },
    { path: 'logout', component: AuthComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        ServerComponent,
        UsersComponent,
        NavbarComponent,
        SidebarComponent,
        MessageComponent
    ],
    entryComponents:[MessageComponent],

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        MatTableModule,
        MatDialogModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        SocketIOService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
