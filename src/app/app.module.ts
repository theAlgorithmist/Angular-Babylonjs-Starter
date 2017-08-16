import { BrowserModule } from '@angular/platform-browser';
import { NgModule      } from '@angular/core';

import { AppComponent        } from './app.component';
import { BasicSceneDirective } from './basic-scene.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicSceneDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
