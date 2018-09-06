import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-locker-glider',
  templateUrl: './glider.component.html'
})
export class GliderComponent {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Glider';
  }

}