import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Http, Response } from "@angular/http";
import { HomePage } from '../home/home';
import { MessageServiceProvider } from '../../providers/message-service/message-service';

/**
 * Generated class for the UserdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-userdetail',
  templateUrl: 'userdetail.html',
})
export class UserdetailPage {
  user :any;
  //Server :any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private messageService : MessageServiceProvider) {
     let id = localStorage.getItem("token");
     this.user = this.getUserProfile(id);
     //console.log(JSON.stringify(this.user));

     //let servers = JSON.parse(this.user);
  }

  getUserProfile(id){
     this.messageService.getUserProfile(id).subscribe(data=>{this.user = data});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserdetailPage');
  }
 
  logout(){
  	 localStorage.clear();
  	 this.navCtrl.setRoot(HomePage);
  }
 

	
}
