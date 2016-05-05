/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts" />


import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

@Component({
    selector: 'hello-world',
    template: `
        <ul>
            <li *ngFor='#name of names'>
                Hello {{name}}
            </li>
        </ul>
        
        <div>
            hello {{name}}
        </div>
        `
})

class HelloWorld {
    name: string;
    names: string[];
    constructor() {
        this.name = 'zhoudd'
        this.names=['Ari','Carlos','Felipe','Nate'];
    }
}
bootstrap(HelloWorld);