import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChomskyModule } from '../platform';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ChomskyModule
    ],
    entryComponents: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
