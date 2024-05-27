import { Component, Input } from '@angular/core';
import { RootSec } from '../configuration/configuration.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root-sec-object',
  standalone: true,
  imports: [NgFor],
  templateUrl: './root-sec-object.component.html',
  styleUrl: './root-sec-object.component.css'
})
export class RootSecObjectComponent {
  @Input() secObj!: RootSec

}
