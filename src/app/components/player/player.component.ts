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
  public userData: any;

  constructor(
    private sanitizer: DomSanitizer,
    public userService: UsersService) {
      this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.twitch.tv/?channel={this.ytUrl}&enableExtensions=true&parent=pablogarcia.dev&muted=true`);
  }

  async ngOnInit() {
    await this.setUrlUserData();
  }

  private async setUrlUserData() {
    this.userService.getUser().then(data => {
      this.userData = data.map(d => ({
        name: d.name,
        kartNum: d.idNum,
        url: this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.twitch.tv/?channel=${d.ytUrl.split(' ').join('').toLowerCase()}&enableExtensions=true&parent=pablogarcia.dev&muted=true`)
      }));
      console.log('1', this.userData)
    })

  }

}
