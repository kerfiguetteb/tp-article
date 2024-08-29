import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Contact from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

formContact:Contact = {

  nom:'',
  prenom:'',
  email:'',
  content:''
}

messageries : Contact[] = []

ajouterContact(){
  this.messageries.push(this.formContact);
}

}
