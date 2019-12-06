import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loadingRequest: boolean;
  hide = true;
  email: AbstractControl;
  signInForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.loadingRequest = true;

    this.initForm();
    this.email = this.signInForm.controls.email;

    this.loadingRequest = false;
  }

  // Initialise Formulaire
  initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{5,}/)]]
    });
  }

  // Soumission formulaire
  onSubmit(): void {
    this.loadingRequest = true;

    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;

    const userForm = {
      email,
      password
    };
    if (userForm) {
      this.auth.login(userForm)
        .then(res => {
          if (res) {
            this.router.navigate(['/blogs']);
          }
        }).catch(err => {
        this.errorMessage = 'Email ou mot de passe non valide';
        this.loadingRequest = false;
      });
    }
  }

  getErrorMessage() {
    return this.signInForm.controls.email.hasError('required') ? 'Vous devez entrer une valeur' :
      this.signInForm.controls.email.hasError('email') ? 'Email non valide' :
        '';
  }
}
