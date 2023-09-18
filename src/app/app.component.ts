import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'it-academy-ng';
  private isSubmitted = false;

  public form = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    address: this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    }),
    nicknames: this.formBuilder.array([])
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  public addNickname() {
    this.nicknames.push(this.formBuilder.control(''));
  }

  public deleteNickname(index: number) {
    this.nicknames.removeAt(index);
  }

  public onSubmit() {
    this.isSubmitted = true;
    console.log(this.form.value);
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.isSubmitted && (this.form.get(controlName)?.hasError(errorName) || false);
  }

  public onReset() {
    this.form.reset();
    this.isSubmitted = false;
  }

  public get nicknames(): FormArray {
    return <FormArray>this.form.get('nicknames');
  }
}
