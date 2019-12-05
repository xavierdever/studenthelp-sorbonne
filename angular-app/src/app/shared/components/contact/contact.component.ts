import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ContactService} from '../../../core/services/contact/contact.service';
import {ContactInterface} from 'src/app/shared/class/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  email;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private contactService: ContactService
  ) {
  }

  ngOnInit() {
    this.initForm();
    this.email = this.contactForm.controls.email;
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['']
    });
  }

  rebuildForm() {
    this.contactForm.reset({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  onSubmit() {
    const contactForm: ContactInterface = {
      name: this.contactForm.get('name').value,
      email: this.contactForm.get('email').value,
      inbox: {
        subject: this.contactForm.get('subject').value,
        message: this.contactForm.get('message').value
      }
    };

    this.contactService.sendContact(contactForm)
      .then(res => {
        if (res) {
          alert('Mail bien reçu merci !');
          this.rebuildForm();
        } else {
          alert('Erreur d\'envoi...');
        }
      })
      .catch(err => {
        alert('Erreur d\'envoi...');
      });
  }

  getErrorMessage() {
    return this.contactForm.controls.email.hasError('required') ? 'Vous devez entrer une valeur' :
      this.contactForm.controls.email.hasError('email') ? 'Email non valide' :
        '';
  }
}
