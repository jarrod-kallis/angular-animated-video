import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';

import { VideoService } from "./video.service";

@Component({
    selector: 'video-options',
    template: `
    <div id="VideoOptions" [@visibleChanged]="isVisible" class="card"
        (@visibleChanged.start)="animationBegin($event)"
        (@visibleChanged.done)="animationEnd($event)">
        <div class="panel-heading">
            <h1 class="panel-title">{{videoService.currentTitle}}</h1>
        </div>
        <div class="panel-body row">
            <div class="col-6">
                <h2>Video Details:</h2>
                <p>{{videoService.currentDesc}}</p>
            </div>
            <div class="col-6">
                <ul class="list-group">
                    <h2>Playlist:</h2>
                    <li class="list-group-item" *ngFor="let playlistItem of videoService.playlist; let i = index" (click)="videoService.selectedVideo(i)">
                        {{ playlistItem.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `,
    animations: [
        trigger('visibleChanged', [
            state('true', style({
                opacity: 1,
                transform: 'translateX(0%)'
            })),
            state('false', style({
                opacity: 0,
                transform: 'translateX(100%)'
            })),
            transition('false => true', animate('100ms ease-out')),
            transition('true => false', animate('400ms ease-in'))
        ])
    ]
})
export class OptionsComponent {
    @Input() isVisible: string = 'false';

    constructor(public videoService: VideoService) { }

    animationBegin(e: AnimationEvent): void {
        console.log(e.phaseName + ': ' + e.fromState + ' => ' + e.toState + ' [' + e.totalTime + ']');
    }

    animationEnd(e: AnimationEvent): void {
        console.log(e.phaseName + ': ' + e.fromState + ' => ' + e.toState + ' [' + e.totalTime + ']');
    }
}
