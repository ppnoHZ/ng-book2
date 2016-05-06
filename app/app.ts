/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts" />


import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
import { ArticleComponent } from "./app-02";
import { Article } from './model/article';

@Component({
    selector: 'reddit',
    directives: [ArticleComponent],//引用其他组件，才能在当前组件中使用
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
            <reddit-article *ngFor="#article of sortArticle()"
                [article]="article"
                >
            </reddit-article>
        </div>
        
        `
})

class RedditApp {
    articles: Article[];
    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1)
        ]
    }
    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`title :${title.value} and link : ${link.value}`)
    }
    sortArticle(): Article[] {
        return this.articles.sort((a: Article, b: Article) => a.votes - a.votes);
    }
}
bootstrap(RedditApp);