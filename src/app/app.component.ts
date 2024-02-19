import { Component } from '@angular/core';
import { FormModel } from './form-model';
import { FormControl, FormGroup } from '@angular/forms';
import { FormService } from './form-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dinamic-form';
  formElements: FormModel[] = [];
  dropdownOptions: string[] = [];
  selectedOption: string = '';
  dynamicForm = new FormGroup({});


  constructor(private formService: FormService) { }

  fetchData() {
    this.formService.getFormElements().subscribe(data => {
      this.formElements = data;
      this.dropdownOptions = this.formElements.map(section => section.type);
      this.dynamicForm = new FormGroup({});
    });
  }
  onSubmit() {
    console.log(this.dynamicForm.value);
  }
  onDropdownChange(option: string) {
    this.selectedOption = option;
    this.generateForm();
  }
  generateForm() {
    this.dynamicForm = new FormGroup({});
  
    const selectedFormElements = this.formElements.filter(element => element.type === this.selectedOption);
  
    selectedFormElements.forEach(element => { 
      if (element.validators) {  // Check if any validation rules are present
        this.dynamicForm.addControl(element.label, new FormControl('', element.validators as [])); 
      } else {
        this.dynamicForm.addControl(element.label, new FormControl('')); 
      }
    });
  }
  

}
