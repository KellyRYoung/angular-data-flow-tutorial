import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TocComponent } from './toc/toc.component'
import { BindingComponent } from './binding/binding.component'
import { ParentChildComponent } from './parent-child/parent-child.component'
import { SeparateComponentsComponent } from './separate-components/separate-components.component'
import { UseCasesComponent } from './use-cases/use-cases.component'
import { UsefulLinksComponent } from './useful-links/useful-links.component'

@NgModule({
 declarations: [
  AppComponent,
  TocComponent,
  BindingComponent,
  ParentChildComponent,
  SeparateComponentsComponent,
  UseCasesComponent,
  UsefulLinksComponent,
 ],
 imports: [BrowserModule, AppRoutingModule, FormsModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
