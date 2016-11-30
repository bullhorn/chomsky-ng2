// NG2
import { NgModule } from '@angular/core';
// APP
import { TranslatePipe } from './src/pipes/translate.pipe';
import { Translate } from './src/directives/translate.directive';

export * from './src/services/translate.service';

@NgModule({
    declarations: [TranslatePipe, Translate],
    exports: [TranslatePipe, Translate],
})
export class ChomskyModule {}
