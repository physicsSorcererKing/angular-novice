import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  serverId: number;
  serverStatus: string;

  constructor() {
    this.serverId = Math.floor(Math.random() * 100);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
}
