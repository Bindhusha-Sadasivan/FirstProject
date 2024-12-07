import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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
  // public newSeverContent:any = '';
  @ViewChild('serverNameInput') serverName!:ElementRef<any>;
  @ViewChild('serverContentInput') serverContent!:ElementRef<any>;


  //1. Two way binding using ngModel

  // onAddNewServer(){
  //   this.serverAdded.emit({serverName:this.newServerName, serverContent:this.newSeverContent});
  //   this.serverAdded.subscribe((data) => console.log('Emitted Data:', data));
  // }

  //2. Using Template reference

  // onAddNewServer(serverNameInput:HTMLInputElement, serverContentInput:HTMLInputElement){
  //   console.log(serverNameInput)
  //   this.serverAdded.emit({serverName:serverNameInput.value, serverContent:serverContentInput.value});
  //   this.serverAdded.subscribe((data) => console.log('Emitted Data:', data));
  // }

  //3. using viewChild - changing 2 input to viewChild

  // onAddNewServer(serverContentInput:HTMLInputElement){
  //   console.log(this.serverName);
  //   console.log(serverContentInput);
  //   this.serverAdded.emit({serverName:this.serverName.nativeElement.value, serverContent:serverContentInput.value});
  //   this.serverAdded.subscribe((data) => console.log('Emitted Data:', data));
  // }


  //4. using viewChild - changing 2 input to viewChild

  onAddNewServer(){
    console.log(this.serverName);
    console.log(this.serverContent);
    this.serverAdded.emit({serverName:this.serverName.nativeElement.value, serverContent:this.serverContent.nativeElement.value});
    this.serverAdded.subscribe((data) => console.log('Emitted Data:', data));
  }

    //1. Two way binding using ngModel

  // onAddNewBluePrint(){
  //   this.bluePrintAdded.emit({serverName:this.newServerName, serverContent:this.newSeverContent});
  //   this.bluePrintAdded.subscribe(data => console.log('Emitted Data:', data))
  // }

  //2. Using Template reference

  // onAddNewBluePrint(serverNameInput:HTMLInputElement, serverContentInput:HTMLInputElement){
  //   this.bluePrintAdded.emit({serverName:serverNameInput.value, serverContent:serverContentInput.value});
  //   this.bluePrintAdded.subscribe(data => console.log('Emitted Data:', data))
  // }

  //3. using viewChild - changing 1 input to viewChild

  // onAddNewBluePrint(serverContentInput:HTMLInputElement){
  //   this.bluePrintAdded.emit({serverName:this.serverName.nativeElement.value, serverContent:serverContentInput.value});
  //   this.bluePrintAdded.subscribe(data => console.log('Emitted Data:', data))
  // }

  //4. using viewChild - changing 2 input to viewChild

  onAddNewBluePrint(){
    this.bluePrintAdded.emit({serverName:this.serverName.nativeElement.value, serverContent:this.serverContent.nativeElement.value});
    this.bluePrintAdded.subscribe(data => console.log('Emitted Data:', data))
  }
}
