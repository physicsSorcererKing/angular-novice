import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  @Output() removeServer = new EventEmitter<string>();
  @Input() serverName: string;
  @Input() serverId: string;
  serverStatus: boolean;

  onClickRemoveBtn() {
    return this.removeServer.emit(this.serverId);
  }

  constructor() {
    this.serverName = '';
    this.serverId = Math.floor(Math.random() * 100).toString();
    this.serverStatus = Math.random() > 0.5;
  }
}
