import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-play-overlay',
  templateUrl: './play-overlay.component.html',
  styleUrls: ['./play-overlay.component.css']
})
export class PlayOverlayComponent implements OnInit {

  // Angular animation states must be defined as strings
  @Input() isHidden: string = 'false';

  constructor() { }

  ngOnInit() {
  }

}
