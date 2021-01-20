import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OurExpertiseComponent } from './our-expertise/our-expertise.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ProjectWorkComponent } from './project-work/project-work.component';
import { StudiesComponent } from './about-me/studies/studies.component';

const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'company-profile',
    component: CompanyProfileComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'our-expertise',
    component: OurExpertiseComponent
  },
  {
    path: 'our-services',
    component: OurServicesComponent
  },
  {
    path: 'project-work',
    component: ProjectWorkComponent
  },
  {
    path: 'studies',
    component: StudiesComponent
  },
  {
    path: '**',
    redirectTo: '/home-page',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/home-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
