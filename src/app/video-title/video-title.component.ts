import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.css'],
  animations: [
    trigger('hiddenChanged', [
      state('false', style({
        opacity: 1
      })),
      state('true', style({
        opacity: 0
      })),
      transition('true => false', animate('100ms ease-out')), // Shorter time to fade in
      transition('false => true', animate('800ms ease-out')), // Longer time to fade out
      transition('void => *', [
        animate(1000, style({ opacity: 1 })) // I can't figure out what this actually does. The transition starts & ends so quickly according to the console logs.
      ])
    ])
  ]
})
export class VideoTitleComponent implements OnInit {

  // Angular animation states must be defined as strings
  @Input() isHidden: string = 'false';

  constructor() { }

  ngOnInit() {
  }

  animationBegin(e: AnimationEvent): void {
    console.log(e.phaseName + ': ' + e.fromState + ' => ' + e.toState + ' [' + e.totalTime + ']');
  }

  animationEnd(e: AnimationEvent): void {
    console.log(e.phaseName + ': ' + e.fromState + ' => ' + e.toState + ' [' + e.totalTime + ']');
  }
}
