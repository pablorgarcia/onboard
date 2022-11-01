import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public safeSrc: SafeResourceUrl;
  public users: User[] = [];
  public twitchURLs: any;

  constructor(
    private sanitizer: DomSanitizer,
    public userService: UsersService) {
      this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.twitch.tv/?channel={this.ytUrl}&enableExtensions=true&parent=pablogarcia.dev&muted=true`);
      // ${this.users.ytUrl}
  }

  async ngOnInit() {
    await this.setTwitchURLs();
  }

  private async setTwitchURLs() {
    this.userService.getUser().then(data => {
      this.twitchURLs = data.map(d => ({urlTwitch: this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.twitch.tv/?channel=${d.ytUrl.split(' ').join('').toLowerCase()}&enableExtensions=true&parent=pablogarcia.dev&muted=true`)}));
      console.log(this.twitchURLs)
    })
   /*
    this.userService.users$.subscribe(data => {
      this.users = data;
      console.log('3', this.users[0]?.ytUrl)
    });
    */
  }

}
