import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Configuration, ConfigurationComponent } from './configuration/configuration.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FetchBackend } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConfigurationComponent, HttpClientModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppComponent {
  url = 'http://demo.macroscop.com/configex?responsetype=json'
  token = 'ZGVtb2xvZ2luOjc1NTgwNjU2YTM5NDI5MjQ2MGViYjRiMDM2ZWJlYWYx'
  options = {
    headers: {
      'authorization': this.token
    }
  }
  public configuration!: Configuration;


  constructor(private http: HttpClient) {
    this.http.get<Configuration>(this.url, this.options).subscribe({
      next: (data: any) => (
        console.log(data),
        this.configuration = data
      )
    })
  }
}
