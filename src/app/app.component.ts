import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
serverElements:any = [];
newServerName:any ='';
newSeverContent:any = '';

onAddNewServer(){
  this.serverElements.push({
    type: "addServer",
    name: this.newServerName,
    content: this.newSeverContent
  });
}

onAddNewBluePrint(){
  this.serverElements.push({
    type: "bluePrintServer",
    name: this.newServerName,
    content: this.newSeverContent

  })
}

}
