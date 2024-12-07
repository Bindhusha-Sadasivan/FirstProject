import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cockpit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.scss'
})
export class CockpitComponent {

  @Output('serverCreated') serverAdded = new EventEmitter<{serverName:any, serverContent:string}>();
  @Output('blueprintCreated') bluePrintAdded = new EventEmitter<{serverName:any, serverContent:string}>();
  // public newServerName:any ='';
  public newSeverContent:any = '';

  // onAddNewServer(){
  //   this.serverAdded.emit({serverName:this.newServerName, serverContent:this.newSeverContent});
  //   this.serverAdded.subscribe((data) => console.log('Emitted Data:', data));
  // }

  onAddNewServer(serverNameInput:HTMLInputElement, serverContentInput:HTMLInputElement){
    console.log(serverNameInput)
    this.serverAdded.emit({serverName:serverNameInput.value, serverContent:serverContentInput.value});
    this.serverAdded.subscribe((data) => console.log('Emitted Data:', data));
  }

  // onAddNewBluePrint(){
  //   this.bluePrintAdded.emit({serverName:this.newServerName, serverContent:this.newSeverContent});
  //   this.bluePrintAdded.subscribe(data => console.log('Emitted Data:', data))
  // }

  onAddNewBluePrint(serverNameInput:HTMLInputElement, serverContentInput:HTMLInputElement){
    this.bluePrintAdded.emit({serverName:serverNameInput.value, serverContent:serverContentInput.value});
    this.bluePrintAdded.subscribe(data => console.log('Emitted Data:', data))
  }
}
