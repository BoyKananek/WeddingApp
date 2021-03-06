import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Page2 } from '../pages/page2/page2';
import { SignUp} from '../pages/signup/signup';
import { ForgotPass } from '../pages/forgotpass/forgotpass';
@NgModule({
  declarations: [
    MyApp,
    Home,
    SignUp,
    ForgotPass,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    SignUp,
    ForgotPass,
    Page2
  ],
  providers: []
})
export class AppModule {}
