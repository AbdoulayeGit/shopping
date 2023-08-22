import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  userEmail!: string;
  userLastname!: string;
  userFirstname!: string;
  constructor(private route: Router){}

  ngOnInit(){

  }

  onContinue(): void{
    this.route.navigateByUrl('facesnaps')
  }
  displayUserEmail(form: NgForm) {
    console.log(form.value);
  }
}
