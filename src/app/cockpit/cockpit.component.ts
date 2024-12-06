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

  @Output('serverCreated') serverAdded = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('blueprintCreated') bluePrintAdded = new EventEmitter<{serverName:string, serverContent:string}>();
  public newServerName:any ='';
  public newSeverContent:any = '';

  onAddNewServer(){
    this.serverAdded.emit({serverName:this.newServerName, serverContent:this.newSeverContent});
    this.serverAdded.subscribe((data) => console.log('Emitted Data:', data));
  }

  onAddNewBluePrint(){
    this.bluePrintAdded.emit({serverName:this.newServerName, serverContent:this.newSeverContent});
    this.bluePrintAdded.subscribe(data => console.log('Emitted Data:', data))
  }
}
