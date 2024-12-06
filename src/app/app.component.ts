import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from "./cockpit/cockpit.component";
import { ServerElementComponent } from "./server-element/server-element.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, CockpitComponent, ServerElementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  serverElements:any = [{type:"addServer", name:"Test Server", content:"Just a Test"}];

  onServerAdded(serverData:{serverName:string, serverContent:string} | any){
    this.serverElements.push({
      type: "addServer",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(blueprintData:{serverName:string, serverContent:string} | any){
    this.serverElements.push({
      type: "bluePrintServer",
      name: blueprintData.serverName,
      content: blueprintData.serverContent

    })
  }
}
