import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { Dataservice } from './core/dataservice';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    UpgradeModule
  ],
  providers: [
    // Angular:
    Dataservice,

    // AngularJS:
    {
      provide: 'exception',
      useFactory: (i) => {
        return i.get('exception')
      },
      deps: ['$injector']
    }
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['app']);
  }
}
