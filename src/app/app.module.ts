import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProgressComponent } from './progress.component';
import { ToolbarComponent } from './toolbar.component';
import { OptionsComponent } from './options.component';
import { PlayOverlayComponent } from './play-overlay/play-overlay.component';
import { VideoTitleComponent } from './video-title/video-title.component';

import { VideoService } from './video.service';

import { TimeDisplayPipe } from "./timedisplay.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    ToolbarComponent,
    OptionsComponent,
    TimeDisplayPipe,
    PlayOverlayComponent,
    VideoTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
