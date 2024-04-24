import { v4 as uuidv4 } from 'uuid';
import { Component } from '@angular/core';

type Server = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.scss',
})
export class ServersComponent {
  canAddServer: boolean = false;
  isServerAdded: boolean = false;
  isServerAddedTimeoutToken: NodeJS.Timeout;
  servers: Server[] = Array(5)
    .fill('')
    .map((_, index) => ({
      id: uuidv4(),
      name: `server ${index + 1}`,
    }));
  serverInput: string = '';

  constructor() {
    setTimeout(() => (this.canAddServer = true), 64);
  }

  addServer(): void {
    clearTimeout(this.isServerAddedTimeoutToken);
    this.servers.push({
      id: uuidv4(),
      name: this.serverInput,
    });
    this.serverInput = '';
    // change button status
    this.isServerAdded = true;
    // after a timeout set status back to default
    this.isServerAddedTimeoutToken = setTimeout(
      () => (this.isServerAdded = false),
      1989,
    );
  }

  getLastServerName(): string {
    return this.servers.at(-1).name || '';
  }

  onInputKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.serverInput.trim()) {
      this.addServer();
    }
  }

  onRemoveServer(targetServerId: string): void {
    this.servers = this.servers.filter(({ id }) => id !== targetServerId);
  }
}
