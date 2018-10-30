import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { UserdetailPage } from '../userdetail/userdetail';

import { MessageServiceProvider } from '../../providers/message-service/message-service';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  success:any;
  user : any;
  
  constructor(private navCtrl: NavController, public navParams: NavParams ,private messageService : MessageServiceProvider) {
     let id = localStorage.getItem("token");
    console.log(id)
    if(id=='' || id==null){
     // this.navCtrl.push(SettingsPage);
      
    }else{
    
     
      
      this.navCtrl.setRoot(UserdetailPage);
    }

  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
     let id = localStorage.getItem("token");
     if(id=='' || id==null){
     // this.navCtrl.push(SettingsPage);
      
    }else{
     
      this.navCtrl.setRoot(UserdetailPage);
    }
  }

  registerPage(){
  	this.navCtrl.push(RegisterPage);
  }

  todo = {}

  doLogin() {
    console.log(this.todo);
    this.messageService.loginUser(this.todo).then((res) => {
      let response:any = res;
       if(response.status=='200'){
         //console.log(res.data[0].id)
         localStorage.setItem("token", response.data[0].id);
         localStorage.setItem("name", response.data[0].name);
         alert('user Login succesfully')
         this.navCtrl.setRoot(HomePage)
       }else if(response.status=='501'){
          alert('Wrong Crediantial')
       }
      
    }).catch((err) => {
      console.error('server error: ',err);
    });  
  }

}
