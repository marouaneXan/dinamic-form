import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormModel } from './form-model'; 

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private dataUrl = 'your_api_endpoint/form_elements.json'; // Replace with actual URL

  constructor(private http: HttpClient) { }

  getFormElements(): Observable<FormModel[]> {
    return this.http.get<FormModel[]>(this.dataUrl);
  }
}
