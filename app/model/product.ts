/**
 * Product
 */
export class Product {
    constructor(
        public sku: string,
        public name: string,
        public imageUrl,
        public department: string[],
        public price: number
    ) {

    }
}