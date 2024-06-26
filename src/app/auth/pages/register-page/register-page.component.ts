import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import * as customValidator from '../../../shared/validators/validators'
import { ValidatorService } from 'src/app/shared/service/validators.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  constructor (
    private fb: FormBuilder,
    private validatorsService:ValidatorService
    ){}


  public myForm: FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    email:['',[Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    username:['',[Validators.required,this.validatorsService.cantBeStrider]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required]]
  })

  isValidField(field: string){
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
