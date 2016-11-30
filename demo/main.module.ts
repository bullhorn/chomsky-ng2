// NG2
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App
import { DemoApp } from './pages/app/App';
import { ChomskyModule } from '../index';
import './index.scss';

@NgModule({
    declarations: [
        DemoApp
    ],
    imports: [
        BrowserModule,
        ChomskyModule
    ],
    entryComponents: [
        DemoApp
    ],
    bootstrap: [DemoApp]
})
export class DemoModule {
}
