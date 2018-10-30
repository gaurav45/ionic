import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageServiceProvider } from '../../providers/message-service/message-service';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  success:any;

  constructor(private navCtrl: NavController, public navParams: NavParams,private messageService : MessageServiceProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
   todo = {};
  doSignup() {  
    //console.log(this.todo)
    this.messageService.registerUser(this.todo).then((res) => {
      // console.log(res.msg)
       let response:any = res;
       if(response.msg=='success'){
         alert('user registered succesfully')
         this.navCtrl.push(SettingsPage)
       }
      
    }).catch((err) => {
      console.error('server error: ',err);
    });  
  }
}
