/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts" />


import { bootstrap } from "angular2/platform/browser";
import { Component, EventEmitter } from "angular2/core";


//========================RedditApp=========================================

// import { ArticleComponent } from "./app-02";
// import { Article } from './model/article';

// @Component({
//     selector: 'reddit',
//     directives: [ArticleComponent],//引用其他组件，才能在当前组件中使用
//     template: `
//         <form class="ui large form segment">
//             <h3 class="ui header">Add a Link</h3>
//             <div class="field">
//                 <label for="title">Title:</label>
//                 <input name="title" #newtitle>
//             </div>

//             <div class="field">
//                 <label for="link">Link:</label>
//                 <input name="link" #newlink>
//             </div>
//             <button (click)="addArticle(newtitle,newlink)"
//                     class="ui positive right floated button"
//                 >
//             Submit link
//             </button>
//         </form>


//         <div class="ui grid posts">
//             <reddit-article *ngFor="#article of sortArticle()"
//                 [article]="article"
//                 >
//             </reddit-article>
//         </div>

//         `
// })

// class RedditApp {
//     articles: Article[];
//     constructor() {
//         this.articles = [
//             new Article('Angular 2', 'http://angular.io', 3),
//             new Article('Fullstack', 'http://fullstack.io', 2),
//             new Article('Angular Homepage', 'http://angular.io', 1)
//         ]
//     }
//     addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
//         console.log(`title :${title.value} and link : ${link.value}`)

//         this.articles.push(new Article(title.value, link.value, 0))
//         title.value = '';
//         link.value = '';
//     }
//     sortArticle(): Article[] {
//         return this.articles.sort((a: Article, b: Article) => a.votes - a.votes);
//     }
// }
// bootstrap(RedditApp);

//=========================RedditApp========================================


//=========================How to work========================================


// /**
//  * Product
//  */
// export class Product {
//     constructor(
//         public sku: string,
//         public name: string,
//         public imageUrl: string,
//         public department: string[],
//         public price: number
//     ) {

//     }
// }




// @Component({
//     selector: 'product-department',
//     inputs: ['product'],
//     template: `
//         <div class="product-department">
//             <span *ngFor="#name of product.department; #i=index">
//                 <a href="#">{{name}}</a>
//                 <span>{{i<(product.department.length-1)?'>':''}}</span>
//             </span>


//         </div>

//     `
// })

// /**
//  * ProductDepartment
//  */
// class ProductDepartment {
//     product: Product;
//     constructor() {

//     }
// }



// @Component({
//     selector: 'price-display',
//     inputs: ['price'],
//     template: `
//         <div class="price-display">$ {{price}}</div>
//         `
// })
// /**
//  * ProductImage
//  */
// class PriceDisplay {
//     price: number;
//     constructor() {
//     }
// }





// /**
//  * [src] 的技巧
//  * 当angular run 的时候第一次会去计算表达式的值，所以不能使用 src="{{product.imageUrl}}"
//  * 所以会报错，使用 【src】属性，则告诉angular src是一个输入型的参数
//  */
// @Component({
//     selector: 'product-image',
//     inputs: ['product'],
//     host: {
//         class: 'ui small image'
//     },
//     template: `
//         <img class="product-image" [src]="product.imageUrl">
//         `
// })
// /**
//  * ProductImage
//  */
// class ProductImage {
//     product: Product;
// }





// @Component({
//     selector: 'product-row',
//     inputs: ['product'],
//     host: {
//         'class': 'item'
//     },
//     directives: [ProductImage, ProductDepartment, PriceDisplay],
//     template: `
//        <product-image [product]="product">

//        </product-image> 
//        <div class="content">
//             <div class="header">{{ product.name }}</div> 
//             <div class="meta">
//                  <div class="product-sku">SKU #{{ product.sku }}</div>
//              </div>
//             <div class="description">
//             <product-department [product]="product"></product-department>
//              </div>
//             </div>
//             <price-display [price]="product.price">
//         </price-display>
//     `
// })


// class ProductRow {
//     produt: Product
// }



// /**
//  * [class.selected]="{{express}}"
//  * 如果表达式返回为true 在当前element会附加一个selected的样式。
//  */

