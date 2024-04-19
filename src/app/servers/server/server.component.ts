import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  @Output() removeServer = new EventEmitter<string>();
  @Input({
    required: true,
    transform: (value: string) => value.trim(),
  })
  serverName: string;
  @Input() serverId: string;
  serverStatus: boolean;

  constructor() {
    this.serverName = '';
    this.serverId = Math.floor(Math.random() * 100).toString();
    this.serverStatus = Math.random() > 0.5;
    console.log('constrctor:', this.serverId);
  }

  ngOnInit(): void {
    console.log('ngOnInit:', this.serverId);
  }

  onClickRemoveBtn() {
    return this.removeServer.emit(this.serverId);
  }
}
