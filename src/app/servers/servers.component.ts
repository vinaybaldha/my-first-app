import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  serverCreationStatus = 'No server created';
  allowNewServer = false;
  serverName = '';
  server = false;
  servers = ['temp1', 'temp2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.server = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server created and name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    this.server = true;
  }
}
