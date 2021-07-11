import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/Guard/AuthGuard';
import { beforeleave } from 'src/Guard/beforeleave';
import { demodeactivateguard } from 'src/Guard/demodeactivateguard';
import { demoguard } from 'src/Guard/demoguard';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SecondcomponentComponent },

  {
    path: 'first/second', component: SecondcomponentComponent, pathMatch: 'full'
    , canActivate: [demoguard], canDeactivate:[demodeactivateguard]
  },

  {
    path: 'first', component: FirstcomponentComponent // detail
    , children: [
      { path: ':id', component: ThirdComponent }
    ]
  },



  {
    path: 'second', component: SecondcomponentComponent
  },



  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
