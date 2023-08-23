
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { AddFaceSnapComponent } from './add-face-snap/add-face-snap.component';


const routes: Routes= [
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
  {path: 'create', component: AddFaceSnapComponent},
  { path: 'facesnaps', component: FaceSnapListComponent, },
  { path: '', component: LandingPageComponent }

];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class AppRoutingModule {}