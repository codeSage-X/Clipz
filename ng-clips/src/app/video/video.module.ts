import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { UploadComponent } from './upload/upload.component';
// import { ManageComponent } from './manage/manage.component';


@NgModule({
  declarations: [
    // ManageComponent
  
    UploadComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
