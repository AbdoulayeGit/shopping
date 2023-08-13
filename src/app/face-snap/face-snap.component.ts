import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/face-snap-model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  colored = false;
  @Input() facesnap!: FaceSnap; // très important pour pouvoir l'injecter ailleurs

  title!: string;
  imageUrl!: string
  description!: string;
  createdDate!: Date;
  like!: number;
  buttonText!: string;
  //liked!: boolean;

  ngOnInit(){


    this.title = "Luffy";
    this.imageUrl = "./assets/MjAyMDExNjM1YzM2YmMwMDFhMWU4OGIyZWZmZWE4NDFjNjE1OGM.webp"
    this.description = "Le pirate qui a mangé le fruit du Gum-Gum";
    this.createdDate = new Date();
    this.like = 0;
    this.buttonText = "J'aime";
    //this.liked = false;

    }

    // 1ère méthode tout est ce qui est en commentaire
/* onLike(){
  // ne pas oublier de modifier this.like par this.facesnap.like
  if(this.snapped){ //if true
    this.like--;
    this.buttonText = "J'aime";
    this.snapped = false; // change to false to enter the else
  }else{
    this.like++;
    this.buttonText = "J'aime" + "  👍";
    this.snapped = true; // change to true to enter the if
  }

} */

// 2ème méthode
onLikeClick(){

  if (this.buttonText == "J'aime") {
    this.facesnap.like++;
    this.colored = true;
    this.buttonText = "J'aime"  + "👍"; 
    
  } else{
    this.facesnap.like--;
    this.buttonText = "J'aime";
    this.colored = false;
  }
}
/* onChange(){
  if (this.colored) {
    this.colored = false;
  }else this.colored = true;
} */
}
