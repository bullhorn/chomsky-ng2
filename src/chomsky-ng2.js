// NG2
import { NgModule } from '@angular/core';
// APP
import { TranslatePipe } from './pipes/translate.pipe';
import { Translate } from './directives/translate.directive';
import { TranslateService } from './services/translate.service';

export * from './services/translate.service';

@NgModule({
    declarations: [TranslatePipe, Translate],
    exports: [TranslatePipe, Translate],
    providers: [TranslateService]
})
export class ChomskyModule {}
