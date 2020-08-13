import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.css']
})
export class VideoTitleComponent implements OnInit {

  // Angular animation states must be defined as strings
  @Input() isHidden: string = 'false';

  constructor() { }

  ngOnInit() {
  }

}
