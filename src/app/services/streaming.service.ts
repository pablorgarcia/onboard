import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Streaming } from '../models/streaming';

@Injectable({
  providedIn: 'root',
})
export class StreamingService {
  // https://developers.google.com/youtube/v3
  // https://developers.google.com/youtube/v3/docs/search/list?hl=es#javascript
/*
  public videoData: Streaming[];
  private videoData$: Subject<PlayerModel>;

  constructor(private http: HttpClient) {}

  public setVideoData(title: string, src: string) {
    // seteamos el videoData
    this.videoData = { videoTitle: title, videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + src) };
    this.videoData$.next(this.videoData);
  }
*/
}
