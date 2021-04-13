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
import { StudiesComponent } from './about-me/studies/studies.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserAuthserviceService } from './services/user-authservice.service';


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
    TermsComponent,
    StudiesComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [UserAuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
