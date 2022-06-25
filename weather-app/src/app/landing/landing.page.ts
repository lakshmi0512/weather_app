import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { bounceAnimation } from "angular-animations";
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  animations:[
    trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1000)),
  ]),
  bounceAnimation({ duration: 2000 }),
  ]
})

export class LandingPage{

  constructor() { }

  animState = false;

  animDone() {
    this.animState = !this.animState;
  }
}
