import { Component, Input } from '@angular/core';
import { Server } from '../configuration/configuration.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [NgFor],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  @Input() servers!: Server[]
}
