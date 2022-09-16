import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public urlTest: string = 'https://www.youtube.com/embed/Y0noykDkmKI';
  public safeSrc: SafeResourceUrl;

  public aaa: string = `<iframe
  width="560"
  height="315"
  src=${ this.urlTest }
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Y0noykDkmKI");
  }

  ngOnInit(): void {}

}
