import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  servers:any = [];

  onAddServer(){
    this.servers.push("Add another server");
  }

  onRemoveServer(i:any){
    this.servers.splice(i,1)
  }

}
