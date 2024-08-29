import { Component } from '@angular/core';
import Contact from '../../models/contact.model';

@Component({
  selector: 'app-messagerie',
  standalone: true,
  imports: [],
  templateUrl: './messagerie.component.html',
  styleUrl: './messagerie.component.css'
})
export class MessagerieComponent  {

  messageries !: Contact[]

}
