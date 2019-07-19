import { Component } from '@angular/core';

import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'picStore';

  constructor(private sharedService: SharedService){

    this.sharedService.getAllUsers().subscribe(data => {
      console.log(data.arrUsers);
      localStorage.setItem('users', JSON.stringify(data.arrUsers));
    })
  }
}
