import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.scss'
})
export class ServerElementComponent {
  @Input('serverElement') element!:{type:string, name:string, content:string}
}
