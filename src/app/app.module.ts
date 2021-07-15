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
import { ParentComponent } from './parentchild/parent/parent.component';
import { ChildOneComponent } from './parentchild/child-one/child-one.component';
import { ChildTwoComponent } from './parentchild/child-two/child-two.component';
import { ChildThreeComponent } from './parentchild/child-three/child-three.component';
import { ChildFourComponent } from './parentchild/child-four/child-four.component';
import { ChildInnerOneComponent } from './parentchild/childOne/child-inner-one/child-inner-one.component';
import { ChildInnerTwoComponent } from './parentchild/childOne/child-inner-two/child-inner-two.component';
import { ChildInnerInnerOneComponent } from './parentchild/child-one/child-inner-inner-one/child-inner-inner-one.component';
import { ChildInnerInnerTwoComponent } from './parentchild/child-one/child-inner-inner-two/child-inner-inner-two.component';
import { FindbigsumComponent } from './parentchild/findbigsum/findbigsum.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    SecondcomponentComponent,
    ThirdComponent,
    PipesdemoComponent,
    CuberootPipe,
    CustomdirectiveComponent,
    SagarDirective,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    ChildFourComponent,
    ChildInnerOneComponent,
    ChildInnerTwoComponent,
    ChildInnerInnerOneComponent,
    ChildInnerInnerTwoComponent,
    FindbigsumComponent
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
