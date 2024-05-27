import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { MobileDeviceCapabilitiesComponent } from '../mobile-device-capabilities/mobile-device-capabilities.component';
import { ChannelsComponent } from '../channels/channels.component';
import { RttpServerInfoComponent } from '../rttp-server-info/rttp-server-info.component';
import { RootSecObjectComponent } from '../root-sec-object/root-sec-object.component';
import { MobileServerInfoComponent } from '../mobile-server-info/mobile-server-info.component';
import { ServersComponent } from '../servers/servers.component';
import { UserGroupComponent } from '../user-group/user-group.component';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [HttpClientModule, MobileDeviceCapabilitiesComponent, ChannelsComponent,
    RttpServerInfoComponent, MobileServerInfoComponent, RootSecObjectComponent,
    ServersComponent, UserGroupComponent
  ],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ConfigurationComponent {
  @Input() conf!: Configuration;


}

export interface MobileDevicesCapabilities{
  AndroidMobilePush: boolean
  AppleMobilePush: boolean
  Archive: boolean
  Gis: boolean
  Hls: boolean
  Profiles: boolean
  Ptz: boolean
  SmartAssistant: boolean
  UserScenarios: boolean
}
export interface Stream{
  RotationMode: string;
  StreamFormat: string;
  StreamType: string;
}
export interface Channel{
  AllowedArchive: boolean;
  AllowedRealtime: boolean;
  ArchiveMode: string;
  ArchiveRotationMode: string;
  ArchiveStreamType: string;
  ArchiveVideoFormat: string;
  AttachedToServer: string;
  Description: string;
  DeviceInfo: string;
  GeoPosition: any
  Id: string;
  IsArchivingEnabled: boolean
  IsDisabled: boolean
  IsFaceRecOn: boolean
  IsObjectCountingOn: boolean
  IsPeopleCountingOn: boolean
  IsPtzOn: boolean
  IsSoundArchivingEnabled: boolean
  IsSoundOn: boolean
  IsTransmitSoundOn: boolean
  Name: string
  Streams: Stream[]
  TimeZoneOffset: Int32Array
  UserScenarios: []
}
export interface Resolution{
  FpsLimit: Int32Array
  Height: Int32Array
  IsEnabled: boolean
  Type: string
  UsePFrames: boolean
  Width: Int32Array
}
export interface MobileServerInfo{
  FpsLimit: Int32Array
  HighResolution: string
  IsEnabled: boolean;
  IsMobilePushEnabled: boolean;
  IsProxyEnabled: boolean;
  LowResolution: string
  MiddleResolution: string
  Port: Int32Array
  Resolutions: Resolution[]
  UsePFrames: boolean;
}
export interface RtspServerInfo{
  IsEnabled: boolean;
  IsMjpegEnabled: boolean;
  TcpPort: Int32Array;
}
export interface Server{
  ConnectionUrl: string
  Id: string
  Name: string
  PrimaryIp: string
  PrimaryPort: string
  PrimarySslPort: string
  SecondaryIp: string
  SecondaryPort: string
  SecondarySslPort: string
  Url: string
}
export interface UserGroup{
  CanAccessArchiveMarks: boolean
  CanAccessEditingAnalystPluginsInClient: boolean
  CanAccessExpertMode: boolean
  CanAccessGis: boolean
  CanAccessNewCamera: boolean
  CanAccessPlans: boolean
  CanAccessReports: boolean
  CanAccessSearch: boolean
  CanAccessToAllUsersInUnifiedLog: boolean
  CanAccessUnifiedLog: boolean
  CanAccessVideoViaSmartTV: boolean
  CanAccessVideoViaWeb: boolean
  CanBrowsingVideowall: boolean
  CanChangeChannelMode: boolean
  CanChangePassword: boolean
  CanConfigure: boolean
  CanConfigureVideowall: boolean
  CanConfigureWorkplace: boolean
  CanExportVideoToAvi: boolean
  CanGetTranscodedVideoFromMobileServer: boolean
  CanManageRec: boolean
  CanPTZ: boolean
  CanReceiveMainStream: boolean
  CanReceiveMobilePush: boolean
  CanReceiveSound: boolean
  CanRunUserScenarios: boolean
  CanShutdown: boolean
  CanTransmitSound: boolean
  CanUseArchiveExport: boolean
  Comment: any
  GridTypesAllowed: []
  Id: string
  IsAllForbidden: boolean
  MessengerCanReceiveMessages: boolean
  MessengerCanSendMessages: boolean
  Name: string
  PtzPriority: string
}
export interface ChildSecObject{
  ChildChannels: [
    id: string,
    chn: Channel[]
  ]
  ChildSecObjects: []
  Id: string;
  Name: string
}
export interface RootSec{
  ChildChannels: [];
  ChildSecObjects: ChildSecObject[];
  Id: string;
  Name: any
}
export interface Configuration{
  Channels: Channel[]
  ChannelStreams: Stream[]
  MobileDevicesCapabilities: MobileDevicesCapabilities;
  MobileServerInfo: MobileServerInfo;
  MSIResolutions: Resolution[];
  RtspServerInfo: RtspServerInfo;
  Servers: Server[];
  UserGroup: UserGroup;
  RootSecObject: RootSec;
  //простые
  GisConfig: any;
  Id: string;
  ProductType: string;
  RevNum: Int32Array;
  SenderId: string;
  ServerVersion: string;
  Timestamp: string;
  UseTimeZones: boolean;
  WorldMapConfig: any;
  XmlProtocolVersion: Int32Array;
}
export interface modifiedConfiguration{
  Channels: Channel[]
  RootSecObj: RootSec
}
