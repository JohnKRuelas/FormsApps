import { Component,OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/service/validators.service';


@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent implements OnInit{
  
  constructor(
    private fb: FormBuilder,
    private validatorsService:ValidatorService
    ) {}

  ngOnInit(): void {
    this.myForm.reset(this.person)
  }

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  public person= {
    gender:'F',
    wantNotifications: false,
  }

  isValidField(field: string): boolean | null  {
      // return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
      return this.validatorsService.isValidField(this.myForm, field);

  }


  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
      
    }

    const {termsAndConditions,...newPerson} = this.myForm.value;

    this.person = newPerson;
    console.log(this.myForm.value); 
    console.log(this.person);
  }
  
}
