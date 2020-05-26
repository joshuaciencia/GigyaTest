import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaBtnCambiar } from './empresa-btn-cambiar/empresa-btn-cambiar.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ScriptLoaderService } from './script-loader.service';


@NgModule({
  declarations: [
    AppComponent,
    EmpresaBtnCambiar,
    PopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
