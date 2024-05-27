import { Component, Input } from '@angular/core';
import { RtspServerInfo } from '../configuration/configuration.component';

@Component({
  selector: 'app-rttp-server-info',
  standalone: true,
  imports: [],
  templateUrl: './rttp-server-info.component.html',
  styleUrl: './rttp-server-info.component.css'
})
export class RttpServerInfoComponent {
  @Input() rtspInfo!: RtspServerInfo
}
