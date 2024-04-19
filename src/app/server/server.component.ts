import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  @Input() serverName: string;
  @Input() serverId: string;
  serverStatus: boolean;

  constructor() {
    this.serverName = '';
    this.serverId = Math.floor(Math.random() * 100).toString();
    this.serverStatus = Math.random() > 0.5;
  }
}
