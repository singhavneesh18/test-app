import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import  {WarningComponent} from './warning/warning.component';
import {AttributeWayComponent} from './attributeway/attributeway.component';
import {ClassWayComponent } from './classway/classway.component';

@NgModule({
  declarations: [
    AppComponent, ServerComponent, ServersComponent, WarningComponent, AttributeWayComponent, ClassWayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
