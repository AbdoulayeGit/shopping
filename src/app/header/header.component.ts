import { Component, Input } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isCollapsed: boolean = true;
  isNavbarFixed: boolean = true;
  isDisabled: boolean = true;

  share(){
    // alert("il faut liker un facesnap avant de partager");
    
  }

  disabled(){
    
  }
}
