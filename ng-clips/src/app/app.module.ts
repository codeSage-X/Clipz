import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';

// import { initializeApp } from 'firebase/app';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VideoModule } from './video/video.module';
import { ManageComponent } from './video/manage/manage.component';
// import { UploadComponent } from './video/upload/upload.component';
@NgModule({
  declarations: [
    AppComponent, NavComponent, HomeComponent, AboutComponent, ManageComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    VideoModule,
  ],
   providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
