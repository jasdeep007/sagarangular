import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from 'src/Guard/AuthGuard';
import { beforeleave } from 'src/Guard/beforeleave';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { ThirdComponent } from './third/third.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { CuberootPipe } from './pipes/cuberoot.pipe';
import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { SagarDirective } from './directives/sagar.directive';


@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    SecondcomponentComponent,
    ThirdComponent,
    PipesdemoComponent,
    CuberootPipe,
    CustomdirectiveComponent,
    SagarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard,beforeleave],
  bootstrap: [AppComponent]
})
export class AppModule { }
