import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.scss',
})
export class ServersComponent {
  canAddServer: boolean = false;
  isServerAdded: boolean = false;
  isServerAddedTimeoutToken: NodeJS.Timeout;
  servers: number = 2;
  serverInput: string = '';
  newServerName: string = '';

  constructor() {
    setTimeout(() => (this.canAddServer = true), 64);
  }

  addServer(): void {
    clearTimeout(this.isServerAddedTimeoutToken);
    this.newServerName = this.serverInput;
    this.serverInput = '';
    // add a server
    ++this.servers;
    // change button status
    this.isServerAdded = true;
    // after a timeout set status back to default
    this.isServerAddedTimeoutToken = setTimeout(
      () => (this.isServerAdded = false),
      1989,
    );
  }
}
