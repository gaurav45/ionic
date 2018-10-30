import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleProductPage } from '../single-product/single-product';
import { MessageServiceProvider } from '../../providers/message-service/message-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
   
})
export class HomePage {
  product : any;
   items: Object[] = []
  itemsInCart: Object[] = [];
  constructor(private navCtrl: NavController,private messageService : MessageServiceProvider ) {
   console.log(localStorage.getItem("token"));
   this.product = this.getMessages();

    this.items = [
            {title: 'Something', quantityInCart: 0},
            {title: 'Something', quantityInCart: 0},
            {title: 'Something', quantityInCart: 0},
            {title: 'Something', quantityInCart: 0}
        ];

  } 

  getMessages(){
  	 this.messageService.getMessages('product').subscribe(data=>{this.product = data});
  }

  singleProduct(id){
  	 console.log(id)

  	this.navCtrl.push(SingleProductPage ,{
id:id
});
 //this.go('/SingleProductPage');
  }

  addToCart(item){
        console.log(item)
        this.itemsInCart.push(item);
 
    }




}