// @Component({
//     selector: 'products-list',
//     directives: [ProductRow],
//     inputs: ['productList'],
//     outputs: ['onProductSelected'],
//     template: `
//         <div class="ui items">
//             <product-row 
//                 *ngFor="#myProduct of productList"
//                 [product]="myProduct"
//                 (click)="clicked(myProduct)"
//                 [class.selected]="isSelected(myProduct)"
//             >
//             </product-row>
//         </div>

//     `
// })
// class ProductList {
//     productList: Product[];

//     currentProduct: Product;
//     onProductSelected: EventEmitter<Product>;
//     constructor() {
//         this.onProductSelected = new EventEmitter();
//     }
//     clicked(product: Product): void {
//         this.currentProduct = product;
//         this.onProductSelected.emit(product);
//     }

//     isSelected(product: Product): boolean {
//         if (!product || !this.currentProduct) {
//             return false;
//         }
//         return product.sku === this.currentProduct.sku;
//     }
// }

// @Component({
//     selector: 'inventory-app',
//     directives: [ProductList],
//     template: `
//         <div class="inventory-app">
//             <products-list    
//                 [productList]="products"
//                 (onProductSelected)="productWasSelected($event)"
//                 >

//             </products-list>
//         </div>

//     `
// })


// class InventoryApp {

//     products: Product[];

//     constructor() {
//         this.products = [
//             new Product(
//                 'MYSHOES', 'Black Running Shoes',
//                 '/resources/images/products/black-shoes.jpg',
//                 ['Men', 'Shoes', 'Running Shoes'],
//                 109.99),
//             new Product(
//                 'NEATOJACKET', 'Blue Jacket',
//                 '/resources/images/products/blue-jacket.jpg',
//                 ['Women', 'Apparel', 'Jackets & Vests'],
//                 238.99),
//             new Product(
//                 'NICEHAT', 'A Nice Black Hat',
//                 '/resources/images/products/black-hat.jpg',
//                 ['Men', 'Accessories', 'Hats'],
//                 29.99)
//         ];

//     }

//     productWasSelected(product: Product): void {
//         console.log('product clicked:', product)
//     }
// }

// bootstrap(InventoryApp);

//=========================How to work========================================

//=========================Built-in Component========================================


@Component({
    selector: "built-in",
    template: `
    <div class="ui input">
      <input type="text" name="color" value="{{color}}" #colorinput>
    </div>

    <div class="ui input">
      <input type="text" name="fontSize" value="{{fontSize}}" #fontinput>
    </div>
    
    <button class="ui primary button" (click)="apply(colorinput.value, fontinput.value)">
      Apply settings
    </button>
    
    <h4 class="ui horizontal divider header">
      style.background-color
    </h4>

    <div [style.background-color]="'yellow'">
      Uses fixed yellow background
    </div>

    <h4 class="ui horizontal divider header">
      ngStyle literal
    </h4>

    <div [ngStyle]="{color: 'white', 'background-color': 'blue'}">
      Uses fixed white text on blue background
    </div>

    <h4 class="ui horizontal divider header">
      ngStyle literal and style.font-size.px
    </h4>

    <div>
      <span [ngStyle]="{color: 'red'}" [style.font-size.px]="fontSize">
        red text
      </span>
    </div>

    <h4 class="ui horizontal divider header">
      ngStyle with an object
    </h4>

    <div [ngStyle]="style"></div>

    <h4 class="ui horizontal divider header">
      ngStyle with object property from variable
    </h4>

    <div>
      <span [ngStyle]="{color: colorinput.value}">
        {{ colorinput.value }} text
      </span>
    </div>

    <h4 class="ui horizontal divider header">
      style from variable
    </h4>

    <div [style.background-color]="colorinput.value"
         style="color: white;">
      {{ colorinput.value }} background
    </div>

    <h4 class="ui horizontal divider header">
      Play with the color and font-size here
    </h4>

    


    
    `
})


/**
 * BuiltInComponents
 */
class BuiltInComponents {
    color: string;
    fontSize: number;
    style: {
        'background-color': string,
        'border-radius': string,
        border?: string,
        width?: string,
        height?: string
    };

    constructor() {
        this.fontSize = 16;
        this.color = "blue";
        this.style = {
            'background-color': '#ccc',
            'border-radius': '50px',
            'height': '30px',
            'width': '30px',
        };
    }

    apply(color, fontSize) {
        this.color = color;
        this.fontSize = fontSize;
    }
}

bootstrap(BuiltInComponents);
//=========================Built-in Component========================================




