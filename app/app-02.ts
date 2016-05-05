/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts" />


import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
@Component({
    selector: 'reddit-article',
    host: {
        class: 'row'
    },
    template: `
    
    
    <div class="four wide colum center aligned votes">
        <div class="ui statistic">
            <div class="value">
                {{votes}}
            </div>
            <div class="label">
                Points
            </div>
        </div>
    </div>
    
    <div class="twelve wide colum">
        <a class="ui large header" href="{{link}}">
            {{title}}
        </a>
        <ul class="ui big horizontal list voters">
            <li class="item">
                <a href (click)="voteUp()">
                    <i class="arrow up icon">
                        upvote
                    </i>
                </a>
            </li>
            
            <li class="item">
                <a href (click)="voteDown()">
                    <i class="arrow down icon">
                        downvote
                    </i>
                </a>
            </li>
        
        </ul>
    </div>
    
    
    
    
    
    
    
    
    
    `
})
/**
 * name
 */
export class ArticleComponent {
    title: string;
    link: string;
    votes: number;
    constructor() {
        this.title = 'angular2';
        this.link = 'http://angular.io';
        this.votes = 10;
    }

    voteUp() {
        this.votes += 1;
    }
    voteDown() {
        this.votes += 1;
    }
}