import { Component, Input} from '@angular/core';
import { ConfigurationComponent } from '../configuration/configuration.component';
import { MobileDevicesCapabilities } from '../configuration/configuration.component';

@Component({
  selector: 'app-mobile-device-capabilities',
  standalone: true,
  imports: [ConfigurationComponent],
  templateUrl: './mobile-device-capabilities.component.html',
  styleUrl: './mobile-device-capabilities.component.css'
})
export class MobileDeviceCapabilitiesComponent {
  @Input() capabilities!: MobileDevicesCapabilities
}

