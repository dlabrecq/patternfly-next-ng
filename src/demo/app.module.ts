// import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// App components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoComponentsModule } from './components/demo-components.module';
import { NavbarModule } from './navbar/navbar.module';

// Main areas
//  import example modules
import { ButtonExampleModule } from '../app/button/example/button-example.module';
import { WelcomeComponent } from './components/welcome.component';

@NgModule({
  imports: [
    ButtonExampleModule,
    AppRoutingModule,
    BrowserModule,
    DemoComponentsModule,
    FormsModule,
    HttpModule,
    NavbarModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
