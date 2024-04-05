import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/service/validators.service';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear Solid', Validators.required],
      ['Megaman', Validators.required],
    ]),
  });
  
  public newFavorite :FormControl = new FormControl('',Validators.required);

  constructor(
    private fb: FormBuilder,
    private validatorsService:ValidatorService) {}

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  isValidField(field: string): null | boolean {
   /* return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );*/
    return this.validatorsService.isValidField(this.myForm, field);

    
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
          case 'minlength':
            return `Mínimo ${ errors['minlength'].requiredLength } caracters.`;
        }
     
    }
    return null;
  }

  onDeleteFavorite(index:number):void{
  this.favoriteGames.removeAt(index);
  }

  onAddToFavorites():void{
    if(this.newFavorite.invalid) return;
    const newGame = this.newFavorite.value;

    this.favoriteGames.push(
      this.fb.control(newGame,Validators.required)
    );
    this.newFavorite.reset();
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) =  this.fb.array([]);
    this.myForm.reset();

  }
}
