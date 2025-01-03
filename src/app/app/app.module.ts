import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';
import { BackgroundComponent } from '../background/background.component';
import { ResumeComponent } from '../resume/resume.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsResumeComponent } from '../projects-resume/projects-resume.component';
import { StudiesComponent } from '../studies/studies.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ModalCertificateComponent } from '../modal-certificate/modal-certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    HamburgerMenuComponent,
    BackgroundComponent,
    ResumeComponent,
    SkillsComponent,
    ProjectsResumeComponent,
    StudiesComponent,
    ProjectCardComponent,
    FooterComponent,
    ModalCertificateComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
