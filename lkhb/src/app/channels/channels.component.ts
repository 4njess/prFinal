import { Component, Input } from '@angular/core';
import { Channel, RootSec } from '../configuration/configuration.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [NgFor],
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.css'
})
export class ChannelsComponent {
  @Input() channels!: Channel[]

}
