import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MessageServiceProvider } from '../../providers/message-service/message-service';

/**
 * Generated class for the SingleProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-single-product',
  templateUrl: 'single-product.html',
})
export class SingleProductPage {
  product:any;
  id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private messageService : MessageServiceProvider) {
  	this.id = navParams.get('id');
  	this.product = this.getProductDetail(this.id);
  }

  getProductDetail(id){
     this.messageService.getProductDetail(id).subscribe(data=>{this.product = data});
  }

  ionViewDidLoad() {
  	this.product = this.getProductDetail(this.id);
    console.log('ionViewDidLoad SingleProductPage');
  }

}
