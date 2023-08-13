import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './Models/face-snap-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  faceSnaps!: FaceSnap[];

  mysnap!: FaceSnap;
  mysecondsnap!: FaceSnap;
  mythirdsnap!: FaceSnap;
  myfourthsnap!: FaceSnap;

  ngOnInit(){

    this.faceSnaps = [
      {    title: 'Luffy',
      description: "Le pirate qui a mangé le fruit du Gum-Gum",
      imageUrl: "./assets/MjAyMDExNjM1YzM2YmMwMDFhMWU4OGIyZWZmZWE4NDFjNjE1OGM.webp" ,
      createdDate: new Date(),
      memberShip: "Chapeau de Paille",
      numberOfBerry: 500000000,
      strenghPercent: 0.759,
      like: 0},
      {
        title: "Zoro",
        description: "Le chasseur de prime",
        imageUrl: "./assets/roronoa-zoro-roi-des-enfers-one-piece-forme-technique.png",
        createdDate: new Date(),
        memberShip: "Chapeau de Paille",
        numberOfBerry: 250000000,
      strenghPercent: 0.705,
        like: 0
      },
      {
        title: "Ace",
        description: "Le pirate qui a mangé le fruit du Mero Mero",
        imageUrl: "./assets/ace-one-piece-1.jpeg",
        createdDate: new Date(),
        numberOfBerry: 300000000,
        strenghPercent: 0.655,
        like: 0
      },
      {
        title: "Law",
        description: "Le pirate qui a mangé le fruit du Bistouri",
        imageUrl: "./assets/trafalgar-law-polar-tang-one-piece-b6ba8203c53bf55f63d86fd0c29952de.jpeg",
        createdDate: new Date(),
        numberOfBerry: 350000000,
        strenghPercent: 0.608,
        like: 0
      }
    ]


    /* this.mysnap = new FaceSnap(
      "Zoro",
      "./assets/roronoa-zoro-roi-des-enfers-one-piece-forme-technique.png",
      "Le chasseur de prime",
      new Date(),
      200,
      "Chapeau de Paille"
    )
    
    this.mysecondsnap = new FaceSnap(
      "Luffy",
      "./assets/MjAyMDExNjM1YzM2YmMwMDFhMWU4OGIyZWZmZWE4NDFjNjE1OGM.webp",
      "Le pirate qui a mangé le fruit du Gum-Gum",
      new Date(),
      0,
      "Chapeau de Paille"
    )

    this.mythirdsnap = new FaceSnap(
      "Ace",
      "./assets/ace-one-piece-1.jpeg",
      "Le pirate qui a mangé le fruit du Mero Mero",
      new Date(),
      0
    )

    this.myfourthsnap = new FaceSnap(
      "Law",
      "./assets/trafalgar-law-polar-tang-one-piece-b6ba8203c53bf55f63d86fd0c29952de.jpeg",
      "Le pirate qui a mangé le fruit du Bistouri",
      new Date(),
      0
    ) */
  }

}
