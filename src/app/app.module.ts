import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

// cambiar el locale de la app
import localEs from '@angular/common/locales/fr';
import localFr from '@angular/common/locales/es-PA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    SalesModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-PA'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
