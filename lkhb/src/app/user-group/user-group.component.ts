import { Component, Input } from '@angular/core';
import { UserGroup } from '../configuration/configuration.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-group',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-group.component.html',
  styleUrl: './user-group.component.css'
})
export class UserGroupComponent {
  @Input() userGroup!: UserGroup
}
