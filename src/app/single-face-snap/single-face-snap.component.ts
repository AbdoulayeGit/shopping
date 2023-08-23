import { Component } from '@angular/core';
import { FaceSnapsService } from '../services/face-snap-services';
import { FaceSnap } from '../Models/face-snap-model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {


  colored = false;
  
  facesnap!: FaceSnap; // plus besoin du input

  buttonText!: string;

  constructor(private facesnapService: FaceSnapsService, 
              private  route: ActivatedRoute){}

  ngOnInit(){

    this.buttonText = "J'aime";

    const snapId = +this.route.snapshot.params['id'];
    this.facesnap = this.facesnapService.getFacesnapById(snapId);
    
    }
    
onLikeClick(){
  
  if (this.buttonText == "J'aime") {
    alert(`Tu aimes bien ${this.facesnap.title} !`);
    this.facesnapService.snapFacesnap((this.facesnap.id), "J'aime");
    this.colored = true;
    this.buttonText = "J'aime"  + "👍"; 
    
  } else{
    alert(`Ooh tu n'aimes plus ${this.facesnap.title} !`);
    this.facesnapService.snapFacesnap(this.facesnap.id, "J'aime pas ");
    this.buttonText = "J'aime";
    this.colored = false;
  }
}

/* suppr() {
this.facesnapService.deleteLastFaceSnap();
} */



}
