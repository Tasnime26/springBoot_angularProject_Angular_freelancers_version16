import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreelancersComponent } from './freelancers/freelancers.component';
import { AddFreelancerComponent } from './add-freelancer/add-freelancer.component';
import { UpdateFreelancerComponent } from './update-freelancer/update-freelancer.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParDomaineComponent } from './recherche-par-domaine/recherche-par-domaine.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeDomainesComponent } from './liste-domaines/liste-domaines.component';
import { UpdateDomaineComponent } from './update-domaine/update-domaine.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    FreelancersComponent,
    AddFreelancerComponent,
    UpdateFreelancerComponent,
    RechercheParDomaineComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeDomainesComponent,
    UpdateDomaineComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
