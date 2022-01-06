import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: string = "12123";
  private serverStatus: string = "online";

  getServerStatus(): string {
    return this.serverStatus;
  }
}