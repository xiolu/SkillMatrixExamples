import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LOCAL_STORAGE_KEY } from '../shared/enums/local-storage-key.enum';
import { LocalStorageService } from '../shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent
{


  loginForm = this.fb.group({
    login: [null, Validators.required],
    password: [null, Validators.required],
  });

  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) { }

  login(): void
  {
    // Here comes the check if the user is allowed to login.
    // Call api for login.
    if (this.loginForm.invalid) {
      return;
    }

    // localStorage is just a mocking
    this.localStorageService.setItem(LOCAL_STORAGE_KEY.BEARER_TOKEN, '1');

    this.router.navigate(['/']);
  }
}
