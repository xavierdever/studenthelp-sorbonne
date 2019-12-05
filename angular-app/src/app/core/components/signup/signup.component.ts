import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loadingRequest: boolean;
  hide = true;
  email: AbstractControl;
  signUpForm: FormGroup; // Creation formulaire
  errorMessage: string; // Message d'erreur à afficher à l'utilisateur

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.loadingRequest = true;

    this.initForm();
    this.email = this.signUpForm.controls.email;

    this.loadingRequest = false;
  }

  // Initialise Formulaire
  initForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  // Soumission formulaire
  onSubmit() {
    this.loadingRequest = true;

    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    const confirmPassword = this.signUpForm.get('confirmPassword').value;

    if (password === confirmPassword) {
      const userForm = {
        email,
        password
      };

      this.auth.register(userForm)
        .then(res => {
          if (res) {
            this.router.navigate(['./blocmove']);
          } else {
            this.errorMessage = 'Email existe déja';
            this.loadingRequest = false;
          }
        })
        .catch(err => {
          this.errorMessage = 'Erreur système';
          this.loadingRequest = false;
        });
    } else {
      this.errorMessage = 'Mot de passe non valide';
    }
  }

  getErrorMessage() {
    return this.signUpForm.controls.email.hasError('required') ? 'Vous devez entrer une valeur' :
      this.signUpForm.controls.email.hasError('email') ? 'Email non valide' :
        '';
  }
}
