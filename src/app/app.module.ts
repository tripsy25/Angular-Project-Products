import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductsModule } from './products/products.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

      {path: 'welcome', component: WelcomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: '', component: WelcomeComponent, pathMatch: 'full'},
      {path: '**', redirectTo:'welcome', pathMatch: 'full'}

    ]),
    ProductsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
