import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {

  allowAddServer: boolean = false;

  constructor() {
    setTimeout(()=> this.allowAddServer = true, 2000);
  }

  ngOnInit(): void {
  }

}