#基本语法
* 构造函数快速定义属性，如下会生成一个 对应名称的属性sku。public sku: string。
```javascript
class Product {
    constructor(
        public sku: string,
        public name: string,
        public imageUrl,
        public department: string[],
        public price: number
    ) {

    }
}
```
