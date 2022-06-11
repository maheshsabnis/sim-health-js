export class Category {
  constructor(
    public CategoryId:number,
    public CategoryName: string
  ){}
}

export const Categories:Array<Category> = new Array<Category>();

Categories.push(new Category(1,'C1'));
Categories.push(new Category(2,'C2'));
Categories.push(new Category(3,'C3'));
Categories.push(new Category(4,'C4'));

export class Product {
  constructor(
    public ProductId:number,
    public ProductName:string,
    public Price:number,
    public CategoryId:number
  ){}
}

export const Products:Array<Product> = new Array<Product>();
Products.push(new Product(101, 'P1', 11000, 1));
Products.push(new Product(102, 'P2', 12000, 2));
Products.push(new Product(103, 'P3', 13000, 3));
Products.push(new Product(104, 'P4', 14000, 4));
Products.push(new Product(105, 'P5', 11000, 1));
Products.push(new Product(101, 'P6', 12000, 2));
Products.push(new Product(107, 'P7', 13000, 3));
Products.push(new Product(108, 'P8', 14000, 4));
