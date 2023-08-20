import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/face-snap-model';
import { FaceSnapsService } from '../services/face-snap-services';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  colored = false;
  
  @Input() facesnap!: FaceSnap; // très important pour pouvoir l'injecter ailleurs

  buttonText!: string;

  constructor(private facesnapService: FaceSnapsService){}

  ngOnInit(){

    this.buttonText = "J'aime";
  
    }
    
onLikeClick(){
  
  if (this.buttonText == "J'aime") {
    alert(`Tu aimes bien ${this.facesnap.title} !`);
    this.facesnapService.getFaceSnapById(this.facesnap.id);
    this.colored = true;
    this.buttonText = "J'aime"  + "👍"; 
    
  } else{
    alert(`Ooh tu n'aimes plus ${this.facesnap.title} !`);
    this.facesnapService.unsnapFaceSnapById(this.facesnap.id);
    this.buttonText = "J'aime";
    this.colored = false;
  }
}
}
