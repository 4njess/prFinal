import { Component, Input } from '@angular/core';
import { MobileServerInfo, Resolution } from '../configuration/configuration.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-mobile-server-info',
  standalone: true,
  imports: [NgFor],
  templateUrl: './mobile-server-info.component.html',
  styleUrl: './mobile-server-info.component.css'
})
export class MobileServerInfoComponent {
  @Input() serverInfo!: MobileServerInfo
}
