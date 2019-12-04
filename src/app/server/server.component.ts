import { Component } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [' .online { color: white;}']
})

export class ServerComponent{
    serverId = 10;
    private serverStatus='offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor(){
      return this.serverStatus === 'online' ? 'green' : 'red';
    }
}