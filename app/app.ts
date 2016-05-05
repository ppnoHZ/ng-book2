/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts" />


import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
import { ArticleComponent } from "./app-02";

@Component({
    selector: 'reddit',
    directives: [ArticleComponent],
    template: `
        <form class="ui large form segment">
            <h3 class="ui header">Add a Link</h3>
            <div class="field">
                <label for="title">Title:</label>
                <input name="title" #newtitle>
            </div>
            
            <div class="field">
                <label for="link">Link:</label>
                <input name="link" #newlink>
            </div>
            <button (click)="addArticle(newtitle,newlink)"
                    class="ui positive right floated button"
                >
            Submit link
            </button>
        </form>
        
        
        <div class="ui grid posts">
            <reddit-article>
            
            </reddit-article>
        </div>
        
        `
})

class RedditApp {
    constructor() {
    }
    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`title :${title.value} and link : ${link.value}`)
    }
}
bootstrap(RedditApp);