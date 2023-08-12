import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './Models/face-snap-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mysnap!: FaceSnap;
  mysecondsnap!: FaceSnap;

  ngOnInit(){
    this.mysnap = new FaceSnap(
      "Zoro",
      "./assets/roronoa-zoro-roi-des-enfers-one-piece-forme-technique.png",
      "Le chasseur de prime",
      new Date(),
      0
    )
    
    this.mysecondsnap = new FaceSnap(
      "Luffy",
      "./assets/MjAyMDExNjM1YzM2YmMwMDFhMWU4OGIyZWZmZWE4NDFjNjE1OGM.webp",
      "Le pirate qui a mangé le fruit du Gum-Gum",
      new Date(),
      0
    )
  }

}
