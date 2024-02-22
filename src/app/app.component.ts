import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { relations } from './data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dinamic-form';
  relations = relations
  form = new FormGroup({});
  relationKey = 'FAM_MMF'
  error: any = ''

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    const group: any = {};

    this.relations.forEach((relation: any) => {
      relation.fields.forEach((field: any) => {
        group[field.key] = new FormControl('', Validators.required);
      });
    });

    return this.fb.group(group);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      for (const controlKey in this.form.controls) {
        const control = this.form.get(controlKey);

        if (control?.invalid) {
          this.error = control.errors
        }
      }
    } else {
      console.log("this.form.value");
      console.log(this.form.value);
      console.log("this.form.value");
    }
  }

  relationSelected(relationKey: any) {
    return this.relations.map((rk: any) => {
      return rk.key === relationKey ? rk : ''
    })
  }



}
