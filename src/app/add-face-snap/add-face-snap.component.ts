import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { FaceSnap } from '../Models/face-snap-model';
import { FaceSnapsService } from '../services/face-snap-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-face-snap',
  templateUrl: './add-face-snap.component.html',
  styleUrls: ['./add-face-snap.component.scss']
})
export class AddFaceSnapComponent {


snapForm!: FormGroup;
previewFacesnap$!: Observable<FaceSnap>;
validUrl!: RegExp;


constructor(private formBuilder: FormBuilder, private facesnapService : FaceSnapsService,
            private route: Router){}

ngOnInit(){

  this.snapForm = this.formBuilder.group({
    title: [null, [Validators.required]],
    description: [null],
    imageUrl: [null, [Validators.required, Validators.pattern(this.validUrl)]],
    memberShip: [null],
    numberOfBerry: [null],
    strenghPercent: [null]
  },{updateOn: 'blur'})

  this.previewFacesnap$ = this.snapForm.valueChanges;
  this.previewFacesnap$ = this.snapForm.valueChanges.pipe(
    map(
      formValue => ({
        ...formValue,
        createdDate: new Date(),
        like: 0,
        id: 0,
      })
    )
  )
  this.validUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
}

onSubmitForm() {

  //console.log(this.snapForm.value);
  this.facesnapService.addFaceSnap(this.snapForm.value);
  this.route.navigateByUrl('/facesnaps');

}

}

