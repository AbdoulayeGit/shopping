// Créer un dossier model puis fichier facesnap.ts dans lequel on crée une classe pour pouvoir facilement instancier nos facesnpas

// methode classique mais trop surchargée
export class FaceSnap{
 /* 
    title: string;
    imageUrl: string;
    description: string;
    createdDate: Date;
    like: number;

    constructor(title: string, description: string, imageUrl: string, createdDate: Date, like: number) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createdDate = createdDate;
        this.like = like;
  } */

  //méthode simplifié et courte
    constructor(public id: number,
                public title: string, 
                public imageUrl: string,
                public description: string,
                public createdDate: Date,
                public like: number,
                public numberOfBerry: number,
                public strenghPercent: number,
                public memberShip?: string
        ){}

        // I am about to sleep, tomorrow i will implement this type to the Appcomponent

        // go to face-snap.component.ts and create a property called facesnap with the type of FaceSnap that we created here but don't forget the decorator @input() to allow injection of that property outside

        // then go to the parent component (app.component.ts), declare a property of type's FaceSnap and initialise it in ngOnInit with yourproperty = new FaceSnap (fill up as it is in the constructor)

        // then use the attribute binding in app.component.html [yourproperty declared in face-snap.component] = "yourpropertydeclared in app.component"

        // then go to the face-snap template et update datas of string interpolations and atribute binding because it's facesnap.title , facesnap.imamgUrl , description and like.

        // if you want to display a another facesnap in the DOM, create another property in app.component, initialise it and add another face-snap template in app.component template with the atribute binding of your second property -> <app-face-snap [facesnap]="yoursecondproperty"> </app-face-snap>

        // don't forget that the button won't work because of the change, you will have to modify. you have to add this.facesnap.like '++' or '--' to the onLikeClick method.

}