import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-play-overlay',
  templateUrl: './play-overlay.component.html',
  styleUrls: ['./play-overlay.component.css'],
  animations: [
    trigger('hiddenChanged', [
      state('false', style({
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(1)',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
      })),
      state('true', style({
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(1.5)',
        backgroundColor: 'rgba(81, 7, 0, 0.8)'
      })),
      transition('true => false', animate('100ms ease-out')),
      transition('false => true', animate('800ms ease-out')),
      transition('void => *', [
        animate(1000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class PlayOverlayComponent implements OnInit {

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
