import { Component, NgModule, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  allowAddServer: boolean = false;
  serverAddStatus: string = 'server not added';
  serverName: string = '';
  serverAdded: boolean = false;

  constructor() {
    setTimeout(() => (this.allowAddServer = true), 2000);
  }

  ngOnInit(): void {}

  onAddServer() {
    this.serverAdded = true;
    this.serverAddStatus = 'server added';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
