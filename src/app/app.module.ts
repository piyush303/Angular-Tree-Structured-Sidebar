import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarWrapperComponent } from './components/sidebar/sidebar-wrapper/sidebar-wrapper.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SidebarWrapperComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
