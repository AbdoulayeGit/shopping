import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-face-snap',
  templateUrl: './add-face-snap.component.html',
  styleUrls: ['./add-face-snap.component.scss']
})
export class AddFaceSnapComponent {


snapForm!: FormGroup;


constructor(private formBuilder: FormBuilder){}

ngOnInit(){

  this.snapForm = this.formBuilder.group({
    title: [null],
    description: [null],
    imageUrl: [null],
    memberShip: [null]
  })
}

onSubmitForm() {

  console.log(this.snapForm.value);
}

}

