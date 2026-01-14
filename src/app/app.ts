import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Contact } from "./contact/contact";
import { Projects } from "./projects/projects";
import { About } from "./about/about";
import { HeroComponent } from "./hero/hero";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Contact, Projects, About, HeroComponent],
  template: `
    <app-navbar></app-navbar>
    <app-hero id="hero"></app-hero>
    <app-about id="about"></app-about>
    <app-projects id="projects"></app-projects>
    <app-contact id="contact"></app-contact>
  `,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Portfolio');
}
