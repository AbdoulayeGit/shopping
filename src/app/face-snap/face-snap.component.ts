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

  buttonText!: string;

  ngOnInit(){

    this.buttonText = "J'aime";
  
    }
    
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
}
