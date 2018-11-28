import {Component, Input, OnInit} from '@angular/core';
import {ChallengesetService} from "../../services/challengeset.service";

import ChallengeSetObject = ChallengeSetModule.ChallengeSetObject;
import Challenge = ChallengeSetModule.Challenge;


@Component({
  selector: 'app-challengeset',
  templateUrl: './challengeset.component.html',
})
export class ChallengesetComponent implements OnInit {

  challengeSet: ChallengeSetObject;
  @Input() url: string;
  @Input() rarity: string;


  constructor(private challengeSetService: ChallengesetService) { }

  ngOnInit() {
    this.getChallenges();
  }

  getChallenges(){
    this.challengeSetService.getChallenges(this.url).subscribe(
      (data: ChallengeSetObject) => { this.challengeSet = data},
      err => console.error(err),
      () => console.log('Challenge Set Loaded')
    );
  }

  getBackground(type){
    switch (type){
      case 'LEGENDARY':
        return '/images/background/legendary.png';
      case 'EPIC':
        return '/images/background/epic.png';
      case 'RARE':
        return '/images/background/rare.png';
      case 'COMMON':
        return '/images/background/common.png';
      case 'UNCOMMON':
        return '/images/background/uncommon.png';
    }
  }


}
