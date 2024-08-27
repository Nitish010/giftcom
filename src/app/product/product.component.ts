import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../Model/Product';
import { Cart } from '../Model/Cart';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedChoice: string = ''
  genderCode:string = ''
  constructor(private shared: SharedService) { }
  
  specialProd:Product[] = []
  ngOnInit() {
    this.productList = this.productGirl
    this.genderCode = localStorage.getItem('genderCode') || ''
    if(this.genderCode == 'Couple'){
      this.selectedChoice = 'Boy'
    }else{

      this.selectedChoice = this.genderCode
    }
    this.arrangeProductListData()

    this.shared.getSharedVariable().forEach((ele) => {
      this.productList.unshift(ele)
    });
    console.log(this.specialProd)


  }

  arrangeProductListData() {

    console.log(this.selectedChoice)

   if(this.selectedChoice == 'Girl'){
      this.productList = this.productGirl
    }else {
      this.productList = this.productBoy
    }
    
  }

  productList:Product[] = []

  productBoy = [
    { productCode: "B001", name:"Beard Fuel", imageUrl: "https://burly-boy.com/wp-content/uploads/2019/04/Beard-Fuel-Aussie-Breeze-535x400.jpg", price: 12.00 },
    { productCode: "B002", name:"Axe deo", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvjMwi8J-mZcvJpQM4XQY_CgS5rf62fVSxw&s", price: 12.00 },
    { productCode: "B003", name:"Sneakers", imageUrl: "https://m.media-amazon.com/images/I/71z3eS37oPL._SY695_.jpg", price: 14.00 },
    { productCode: "B004", name:"Boots", imageUrl: "https://assets.ajio.com/medias/sys_master/root/20240307/pxRr/65e9b09616fd2c6e6a429997/-473Wx593H-467065508-black-MODEL.jpg", price: 16.00 },
    { productCode: "B005", name:"Trouser", imageUrl: "https://assets.ajio.com/medias/sys_master/root/20231013/HkdP/65294844afa4cf41f5413f19/-473Wx593H-466702830-grey-MODEL.jpg", price: 18.00 },
    { productCode: "B006", name:"shirt", imageUrl: "https://m.media-amazon.com/images/I/813UIVxLD3L._SY879_.jpg", price: 20.00 },
    { productCode: "B007", name:"Jacket", imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/10/355883150/AD/BE/YV/61259432/men-winter-fashion-jacket-1000x1000.jpeg", price: 22.00 },
    { productCode: "B008", name:"shaving cream", imageUrl: "https://m.media-amazon.com/images/I/5160AJATiML._SX300_SY300_QL70_FMwebp_.jpg", price: 24.00 },
    { productCode: "B009", name:"Razor", imageUrl: "https://cdn11.bigcommerce.com/s-xyx0x9ybhg/images/stencil/original/products/1188/8193/B0BVQWZ1H5.MAIN__40884.1687253831.jpg", price: 26.00 },
    { productCode: "B010", name:"Hair Cream", imageUrl: "https://ustraa.cdn.imgeng.in/media/catalog/product/2/1/21_17.jpg", price: 28.00 }
  ]

  productGirl = [
    { productCode: "G001", name:"Lipstick", imageUrl: "https://www.lakmeindia.com/cdn/shop/files/29543_H-8901030953224_1000x.jpg?v=1689831987", price: 11.00 },
    { productCode: "G002", name:"Mascara", imageUrl: "https://m.media-amazon.com/images/I/31GknHf5xqL._SX300_SY300_QL70_FMwebp_.jpg", price: 13.00 },
    { productCode: "G003", name:"Blush", imageUrl: "https://media.glamour.com/photos/569643b3d9dab9ff41b580be/master/w_1920%2Cc_limit/beauty-2012-06-0604-01-blush-beauty-products-every-woman-should-own_li.jpg", price: 15.00 },
    { productCode: "G004", name:"Concealer", imageUrl: "https://media.glamour.com/photos/569643b393ef4b09520ffdd3/master/w_1920%2Cc_limit/beauty-2012-06-0604-02-concealer-beauty-products-every-woman-should-own_li.jpg", price: 17.00 },
    { productCode: "G005", name:"Eye Cream", imageUrl: "https://media.glamour.com/photos/569643b416d0dc3747ef48df/master/w_1920%2Cc_limit/beauty-2012-06-0604-03-eye-cream-beauty-products-every-woman-should-own_li.jpg", price: 19.00 },
    { productCode: "G006", name:"Dry Shampoo", imageUrl: "https://media.glamour.com/photos/569643b516d0dc3747ef48ee/master/w_1920%2Cc_limit/beauty-2012-06-0604-07-dry-shampoo-beauty-products-every-woman-should-own_li.jpg", price: 21.00 },
    { productCode: "G007", name:"Deep Conditioner", imageUrl: "https://media.glamour.com/photos/569643b516d0dc3747ef48f3/master/w_1920%2Cc_limit/beauty-2012-06-0604-08-deep-conditioner-beauty-products-every-woman-should-own_li.jpg", price: 23.00 },
    { productCode: "G008", name:"Face Wipes", imageUrl: "https://media.glamour.com/photos/569643b616d0dc3747ef48f7/master/w_1920%2Cc_limit/beauty-2012-06-0604-09-wipes-beauty-products-every-woman-should-own_li.jpg", price: 25.00 },
    { productCode: "G009", name:"Sunscreen", imageUrl: "https://media.glamour.com/photos/569643b616d0dc3747ef48fb/master/w_1920%2Cc_limit/beauty-2012-06-0604-10-sunscreen-beauty-products-every-woman-should-own_li.jpg", price: 27.00 },
    // { productCode: "G010", name:"somename", imageUrl: "https://via.placeholder.com/150?text=Girl+10", price: 29.00 }
  ]


  cart: Cart = new Cart;
  orderList:Cart[] = [];
  cartProductCodes:string[] = []

  addToCart(product: Product) {

    let idx = this.cart.productList.findIndex((ele) => {
      return ele.product.productCode == product.productCode
    })

    if(idx != -1){
      this.cart.productList[idx].quantity += 1
    }else{
      this.cart.productList.push({product:product,quantity:1})
      this.cartProductCodes.push(product.productCode)
    }

    this.countItemAndPriceOfCart()

  }
  
  removeItemFromCart(product: Product, idx: number) {
    // this.cart.productList.splice(idx, 1);
    this.cart.productList[idx].quantity = 0
    let fidx = this.cartProductCodes.findIndex((ele) => {
      return ele == product.productCode
    })

    // if(fidx != -1){
    //   this.cartProductCodes.splice(fidx, 1)
    // }
    this.countItemAndPriceOfCart()
  }
  
  // cartItemCount: number = 0;
  // cartTotalPrice: number = 0;
  countItemAndPriceOfCart() {
    this.cart.itemCount = 0;
    this.cart.cartPrice = 0
    this.cart.productList.forEach((ele) => {
      this.cart.itemCount += ele.quantity
      this.cart.cartPrice += (ele.quantity * ele.product.price)
    })

    

  }

  changeProductQuantity(quantity:number, idx: number) {
    this.cart.productList[idx].quantity += quantity;
    if(this.cart.productList[idx].quantity == 0) {
      this.removeItemFromCart(this.cart.productList[idx].product,idx)
    }
    this.countItemAndPriceOfCart();
  }

  // @ViewChild('placeOrderModal') placeOrderModal!: ElementRef
  checkOut() {
    if(this.cart.itemCount < 5){
      alert("Min Quantity of item in cart should be 5")
      return;
    }
    let cartProduct:any[] = []
    this.cart.productList.forEach((ele) => {
      if(ele.quantity > 0) {
        cartProduct.push(ele);
      }
    })
    this.cart.productList = cartProduct
    this.orderList.push(this.cart);
    this.cartProductCodes = [];
    this.cart = new Cart();
    console.log(this.orderList)
    // this.placeOrderModal.nativeElement.click()
  }

  drop(evt: any){
    console.log(evt)

    
    this.addToCart(this.productList[evt.previousIndex])

  }

  cancelOrder(idx: number){
    this.orderList.splice(idx, 1)
  }

}
