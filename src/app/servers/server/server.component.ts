import {
  Component,
  effect,
  EventEmitter,
  input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  @Output() removeServer = new EventEmitter<string>();

  serverName = input.required<string, string>({
    transform: (value: string) => value.trim(),
  });
  serverId = input<string>(Math.floor(Math.random() * 100).toString());
  serverStatus: boolean;

  constructor() {
    this.serverStatus = Math.random() > 0.5;
    console.log('constrctor:', this.serverId());

    effect(() => {
      console.log('effect:', this.serverId());
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit:', this.serverId());
  }

  onClickRemoveBtn() {
    return this.removeServer.emit(this.serverId());
  }
}
