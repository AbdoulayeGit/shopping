
import { Injectable, Input } from '@angular/core';
import { FaceSnap } from '../Models/face-snap-model';

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {


    faceSnaps: FaceSnap[] = [
    { id: 1,
      title: 'Luffy',
      description: "Le pirate qui a mangé le fruit du Gum-Gum",
      imageUrl: "./assets/MjAyMDExNjM1YzM2YmMwMDFhMWU4OGIyZWZmZWE4NDFjNjE1OGM.webp" ,
      createdDate: new Date(),
      memberShip: "Chapeau de Paille",
      numberOfBerry: 500000000,
      strenghPercent: 0.759,
      like: 0},
      {
        id: 2,
        title: "Zoro",
        description: "Le chasseur de prime",
        imageUrl: "./assets/roronoa-zoro-roi-des-enfers-one-piece-forme-technique.png",
        createdDate: new Date(),
        memberShip: "Chapeau de Paille",
        numberOfBerry: 250000000,
        strenghPercent: 0.705,
        like: 0
      },
      { id:4,
        title: "Ace",
        description: "Le pirate qui a mangé le fruit du Mero Mero",
        imageUrl: "./assets/ace-one-piece-1.jpeg",
        createdDate: new Date(),
        numberOfBerry: 300000000,
        strenghPercent: 0.655,
        like: 0
      },
      { id: 5,
        title: "Law",
        description: "Le pirate qui a mangé le fruit du Bistouri",
        imageUrl: "./assets/trafalgar-law-polar-tang-one-piece-b6ba8203c53bf55f63d86fd0c29952de.jpeg",
        createdDate: new Date(),
        numberOfBerry: 350000000,
        strenghPercent: 0.608,
        like: 0
      }
    ]
   

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    // 1 créer une méthode pour récup un facesnap par son id

    getFacesnapById(faceSnapId: number): FaceSnap{
      const faceSnap = this.faceSnaps.find(facesnap => facesnap.id === faceSnapId);
      if(!faceSnap){
        throw new Error('FaceSnap not found');
      }
      return faceSnap;
    }

    snapFacesnap(facesnapId: number, snapType: 'J\'aime' | 'J\'aime pas '){
     const facesnap = this.getFacesnapById(facesnapId);
     snapType === "J'aime" ? facesnap.like++ : facesnap.like--;
    }


    
    /* unsnapFaceSnapById(faceSnapId: number): void {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap) {
            faceSnap.like--;
        } else {
            throw new Error('FaceSnap not found!');
        }
        
    } */

}