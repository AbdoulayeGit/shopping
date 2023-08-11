import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  title!: string;
  imageUrl!: string
  description!: string;
  createdDate!: Date;
  snpas!: number;

  ngOnInit(){
    this.title = "Luffy";
    this.imageUrl = "./assets/MjAyMDExNjM1YzM2YmMwMDFhMWU4OGIyZWZmZWE4NDFjNjE1OGM.webp"
    this.description = "Le pirate qui à manger le fruit du Gum-Gum";
    this.createdDate = new Date();
    this.snpas = 0;
  }

}
