import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/face-snap-model';
import { FaceSnapsService } from '../services/face-snap-services';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent {
  faceSnaps!: FaceSnap[];

  constructor(private facesnapService: FaceSnapsService){};
  
  ngOnInit(){

    this.faceSnaps = this.facesnapService.getAllFaceSnaps();


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
