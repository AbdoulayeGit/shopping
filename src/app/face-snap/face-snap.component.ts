import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/face-snap-model';
import { FaceSnapsService } from '../services/face-snap-services';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {


  colored = false;
  
  @Input() facesnap!: FaceSnap; // très important pour pouvoir l'injecter ailleurs

  buttonText!: string;

  constructor(private facesnapService: FaceSnapsService, 
              private route: Router, private location: Location){}

  ngOnInit(){

    this.buttonText = "J'aime";
  
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

onViewFacesnap(){
this.route.navigateByUrl(`facesnaps/${this.facesnap.id}`)
}

deleteOnefaceSnap(){
  this.facesnapService.deleteOneFaceSnap(this.facesnap.id);
  this.route.navigateByUrl(''); this.route.navigateByUrl('/facesnaps');

	}

  }



