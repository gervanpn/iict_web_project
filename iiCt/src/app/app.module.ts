import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurExpertiseComponent } from './our-expertise/our-expertise.component';
import { ProjectWorkComponent } from './project-work/project-work.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { TermsComponent } from './footer/terms/terms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    CompanyProfileComponent,
    OurServicesComponent,
    OurExpertiseComponent,
    ProjectWorkComponent,
    ContactUsComponent,
    AboutMeComponent,
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
