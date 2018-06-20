import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonExampleComponent } from '../app/button/example/button-example.component';
import { WelcomeComponent } from './components/welcome.component';

const routes: Routes = [{
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  }, {
    path: 'button',
    component: ButtonExampleComponent
  }, {
    path: 'welcome',
    component: WelcomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
