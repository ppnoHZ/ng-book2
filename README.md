# 使用
执行：npm run serve
# VS Code 使用
将项目录变成typescript项目,使用CTRL+SHIFT+B进行编译,如果存在.vscode文件夹则表示已经配置过了，如果没有点击配置任务运行程序，选择typescript tsconfig.
# tsconfig.json 
* 要注意tsconfig.json的位置，需要放到要编译文件夹下。如要tasks.json中设置为./app 则放在app文件夹下。[详见](https://www.typescriptlang.org/docs/handbook/tsconfig.json.html ,'官方文档')
```javascript
{
  "compilerOptions": {
    "target": "es5",
    "noImplicitAny": false,
    "module": "commonjs",//注意要和index.html中的 system一致。不然会报错。
    "removeComments": false,
    "sourceMap": true,  //是否生产.map文件
    "outFile": "../built/local/tsc.js" //文件输出的位置
  }
}
```

#tasks.json
* vscode 生成方式  ctrl+shift+b 

```javascript
// A task runner that calls the Typescript compiler (tsc) and
// Compiles a HelloWorld.ts program
{
	"version": "0.1.0",

	// The command is tsc. Assumes that tsc has been installed using npm install -g typescript
	"command": "tsc",

	// The command is a shell script
	"isShellCommand": true,

	// Show the output window only if unrecognized errors occur.
	"showOutput": "silent",

	// args is the HelloWorld program to compile.
	"args": ["-p", "./app"],

	// use the standard tsc problem matcher to find compile problems
	// in the output.
	"problemMatcher": "$tsc"
}

```

# 编译报错
* 警告
    * experimentalDecorators
    >  app/app.ts(17,7): error TS1219: Experimental support for decorators is a feature that is subject to change in a future release. Specify '--experimentalDecorators' to remove this warning.
    *  解决：在tsconfig.json中添加     "experimentalDecorators": true

# 语法
* ngFor
```html
<ul>
  <li *ngFor='#name of names'>
     Hello {{name}}
  </li>
  </ul>
        
  <div>
     hello {{name}}
  </div>
</ul>
```

* input  使用#newlink 来绑定属性。
 ```html
  <div class="field">
      <label for="link">Link:</label>
      <input name="link" #newlink>
  </div>
  
   <button (click)="addArticle(newtitle,newlink)"
                    class="ui positive right floated button"
                >
            Submit link
   </button>
 ```
* a 标签冒泡事件，在a的click事件中 返回false，就可以阻止a
* 组件引用：在组件A中要使用组件B，则需要在A组件的directives属性中添加引用,如下：
 ```javascript
  directives: [ArticleComponent],//引用其他组件，才能在当前组件中使用
 ```
* 给组件传递变量
    * 组件中定义:
    ```javascript
          inputs:['article'],//定义从外面传进来的变量
    
    ```
    
    * 页面传值: [article] 里面的为组件中定义的变量，"article" 是调用组件传递实际值。
    ```html
      <div class="ui grid posts">
                <reddit-article *ngFor="#article of articles"
                    [article]="article"
                    >
                </reddit-article>
      </div>
    ```
 
 
 
## 组件定义属性说明

* selector 组件的名称
* directives 需要引用的其他组件
* inputs 定义其他组件在调用该组件的时候定义的变量
* outputs 定义当前组件对外输出（事件）
* host 指定当前组件标签属性，可以通过class 给当前组件指定样式
  ```javascript

    @Component({
        selector: 'products-list',
        directives: [ProductRow],
        inputs: ['productList'],
        outputs: ['onProductSelected'],
        host: {
          class: 'item'
        },
        template: `
            <div class="ui items">
                <product-row 
                    *ngFor="#myProduct of productList"
                    [product]="myProduct"
                    (click)="clicked(myProduct)"
                    [class.selected]="isSelected(myProduct)"
                >
                </product-row>
            </div>
        
        `
    })
  ```