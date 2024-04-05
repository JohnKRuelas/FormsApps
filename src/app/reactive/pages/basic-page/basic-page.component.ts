import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from 'src/app/shared/service/validators.service';


const rtx={
  name:'RTX4090',
  price:35000,
  inStorage:10,
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent implements OnInit {

  /*
  public myForm:FormGroup = new FormGroup(
    {
      name: new FormControl(''),
      price: new FormControl(0),
      inStorage: new FormControl(0),
      
    }
  )*/
  public myForm : FormGroup = this.fb.group({
    name:['', [ Validators.required,Validators.minLength(3) ]],
    price:[0,[Validators.required,Validators.min(0)]],
    inStorage:[0,[Validators.required,Validators.min(0)]],
  })


  constructor( 
    private fb:FormBuilder,
    private validatorsService:ValidatorService){}

  ngOnInit(): void {
   // this.myForm.reset(rtx);
   
  }
 /* isValidField( field:string): null | boolean{
    return this.myForm.controls[field].errors 
    && this.myForm.controls[field].touched
  }
*/
isValidField(field: string){
  return this.validatorsService.isValidField(this.myForm, field);
}

  getFieldError(field: string ): string | null{
    if(!this.myForm.controls[field]) return null;
    const errors= this.myForm.controls[field].errors || {}; 
    for (const key of Object.keys(errors)) {
      switch(key){
        case 'required':
          return'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
      }
      console.log(key);
    }
    return null;
  } 

  onSave():void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset({ price: 10, inStorage: 0});
  }
}
