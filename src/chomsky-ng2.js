// NG2
import { NgModule } from '@angular/core';
// APP
import { TranslatePipe } from './pipes/translate.pipe';
import { Translate } from './directives/translate.directive';

export * from './services/translate.service';

@NgModule({
    declarations: [TranslatePipe, Translate],
    exports: [TranslatePipe, Translate],
})
export class ChomskyModule {}
